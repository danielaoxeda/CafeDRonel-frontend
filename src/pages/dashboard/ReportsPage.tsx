import { useState, useRef, useEffect } from "react";
import { Header } from "../../components/dashboard/header/Header";
import Tabs from "../../components/dashboard/salesReports/Tabs";
import DailyView from "../../components/dashboard/salesReports/DailyView";
import WeeklyView from "../../components/dashboard/salesReports/WeeklyView";
import MonthlyView from "../../components/dashboard/salesReports/MonthlyView";
import { useAuthStore } from "../../store/authStore";
import { generateReport } from "../../services/reportServices";
import type { ReportType } from "../../services/reportServices";

export default function ReportsPage() {
  type ViewType = "diario" | "semanal" | "mensual";
  const [activeView, setActiveView] = useState<ViewType>("diario");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleExport = async (type: ReportType) => {
    try {
      setIsLoading(true);
      setIsMenuOpen(false);

      await generateReport(type, activeView);
      alert('Reporte descargado correctamente');
    } catch (error) {
      console.error('Error al exportar:', error);
      alert(error instanceof Error ? error.message : 'Error al generar el reporte. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 p-10">
      <div className="flex justify-between items-center h-10">
        <h2 className="text-3xl font-bold">Reportes</h2>
        <div className="flex items-center gap-4">
          {user.rol === "ADMINISTRADOR" && (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.859 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99zM17 3v18M5 8h6m-6 3h6m-6 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {isLoading ? 'Generando...' : 'Exportar a Excel'}
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    <button
                      onClick={() => handleExport('clientes')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Reporte de Clientes
                    </button>
                    <button
                      onClick={() => handleExport('productos')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Reporte de Productos
                    </button>
                    <button
                      onClick={() => handleExport('pedidos')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Reporte de Pedidos
                    </button>
                    <button
                      onClick={() => handleExport('ventas')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Reporte de Ventas
                    </button>
                    <button
                      onClick={() => handleExport('completo')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Reporte Completo
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          <Header />
        </div>
      </div>

      {/* Tabs */}
      <Tabs activeView={activeView} setActiveView={setActiveView} />

      {/* Vistas dinámicas */}
      {activeView === "diario" && <DailyView />}
      {activeView === "semanal" && <WeeklyView />}
      {activeView === "mensual" && <MonthlyView />}
    </div>
  );
}
