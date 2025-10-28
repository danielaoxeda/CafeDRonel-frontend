import { useState } from "react";
import { toast } from "sonner";
import Button from "../button/GeneralButton.tsx";
import { createProduct } from "../../services/productsServices.ts";

interface AddProductModalProps {
  onClose: () => void;
  onProductAdded: () => void;
}

export function AddProductModal({ onClose, onProductAdded }: AddProductModalProps) {
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    categoria: "empaque",
    subtipo: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    activo: true,
  });

  const handleCreateProduct = async () => {
    if (!newProduct.nombre || newProduct.precio <= 0 || newProduct.stock < 0) {
      toast.error("Completa todos los campos correctamente");
      return;
    }

    const created = await createProduct(newProduct);
    if (created) {
      toast.success("Producto agregado correctamente");
      onProductAdded();
      onClose();
    } else {
      toast.error("Error al agregar el producto");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>

        <div className="flex flex-col gap-3">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Nombre
            </label>
            <input
              type="text"
              value={newProduct.nombre}
              onChange={(e) =>
                setNewProduct({ ...newProduct, nombre: e.target.value })
              }
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Categoría
            </label>
            <select
              value={newProduct.categoria}
              onChange={(e) =>
                setNewProduct({ ...newProduct, categoria: e.target.value })
              }
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="empaque">Empaque</option>
              <option value="cafetera">Cafetera</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Subtipo
            </label>
            <input
              type="text"
              value={newProduct.subtipo}
              onChange={(e) =>
                setNewProduct({ ...newProduct, subtipo: e.target.value })
              }
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Descripción
            </label>
            <textarea
              value={newProduct.descripcion}
              onChange={(e) =>
                setNewProduct({ ...newProduct, descripcion: e.target.value })
              }
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Precio (S/.)
              </label>
              <input
                type="number"
                value={newProduct.precio}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    precio: Number(e.target.value),
                  })
                }
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Stock
              </label>
              <input
                type="number"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    stock: Number(e.target.value),
                  })
                }
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={newProduct.activo}
              onChange={(e) =>
                setNewProduct({ ...newProduct, activo: e.target.checked })
              }
            />
            <label className="text-sm font-medium text-gray-700">Activo</label>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleCreateProduct}>Guardar</Button>
        </div>
      </div>
    </div>
  );
}
