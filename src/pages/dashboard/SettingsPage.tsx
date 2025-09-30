import { useState } from 'react'
import { Profile } from '../../components/dashboard/tabsSettings/Profile'
import { Security } from '../../components/dashboard/tabsSettings/Security'
import { Content } from '../../components/dashboard/tabsSettings/Content'
import { Header } from '../../components/dashboard/header/Header'
import SettingsSidebar from '../../components/dashboard/sidebar/SettingsSidebar'

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('perfil')

    return (
        <div className="min-h-screen px-25 flex-1">
            {/* Header global */}
            <Header />
            <div className="flex justify-center mt-10">
                {/* Contenedor principal */}
                <div className="flex px-10 bg-gray-50 py-6 rounded-lg max-w-fit">
                    {/* Sidebar */}
                    <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Área de contenido dinámico */}
                    <div className="flex-1 pl-10 min-h-[500px] min-w-[500px]">
                        {activeTab === 'perfil' && <Profile />}
                        {activeTab === 'contenido' && <Content />}
                        {activeTab === 'seguridad' && <Security />}
                    </div>
                </div>
            </div>
        </div>
    )
}
