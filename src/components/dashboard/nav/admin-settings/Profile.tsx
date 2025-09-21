import { useUser } from "../../../User/UserContext";
import Button from "../button/Button";
import { UserIcon } from "lucide-react";
import { useState } from "react";

export function Profile() {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ name, email, phone }); 
    alert("Cambios guardados correctamente ✅");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Perfil del Administrador</h2>

      <form className="max-w-lg space-y-6 ml-10" onSubmit={handleSave}>
        {/* Avatar con inicial + icono */}
        <div className="relative flex items-center justify-center w-30 h-30 rounded-full bg-primary text-white mb-4 ml-35">
          <span className="text-3xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </span>
          <UserIcon className="absolute bottom-0 right-0 w-8 h-8 bg-white text-primary rounded-full p-1 shadow" />
        </div>

        {/* Nombre */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Correo */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button className="mt-2" type="submit">Guardar cambios</Button>
      </form>
    </div>
  );
}
