import { CoinsIcon } from "lucide-react";
import LineChartView from "../../charts/LineChartView";
import BarChartView from "../../charts/BarChartView";
import StatCard from "../../card/StateCards";
{/*Datos para line y bar chart */}
const dailyLineData = [
  { name: "Lunes", mokaCafetera: 120, electricaCafetera: 100, prensaCafetera: 80, grano: 150, moka: 90, electrica: 70, prensa: 50 },
  { name: "Martes", mokaCafetera: 110, electricaCafetera: 95, prensaCafetera: 85, grano: 130, moka: 85, electrica: 75, prensa: 55 },
  { name: "Miércoles", mokaCafetera: 140, electricaCafetera: 120, prensaCafetera: 100, grano: 160, moka: 100, electrica: 80, prensa: 60 },
  { name: "Jueves", mokaCafetera: 115, electricaCafetera: 105, prensaCafetera: 95, grano: 140, moka: 95, electrica: 78, prensa: 65 },
  { name: "Viernes", mokaCafetera: 160, electricaCafetera: 140, prensaCafetera: 120, grano: 180, moka: 120, electrica: 90, prensa: 75 },
  { name: "Sábado", mokaCafetera: 180, electricaCafetera: 160, prensaCafetera: 140, grano: 190, moka: 130, electrica: 95, prensa: 80 },
  { name: "Domingo", mokaCafetera: 150, electricaCafetera: 130, prensaCafetera: 110, grano: 170, moka: 110, electrica: 85, prensa: 70 },
];

const dailyBarData = [
  { name: "Cafetera Moka", ventas: 120 },
  { name: "Cafetera Eléctrica", ventas: 100 },
  { name: "Prensa Francesa", ventas: 80 },
  { name: "Café en grano 1/4 kg", ventas: 150 },
  { name: "Molido moka 1/4 kg", ventas: 90 },
  { name: "Molido eléctrica 1/4 kg", ventas: 70 },
  { name: "Molido prensa 1/4 kg", ventas: 50 },
];      

export default function DailyView() {
  return (
    <>
      {/* Tarjeta de hoy */}
      <div className="flex gap-4">
        <StatCard
          title="Ventas Hoy"
          icon={<CoinsIcon size={40} />}
          value="S/. 500"
          className="bg-amber-400!"
          showDate
        />
      </div>


      {/* Gráficos */}
       <div className="mt-6 flex flex-col gap-28 px-10 bg-gray-50 py-6 rounded-lg">
        <LineChartView  title="Ventas diarias" data={dailyLineData} />
        <BarChartView title="Ventas por categoría (diario)" data={dailyBarData}/>
      </div>
    </>
  );
}
