import { CoinsIcon } from "lucide-react";
import LineChartView from "../../charts/LineChartView";
import BarChartView from "../../charts/BarChartView";
import StatCard from "../../card/StateCards";

// Datos semanales
const weeklyLineData = [
  { name: "Semana 1", mokaCafetera: 300, electricaCafetera: 280, prensaCafetera: 220, grano: 950, moka: 600, electrica: 500, prensa: 400 },
  { name: "Semana 2", mokaCafetera: 280, electricaCafetera: 250, prensaCafetera: 220, grano: 870, moka: 590, electrica: 480, prensa: 420 },
  { name: "Semana 3", mokaCafetera: 320, electricaCafetera: 280, prensaCafetera: 210, grano: 910, moka: 650, electrica: 520, prensa: 460 },
  { name: "Semana 4", mokaCafetera: 350, electricaCafetera: 300, prensaCafetera: 250, grano: 1000, moka: 700, electrica: 550, prensa: 480 },
];

const weeklyBarData = [
  { name: "Cafetera Moka", ventas: 1250 },
  { name: "Cafetera Eléctrica", ventas: 1110 },
  { name: "Prensa Francesa", ventas: 900 },
  { name: "Café en grano 1/4 kg", ventas: 3800 },
  { name: "Molido moka 1/4 kg", ventas: 2600 },
  { name: "Molido eléctrica 1/4 kg", ventas: 2100 },
  { name: "Molido prensa 1/4 kg", ventas: 1800 },
];

export default function WeeklyView() {
  return (
    <>
      <div className="flex gap-4">
        <StatCard
          title="Ventas Semanal"
          icon={<CoinsIcon size={40} />}
          value="S/. 2,300"
          className="bg-amber-400!"
        />
      </div>

        {/* Gráficos */}
      <div className="mt-6 flex flex-col gap-28 px-10 bg-gray-50 py-6 rounded-lg">
        <LineChartView  title="Ventas semanales" data={weeklyLineData} />
        <BarChartView title="Ventas por categoría (semanal)" data={weeklyBarData}/>
    </div>
    </>
  );
}
