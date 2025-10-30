import { Package, CheckCircle, XCircle, Clock, Bike, NotebookPen, Check } from "lucide-react";
import type OrdersResponse from "../../../interface/OrdersResponse";
import StatCard from "../../card/StateCards";

interface OrdersStatsProps {
    orders: OrdersResponse[];
}

export default function OrdersStats({ orders }: OrdersStatsProps) {
    // Contar pedidos por estado
    const countByStatus = (status: string) =>
        orders.filter((order) => order.estado === status).length;

    const stats = [
        { title: "Pendientes", value: countByStatus("PENDIENTE"), color: "bg-yellow-300", icon: <Clock size={50} /> },
        { title: "Confirmados", value: countByStatus("CONFIRMADO"), color: "bg-blue-300", icon: <Package size={50} /> },
        { title: "En Preparación", value: countByStatus("EN_PREPARACION"), color: "bg-orange-300", icon: <NotebookPen size={50} /> },
        { title: "Listos", value: countByStatus("LISTO"), color: "bg-cyan-300", icon: <Check size={50} /> },
        { title: "En Camino", value: countByStatus("EN_CAMINO"), color: "bg-indigo-300", icon: <Bike size={50} /> },
        { title: "Entregados", value: countByStatus("ENTREGADO"), color: "bg-green-400", icon: <CheckCircle size={50} /> },
        { title: "Cancelados", value: countByStatus("CANCELADO"), color: "bg-red-400", icon: <XCircle size={50} /> },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-6 justify-items-center">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    value={String(stat.value)}
                    icon={stat.icon}
                    className={`${stat.color} text-gray-800`}
                />
            ))}
        </div>
    );
}
