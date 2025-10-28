import { useEffect, useState } from "react";
import Button from "../../components/button/GeneralButton.tsx";
import StatCard from "../../components/card/StateCards.tsx";
import { Header } from "../../components/dashboard/header/Header.tsx";
import ProductsTable from "../../components/tables/products/ProductsTable.tsx";
import { PackageIcon, PlusIcon, TriangleAlertIcon } from "lucide-react";
import { getAllProducts } from "../../services/productsServices.ts";
import type ProductsResponse from "../../interface/ProductsResponse.ts";
import { AddProductModal } from "../../components/modal/AddProductModal.tsx";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Cargar productos desde la API ---
  const fetchProducts = async () => {
    const productsData = await getAllProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- Calcular métricas ---
  const lowStockCount = products.filter((p) => p.stock <= 5).length; 

  return (
    <div className="flex flex-col flex-1 p-10">
      {/* Header */}
      <div className="flex justify-between items-center h-10">
        <h2 className="text-3xl font-bold">Productos</h2>
        <Header />
      </div>

      {/* Botón agregar */}
      <div className="h-20 flex justify-end items-center">
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusIcon /> Agregar Producto
        </Button>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="flex gap-4 mt-6">
        <StatCard
          title="Total Productos"
          icon={<PackageIcon size={40} />}
          value={products.length.toString()}
          className="bg-amber-400!"
        />
        <StatCard
          title="Stock Bajo (&le; 5)"
          icon={<TriangleAlertIcon size={40} />}
          value={lowStockCount.toString()}
          className="bg-amber-400!"
        />
      </div>

      {/* Tabla */}
      <div className="flex-1 mt-8">
        <ProductsTable products={products} onRefresh={fetchProducts} />
      </div>

      {/* Modal para agregar producto */}
      {isModalOpen && (
        <AddProductModal
          onClose={() => setIsModalOpen(false)}
          onProductAdded={fetchProducts}
        />
      )}
    </div>
  );
}
