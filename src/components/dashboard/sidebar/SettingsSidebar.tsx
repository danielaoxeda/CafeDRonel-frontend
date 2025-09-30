import { User, Image, Lock } from "lucide-react";
type SidebarSettings = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { id: "perfil", label: "Perfil", icon: User },
  { id: "contenido", label: "Contenido", icon: Image },
  { id: "seguridad", label: "Seguridad", icon: Lock },
];

export default function SettingsSidebar({ activeTab, setActiveTab }: SidebarSettings) {
  return (

    <div className="w-72 h-90 ml-0 rounded-md bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Configuración</h2>
      <ul className="space-y-3">
        {tabs.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md ${
                activeTab === id
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
}
