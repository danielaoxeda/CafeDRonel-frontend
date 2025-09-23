import { CoinsIcon } from "lucide-react";
import StatCard from "../Cards/StateCards";
import LineChartView from "../Charts/LineChartView";
import BarChartView from "../Charts/BarChartView";

// Datos mensuales
const monthlyLineData = [
  { name: "Enero", empaque: 3500, grano: 4000, moka: 2500, electrica: 2000, prensa: 1500 },
  { name: "Febrero", empaque: 3700, grano: 4200, moka: 2600, electrica: 2100, prensa: 1600 },
  { name: "Marzo", empaque: 3900, grano: 4400, moka: 2700, electrica: 2200, prensa: 1700 },
];

const monthlyBarData = [
  { name: "Empaque 1/4 kg", ventas: 11100 },
  { name: "Café en grano", ventas: 12600 },
  { name: "Molido moka", ventas: 7800 },
  { name: "Molido eléctrica", ventas: 6300 },
  { name: "Molido prensa", ventas: 5100 },
];

export default function MonthlyView() {
  return (
    <>
      <div className="flex gap-4">
        <StatCard
          title="Ventas Mensual"
          icon={<CoinsIcon size={40} />}
          value="S/. 9,839"
          className="bg-amber-400!"
        />
      </div>

        {/* Gráficos */}
            <div className="mt-6 flex flex-col gap-28 px-10 bg-gray-50 py-6 rounded-lg">
              <LineChartView  title="Ventas semanales" data={monthlyLineData} />
              <BarChartView title="Ventas por categoría (semanal)" data={monthlyBarData}/>
          </div>
    </>
  );
}
