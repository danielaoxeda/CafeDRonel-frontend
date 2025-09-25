import { CoinsIcon } from "lucide-react";
import StatCard from "../card/StateCards";
import LineChartView from "../../charts/LineChartView";
import BarChartView from "../../charts/BarChartView";

const dailyLineData = [
        { name: "Lunes", empaque: 120, grano: 150, moka: 90, electrica: 70, prensa: 50 },
        { name: "Martes", empaque: 100, grano: 130, moka: 85, electrica: 75, prensa: 55 },
        { name: "Miércoles", empaque: 140, grano: 160, moka: 100, electrica: 80, prensa: 60 },
        { name: "Jueves", empaque: 110, grano: 140, moka: 95, electrica: 78, prensa: 65 },
        { name: "Viernes", empaque: 160, grano: 180, moka: 120, electrica: 90, prensa: 75 },
        { name: "Sábado", empaque: 180, grano: 190, moka: 130, electrica: 95, prensa: 80 },
        { name: "Domingo", empaque: 150, grano: 170, moka: 110, electrica: 85, prensa: 70 },
        ];

        const dailyBarData = [
        { name: "Empaque 1/4 kg", ventas: 120 },
        { name: "Café en grano", ventas: 150 },
        { name: "Molido moka", ventas: 90 },
        { name: "Molido eléctrica", ventas: 70 },
        { name: "Molido prensa", ventas: 50 },
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
        <LineChartView  title="Ventas semanales" data={dailyLineData} />
        <BarChartView title="Ventas por categoría (semanal)" data={dailyBarData}/>
      </div>
    </>
  );
}
