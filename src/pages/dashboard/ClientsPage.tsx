import { ChartCandlestickIcon, UserIcon, UserPlusIcon } from "lucide-react";
import StatCard from "../../components/card/StateCards";
import ClientsTable from "../../components/tables/products/ClientsTable";
import { Header } from "../../components/dashboard/header/Header";

export default function ClientsPage() {
  return (
    <div className="flex flex-col flex-1 p-10">
            <div className="flex justify-between items-center h-10">
                    <h2 className="text-3xl font-bold">Clientes</h2>
                    <Header />
            </div>

      {/* Tarjetas de estadísticas */}
      <div className="flex gap-6 mt-10">
        <StatCard
          title="Total Clientes"
          icon={<UserIcon size={50} />}
          value="5"
          className="bg-amber-400!"
        />
        <StatCard
          title="Registros Hoy"
          icon={<UserPlusIcon size={50} />}
          value="2"
          className="bg-amber-400!"
        />
        <StatCard
          title="Crecimiento"
          icon={<ChartCandlestickIcon size={50} />}
          value="22%"
          className="bg-amber-400!"
        />
      </div>

      {/* Tabla de clientes */}
      <div className="mt-6 bg-white p-4">
        <ClientsTable />
      </div>
    </div>
  );
}
