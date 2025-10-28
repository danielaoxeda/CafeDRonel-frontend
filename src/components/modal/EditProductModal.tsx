import { useState } from "react";
import { toast } from "sonner";
import type ProductsResponse from "../../interface/ProductsResponse";
import { updateProduct } from "../../services/productsServices";
import Button from "../button/GeneralButton";

interface EditProductModalProps {
  product: ProductsResponse;
  onClose: () => void;
  onRefresh: () => void;
}

export function EditProductModal({ product, onClose, onRefresh }: EditProductModalProps) {
  const [formData, setFormData] = useState({
    nombre: product.nombre,
    categoria: product.categoria,
    subtipo: product.subtipo,
    descripcion: product.descripcion || "",
    precio: product.precio,
    stock: product.stock,
    activo: product.activo,
  });

  const handleChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!formData.nombre || formData.precio <= 0 || formData.stock < 0) {
      toast.error("Completa todos los campos correctamente");
      return;
    }

    const updatedData = {
      ...product,
      ...formData,
    };

    const result = await updateProduct(product.idProducto, updatedData);
    if (result) {
      toast.success("Producto actualizado correctamente");
      onRefresh();
    } else {
      toast.error("Error al actualizar el producto");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>

        <div className="flex flex-col gap-3">
          {/* Nombre */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre</label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Categoría</label>
            <select
              value={formData.categoria}
              onChange={(e) => handleChange("categoria", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="empaque">Empaque</option>
              <option value="cafetera">Cafetera</option>
            </select>
          </div>

          {/* Subtipo */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Subtipo</label>
            <input
              type="text"
              value={formData.subtipo}
              onChange={(e) => handleChange("subtipo", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Descripción</label>
            <textarea
              value={formData.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              rows={2}
            />
          </div>

          {/* Precio y Stock */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Precio (S/.)</label>
              <input
                type="number"
                value={formData.precio}
                onChange={(e) => handleChange("precio", Number(e.target.value))}
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => handleChange("stock", Number(e.target.value))}
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Estado */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={formData.activo}
              onChange={(e) => handleChange("activo", e.target.checked)}
            />
            <label className="text-sm font-medium text-gray-700">Activo</label>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}
