import type { TableColumn, TableStyles } from "react-data-table-component";
import DataTable from "react-data-table-component";
import { useState } from "react";
import type OrdersResponse from "../../../interface/OrdersResponse";
import { toast } from "sonner";
import { updateOrderStateByID } from "../../../services/ordersService";

interface OrdersTableProps {
    orders: OrdersResponse[];
    onRefresh: () => void;
}

export default function OrdersTable({ orders, onRefresh }: OrdersTableProps) {
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const handleStatusChange = async (idPedido: number, newStatus: string) => {
        try {
            console.log("🟡 Intentando actualizar pedido:", idPedido, "a estado:", newStatus);
            setLoadingId(idPedido);
            const updated = await updateOrderStateByID(idPedido, newStatus);
            console.log("🟢 Resultado del update:", updated);

            if (updated) {
                toast.success(`Pedido #${idPedido} actualizado a "${newStatus}"`);
                onRefresh();
            } else {
                toast.error("No se pudo actualizar el estado del pedido");
            }
        } catch (error) {
            console.error("🔴 Error dentro de handleStatusChange:", error);
            toast.error("Error al actualizar el pedido");
        } finally {
            setLoadingId(null);
        }
    };


    const columns: TableColumn<OrdersResponse>[] = [
        { name: "ID", selector: (row) => row.idPedido, sortable: true, center: true },
        {
            name: "Productos",
            selector: (row) =>
                row.detalles && row.detalles.length > 0
                    ? row.detalles.map((d) => d.producto.nombre).join(", ")
                    : "-",
            wrap: true,
        },
        { name: "Fecha", selector: (row) => new Date(row.fecha).toLocaleDateString(), center: true },
        { name: "Teléfono", selector: (row) => row.telefono ?? "-", center: true },
        { name: "Dirección", selector: (row) => row.direccion ?? "-", center: true },
        { name: "Estado", selector: (row) => row.estado ?? "-", center: true },
        {
            name: "Estado del Pedido",
            cell: (row) => (
                <select
                    value={row.estado}
                    onChange={(e) => handleStatusChange(row.idPedido, e.target.value)}
                    disabled={loadingId === row.idPedido}
                    className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                >
                    <option value="PENDIENTE">Pendiente</option>
                    <option value="CONFIRMADO">Confirmado</option>
                    <option value="EN_PREPARACION">En preparación</option>
                    <option value="LISTO">Listo</option>
                    <option value="EN_CAMINO">En camino</option>
                    <option value="ENTREGADO">Entregado</option>
                    <option value="CANCELADO">Cancelado</option>
                </select>
            ),
            center: true,
        },
    ];

    // Estilos personalizados para filas y celdas
    const customStyles: TableStyles = {
        rows: {
            style: {
                minHeight: "72px",
                fontSize: "15px",
            },
        },
        headCells: {
            style: {
                backgroundColor: "#f8fafc",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase" as const,
                color: "#374151",
                paddingTop: "12px",
                paddingBottom: "12px",
            },
        },
        cells: {
            style: {
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            },
        },
    };

    return (
        <div className="border rounded-lg overflow-hidden border-gray-200 shadow-sm">
            <DataTable
                columns={columns}
                data={orders}
                noDataComponent={"No hay pedidos registrados"}
                pagination
                highlightOnHover
                striped
                customStyles={customStyles}
            />
        </div>
    );
}
