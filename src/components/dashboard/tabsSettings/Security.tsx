import { useState } from "react";
import Button from "../../button/GeneralButton";

export function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState("admin123@"); //contraseña actual

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentPassword !== savedPassword) {
      alert("La contraseña actual no es correcta");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setSavedPassword(newPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Contraseña actualizada con éxito ✅");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Seguridad</h2>

      {/* Formulario de cambio de contraseña */}
      <form onSubmit={handlePasswordChange} className="max-w-lg space-y-4 ml-14">
        <div>
          <label className="block text-sm font-medium">Contraseña actual</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Introduce la contraseña actual"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Nueva contraseña</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nueva contraseña"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repite la nueva contraseña"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button type="submit" className="mt-4">
          Cambiar contraseña
        </Button>
      </form>

      {/* Separador */}
      <div className="my-8 border-t border-gray-300"></div>

      {/* Cerrar sesión */}
      <div className="ml-14">
        <h3 className="text-lg font-medium mb-2">Cerrar sesión</h3>
        <p className="text-sm text-gray-600 mb-4">
          Puedes cerrar tu sesión en todos los dispositivos activos por seguridad.
        </p>
        <Button variant="danger">Cerrar sesión en todos los dispositivos</Button>
      </div>
    </div>
  );
}
