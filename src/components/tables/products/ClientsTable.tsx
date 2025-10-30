import type { TableColumn } from "react-data-table-component";
import DataTable from "react-data-table-component";
import Button from "../../button/GeneralButton";
import { PencilIcon, TrashIcon } from "lucide-react";
import type ClientsResponse from "../../../interface/ClientsResponse";
import { useState } from "react";
import { EditClientModal } from "../../modal/EditClientModal";
import { DeleteClientModal } from "../../modal/DeleteClientModal";

interface ClientsTableProps {
    products: ClientsResponse[];
    onRefresh: () => void;
}

export default function ClientsTable({ products, onRefresh }: ClientsTableProps) {
    const [selectedClients, setSelectedClients] = useState<ClientsResponse | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const columns: TableColumn<ClientsResponse>[] = [
        { name: "ID", selector: (row) => row.idUsuario, sortable: true, center: true },
        { name: "Nombre", selector: (row) => row.nombre, sortable: true, center: true },
        { name: "Apellido", selector: (row) => row.apellido, sortable: true, center: true },
        { name: "Correo", selector: (row) => row.correo, sortable: true, center: true },
        { name: "Teléfono", selector: (row) => row.telefono, sortable: true, center: true },
        { name: "Dirección", selector: (row) => row.direccion, sortable: true, center: true },
        { name: "Estado", cell: (row) => (row.activo ? "Activo" : "Inactivo"), center: true },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="flex gap-2">
                    <Button variant="warning" className="py-1 px-2" onClick={() => { setSelectedClients(row); setIsEditModalOpen(true); }}>
                        <PencilIcon />
                    </Button>
                    <Button variant="danger" className="py-1 px-2" onClick={() => { setSelectedClients(row); setIsDeleteModalOpen(true); }}>
                        <TrashIcon />
                    </Button>
                </div>
            ),
            center: true,
        },
    ];
    return (
        <div className="border rounded-lg overflow-hidden border-gray-200">
            <DataTable
                columns={columns}
                data={products}
                noDataComponent={"Aún no tienes clientes registrados"}
                pagination
            />

            {isEditModalOpen && selectedClients && (
                <EditClientModal
                    client={selectedClients}
                    onClose={() => setIsEditModalOpen(false)}
                    onRefresh={onRefresh}
                />
            )}

            {isDeleteModalOpen && selectedClients && (
                <DeleteClientModal
                    client={selectedClients}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onRefresh={onRefresh}
                />
            )}
        </div>
    );
}