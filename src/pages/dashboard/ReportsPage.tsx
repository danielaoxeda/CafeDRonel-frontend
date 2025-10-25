import { useState } from "react";
import { Header } from "../../components/dashboard/header/Header";
import Tabs from "../../components/dashboard/salesReports/Tabs";
import DailyView from "../../components/dashboard/salesReports/DailyView";
import WeeklyView from "../../components/dashboard/salesReports/WeeklyView";
import MonthlyView from "../../components/dashboard/salesReports/MonthlyView";

export default function ReportsPage() {
  type ViewType = "diario" | "semanal" | "mensual";
  const [activeView, setActiveView] = useState<ViewType>("diario");

  return (
    <div className="flex flex-col flex-1 p-10">
            <div className="flex justify-between items-center h-10">
                    <h2 className="text-3xl font-bold">Reportes</h2>
                    <Header />
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
