import {useState} from "react";
import type {TableColumn} from "react-data-table-component";
import DataTable from "react-data-table-component";
import Button from "../../button/Button.tsx";

interface ProductsDataRow {
    id: number;
    name: string;
    category: string;
    subCategory: string;
    price: number;
    stock: number;
    active: boolean;
}

const data: ProductsDataRow[] = [
    {
        id: 1,
        name: "Empaque 1",
        category: "Categoria 1",
        subCategory: "Subcategoria 1",
        price: 17,
        stock: 10,
        active: true,
    },
    {
        id: 2,
        name: "Empaque 2",
        category: "Categoria 2",
        subCategory: "Subcategoria 2",
        price: 15,
        stock: 5,
        active: false,
    },
    {
        id: 3,
        name: "Empaque 3",
        category: "Categoria 3",
        subCategory: "Subcategoria 3",
        price: 10,
        stock: 15,
        active: true,
    },
];

export default function ProductsTable() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductsDataRow | null>(null);

    const handleEdit = (row: ProductsDataRow) => {
        setSelectedProduct(row);
        setIsEditModalOpen(true);
    };

    const handleDelete = (row: ProductsDataRow) => {
        if (window.confirm(`¿Estás seguro que deseas eliminar el producto "${row.name}"?`)) {
            // TODO: Implementar la lógica de eliminación
            console.log("Eliminando producto:", row);
        }
    };

    const columns: TableColumn<ProductsDataRow>[] = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Nombre",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Categoría",
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: "Subtipo",
            selector: (row) => row.subCategory,
            sortable: true,
        },
        {
            name: "Precio",
            selector: (row) => row.price,
            cell: (row) => `S/. ${row.price}`,
            sortable: true,
            right: true,
        },
        {
            name: "Stock",
            selector: (row) => row.stock,
            cell: (row) => `${row.stock} unidades`,
            sortable: true,
            right: true,
        },
        {
            name: "Estado",
            selector: (row) => row.active,
            cell: (row) => (row.active ? "Activo" : "Inactivo"),
            sortable: true,
        },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="flex gap-2">
                    <Button variant="warning" className="py-1 px-2" onClick={() => handleEdit(row)}>
                        Editar
                    </Button>
                    <Button variant="danger" className="py-1 px-2" onClick={() => handleDelete(row)}>
                        Eliminar
                    </Button>
                </div>
            ),
            sortable: false,
            right: true,
        },
    ];

    return (
        <div className="border rounded-lg overflow-hidden border-gray-200">
            <DataTable
                columns={columns}
                data={data}
                noDataComponent={"Aun no tienes productos publicados"}
                pagination
            />

            {isEditModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-2xl flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
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