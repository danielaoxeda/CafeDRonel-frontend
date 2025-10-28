import { useState} from "react";
import type { TableColumn } from "react-data-table-component";
import DataTable from "react-data-table-component";
import Button from "../../button/GeneralButton.tsx";
import { PencilIcon, TrashIcon } from "lucide-react";
import type ProductsResponse from "../../../interface/ProductsResponse.ts";
import { EditProductModal } from "../../modal/EditProductModal.tsx";
import { DeleteProductModal } from "../../modal/DeleteProductModal.tsx";

interface ProductsTableProps {
  products: ProductsResponse[];
  onRefresh: () => void;
}

export default function ProductsTable({ products, onRefresh }: ProductsTableProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductsResponse | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const columns: TableColumn<ProductsResponse>[] = [
    { name: "ID", selector: (row) => row.idProducto, sortable: true, center: true },
    { name: "Nombre", selector: (row) => row.nombre, sortable: true, center: true },
    { name: "Categoría", selector: (row) => row.categoria, sortable: true, center: true },
    { name: "Subtipo", selector: (row) => row.subtipo, sortable: true, center: true },
    { name: "Precio", cell: (row) => `S/. ${row.precio}`, sortable: true, center: true },
    { name: "Stock", selector: (row) => row.stock, cell: (row) => `${row.stock} u`, center: true },
    { name: "Estado", cell: (row) => (row.activo ? "Activo" : "Inactivo"), center: true },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex gap-2">
          <Button variant="warning" className="py-1 px-2" onClick={() => { setSelectedProduct(row); setIsEditModalOpen(true); }}>
            <PencilIcon />
          </Button>
          <Button variant="danger" className="py-1 px-2" onClick={() => { setSelectedProduct(row); setIsDeleteModalOpen(true); }}>
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
        noDataComponent={"Aún no tienes productos registrados"}
        pagination
      />

      {isEditModalOpen && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsEditModalOpen(false)}
          onRefresh={onRefresh}
        />
      )}

      {isDeleteModalOpen && selectedProduct && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
          onRefresh={onRefresh}
        />
      )}
    </div>
  );
}