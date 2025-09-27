import { CoinsIcon } from "lucide-react";

import LineChartView from "../../charts/LineChartView";
import BarChartView from "../../charts/BarChartView";
import StatCard from "../../card/StateCards";

// Datos mensuales
const monthlyLineData = [
  { name: "Junio", mokaCafetera: 1200, electricaCafetera: 1150, prensaCafetera: 1150, grano: 4000, moka: 2500, electrica: 2000, prensa: 1500 },
  { name: "Julio", mokaCafetera: 1300, electricaCafetera: 1200, prensaCafetera: 1200, grano: 4200, moka: 2600, electrica: 2100, prensa: 1600 },
  { name: "Agosto", mokaCafetera: 1400, electricaCafetera: 1250, prensaCafetera: 1250, grano: 4400, moka: 2700, electrica: 2200, prensa: 1700 },
];

const monthlyBarData = [
  { name: "Cafetera Moka", ventas: 3900 },
  { name: "Cafetera Eléctrica", ventas: 3600 },
  { name: "Prensa Francesa", ventas: 3600 },
  { name: "Café en grano 1/4 kg", ventas: 12600 },
  { name: "Molido moka 1/4 kg", ventas: 7800 },
  { name: "Molido eléctrica 1/4 kg", ventas: 6300 },
  { name: "Molido prensa 1/4 kg", ventas: 5100 },
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
              <LineChartView  title="Ventas mensuales" data={monthlyLineData} />
              <BarChartView title="Ventas por categoría (mensual)" data={monthlyBarData}/>
          </div>
    </>
  );
}
