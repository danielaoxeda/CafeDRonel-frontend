import { useState } from "react";
import { Profile } from "../../components/dashboard/nav/admin-settings/Profile";
import { Security } from "../../components/dashboard/nav/admin-settings/Security";
import { Content } from "../../components/dashboard/nav/admin-settings/Content";
import { Header } from "../../components/dashboard/nav/Header/Header";
import { Sidebar as SettingsSidebar } from "../../components/Sidebar/SettingsSidebar";
import { UserProvider } from "../../components/User/UserContext";


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("perfil");

  return (
    <UserProvider>
    <div className="min-h-screen px-25">
      {/* Header global */}
        <Header />

      {/* Contenedor principal */}
      <div className="flex ml-50 px-10 bg-gray-50 py-6 rounded-lg">
        {/* Sidebar */}
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Área de contenido dinámico */}
        <div className="flex-1 pl-10 min-h-[500px] min-w-[500px]">
          {activeTab === "perfil" && <Profile />}
          {activeTab === "contenido" && <Content />}
          {activeTab === "seguridad" && <Security />}
        </div>
      </div>
    </div>
    </UserProvider>
  );
}

