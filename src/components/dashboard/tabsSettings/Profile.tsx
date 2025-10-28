import { useUserStore } from "../../../store/userStore";
import { UserIcon } from "lucide-react";
import Button from "../../button/GeneralButton";

export function Profile() {
  const { user:{name, email,phone}, setUser } = useUserStore();
  const handleSave = () => {
    alert("Cambios guardados");
    setUser({name, email, phone});
  };
<div className="flex justify-center"></div>
  return (
    
    <div>
      <h2 className="text-xl font-semibold mb-6">Perfil del Administrador</h2>
      <div className="flex justify-center">
      <form className="max-w-lg space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="relative flex items-center justify-center w-30 h-30 rounded-full bg-primary text-white mb-4 ml-35">
          <span className="text-3xl font-bold">{name.charAt(0).toUpperCase()}</span>
          <UserIcon className="absolute bottom-0 right-0 w-8 h-8 bg-white text-primary rounded-full p-1 shadow" />
        </div>

        {/* Nombre */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setUser({ name: e.target.value, email, phone })}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Correo */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Correo</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setUser({ name, email: e.target.value, phone })}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setUser({ name, email, phone: e.target.value })}
            className="w-96 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button type="submit" className="mt-2">Guardar cambios</Button>
      </form>
    </div>
    </div>
  );
}
