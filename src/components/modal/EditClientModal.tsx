import { useState } from "react";
import { toast } from "sonner";
import type ClientsResponse from "../../interface/ClientsResponse";
import Button from "../button/GeneralButton";
import { updateClient } from "../../services/clientsServices";

interface EditClientModalProps {
  client: ClientsResponse;
  onClose: () => void;
  onRefresh: () => void;
}

export function EditClientModal({ client, onClose, onRefresh }: EditClientModalProps) {
  const [formData, setFormData] = useState({
    nombre: client.nombre,
    apellido: client.apellido || "",
    correo: client.correo,
    telefono: client.telefono,
    direccion: client.direccion,
    activo: client.activo,
  });

  const handleChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!formData.nombre || !formData.correo || !formData.telefono) {
      toast.error("Completa todos los campos obligatorios");
      return;
    }

    const updatedData = {
      ...client,
      ...formData,
    };

    const result = await updateClient(client.idUsuario, updatedData);
    if (result) {
      toast.success("Cliente actualizado correctamente");
      onRefresh();
    } else {
      toast.error("Error al actualizar el cliente");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Editar Cliente</h2>

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

          {/* Apellido */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Apellido</label>
            <input
              type="text"
              value={formData.apellido}
              onChange={(e) => handleChange("apellido", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Correo</label>
            <input
              type="email"
              value={formData.correo}
              onChange={(e) => handleChange("correo", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Teléfono</label>
            <input
              type="text"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Dirección */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Dirección</label>
            <input
              type="text"
              value={formData.direccion}
              onChange={(e) => handleChange("direccion", e.target.value)}
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
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
