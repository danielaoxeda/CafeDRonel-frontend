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
    <div className="min-h-screen px-25 flex-1 pl-72">
      <Header />

      {/* Tabs */}
      <Tabs activeView={activeView} setActiveView={setActiveView} />

      {/* Vistas dinámicas */}
      {activeView === "diario" && <DailyView />}
      {activeView === "semanal" && <WeeklyView />}
      {activeView === "mensual" && <MonthlyView />}
    </div>
  );
}
