import { useEffect, useState } from "react";
import type OrdersResponse from "../../interface/OrdersResponse";
import { getAllOrders } from "../../services/ordersService";
import { Header } from "../../components/dashboard/header/Header";
import OrdersTable from "../../components/tables/products/OrdersTable";
import OrdersStats from "../../components/dashboard/stats/OrderStats";

export default function OrdersPage() {
    const [orders, setOrders] = useState<OrdersResponse[]>([]);

    const fetchOrders = async () => {
        const data = await getAllOrders();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="flex flex-col flex-1 p-10">
            <div className="flex justify-between items-center h-10">
                <h2 className="text-3xl font-bold">Pedidos</h2>
                <Header />
            </div>

            {/* Tarjetas de estadísticas */}
            <div className="flex flex-col gap-6 mt-10">
                <div className="flex justify-center bg-center">
                     <OrdersStats orders={orders} />

                </div>
                <div className="mt-8 bg-white p-4 rounded-lg shadow">
                    <OrdersTable orders={orders} onRefresh={fetchOrders} />
                </div>
            </div>
        </div>
    );
}