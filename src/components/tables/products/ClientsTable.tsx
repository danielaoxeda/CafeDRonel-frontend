import {useState} from "react";
import type {TableColumn} from "react-data-table-component";
import DataTable from "react-data-table-component";
import Button from "../../button/Button.tsx";
import { PencilIcon, TrashIcon } from "lucide-react";

interface ClientsDataRow {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    active: boolean;
}

const customStyles = {
  headCells: {
    style: {
      fontSize: "16px", 
      fontWeight: "600",
    },
  },
  cells: {
    style: {
      fontSize: "16px", 
    },
  },
  rows: {
    style: {
      minHeight: "60px", 
    },
  },
};


const data: ClientsDataRow[] = [
    {
        id: 1,
        name: "Claudia",
        lastName: "Villalta",
        email: "claudiav@gmail.com",
        phone: "987234112",
        active: true,
    },
    {
        id: 2,
        name: "Marco",
        lastName: "Del Castillo",
        email: "mDelCastillo@gmail.com",
        phone: "900138873",
        active: true,
    },
    {
        id: 3,
        name: "Mariana",
        lastName: "Flores",
        email: "mariflores@gmail.com",
        phone: "913792010",
        active: true,
    },
];

export default function ClientsTable() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ClientsDataRow | null>(null);

    const handleEdit = (row: ClientsDataRow) => {
        setSelectedProduct(row);
        setIsEditModalOpen(true);
    };

    const handleDelete = (row: ClientsDataRow) => {
        if (window.confirm(`¿Estás seguro que deseas eliminar el producto "${row.name}"?`)) {
            // TODO: Implementar la lógica de eliminación
            console.log("Eliminando producto:", row);
        }
    };

    const columns: TableColumn<ClientsDataRow>[] = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
            center: true
        },
        {
            name: "Nombre",
            selector: (row) => row.name,
            sortable: true,
            center: true
        },
        {
            name: "Apellido",
            selector: (row) => row.lastName,
            sortable: true,
            center: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
            center: true
        },
        {
            name: "Celular",
            selector: (row) => row.phone,
            sortable: true,
            center: true
        },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="flex gap-2">
                    <Button variant="warning" className="py-1 px-2" onClick={() => handleEdit(row)}>
                        <PencilIcon />
                    </Button>
                    <Button variant="danger" className="py-1 px-2" onClick={() => handleDelete(row)}>
                        <TrashIcon />
                    </Button>
                </div>
            ),
            sortable: false,
            center: true,
        },
    ];

    return (
        <div className="border rounded-lg overflow-hidden border-gray-200">
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                noDataComponent={"Aún no tienes clientes registrados"}
                pagination
            />

            {isEditModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-2xl flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Editar Cliente</h2>
                        {/* TODO: Agregar formulario de edición */}
                        <div className="flex justify-end gap-2 mt-4">
                            <Button variant="secondary" onClick={() => setIsEditModalOpen(false)}>
                                Cancelar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    // TODO: Implementar lógica de guardado
                                    setIsEditModalOpen(false);
                                }}
                            >
                                Guardar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    
}


