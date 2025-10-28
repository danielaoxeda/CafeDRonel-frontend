import { toast } from "sonner";
import Button from "../button/GeneralButton";
import type ClientsResponse from "../../interface/ClientsResponse";
import { deleteClient } from "../../services/clientsServices";

interface DeleteClientModalProps {
  client: ClientsResponse;
  onClose: () => void;
  onRefresh: () => void;
}

export function DeleteClientModal({client, onClose, onRefresh }: DeleteClientModalProps) {
  const handleDelete = async () => {
    toast.promise(
      new Promise<string>(async (resolve, reject) => {
        try {
          const success = await deleteClient(client.idUsuario);
          if (success) {
            resolve("Cliente eliminado correctamente");
            onRefresh();
          } else {
            reject("No se pudo eliminar el cliente");
          }
        } catch (error) {
          reject("Error al eliminar cliente");
        }
      }),
      {
        loading: `Eliminando "${client.nombre}"...`,
        success: (msg) => msg,
        error: (err) => err,
      }
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Eliminar Cliente</h2>
        <p className="text-gray-700 mb-4">
          ¿Estás seguro de que deseas eliminar el cliente <span className="font-semibold text-red-600">"{client.nombre}"</span>?
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </div>
    </div>
  );
}