import { toast } from "sonner";
import type ProductsResponse from "../../interface/ProductsResponse";
import { deleteProduct } from "../../services/productsServices";
import Button from "../button/GeneralButton";

interface DeleteProductModalProps {
  product: ProductsResponse;
  onClose: () => void;
  onRefresh: () => void;
}

export function DeleteProductModal({ product, onClose, onRefresh }: DeleteProductModalProps) {
  const handleDelete = async () => {
    toast.promise(
      new Promise<string>(async (resolve, reject) => {
        try {
          const success = await deleteProduct(product.idProducto);
          if (success) {
            resolve("Producto eliminado correctamente");
            onRefresh();
          } else {
            reject("No se pudo eliminar el producto");
          }
        } catch (error) {
          reject("Error al eliminar producto");
        }
      }),
      {
        loading: `Eliminando "${product.nombre}"...`,
        success: (msg) => msg,
        error: (err) => err,
      }
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Eliminar Producto</h2>
        <p className="text-gray-700 mb-4">
          ¿Estás seguro de que deseas eliminar el producto <span className="font-semibold text-red-600">"{product.nombre}"</span>?
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </div>
    </div>
  );
}