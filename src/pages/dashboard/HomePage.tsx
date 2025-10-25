import { BarChart3, ChartSpline, CoinsIcon, PackageIcon, UserIcon} from "lucide-react";
import StatCard from "../../components/card/StateCards";
import { Header } from "../../components/dashboard/header/Header";
import DotLineChartView from "../../components/dashboard/charts/DotLineChartView";
import ChardCard from "../../components/card/ChartCard";
import PieChartView from "../../components/dashboard/charts/PieChartView";

export default function HomePage() {
    return (
        <div className="flex flex-col flex-1 p-10">
                    <div className="flex justify-between items-center h-10">
                            <h2 className="text-3xl font-bold">Inicio</h2>
                            <Header />
                    </div>
            {/* Tarjetas de estadísticas */}
            <div className="flex gap-6 mt-10">
                <StatCard title="Ventas Hoy" icon={<CoinsIcon size={40}/>} value="S/. 1,234" className="bg-amber-400!"/>
                <StatCard title="Total Productos" icon={<PackageIcon size={40}/>} value="5" className="bg-amber-400!"/>
                <StatCard title="Total Clientes" icon={<UserIcon size={40} />} value="5" className="bg-amber-400!"/>
            </div>
            <div className="flex gap-6 mt-10">
                <ChardCard title="Rendimiento de Ventas" icon={<ChartSpline size={40} />} chart={<DotLineChartView />} className="bg-amber-400!"/>
                <ChardCard title="Productos Populares" icon={<BarChart3 size={40} />} chart={<PieChartView/>} className="bg-amber-400!"/>
            </div>

        </div>

        
    );
}