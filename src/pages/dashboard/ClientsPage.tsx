import { UserIcon, UserPlusIcon } from "lucide-react";
import StatCard from "../../components/card/StateCards";
import ClientsTable from "../../components/tables/products/ClientsTable";
import { Header } from "../../components/dashboard/header/Header";
import { useEffect, useState } from "react";
import type ClientsResponse from "../../interface/ClientsResponse";
import { getAllClients } from "../../services/clientsServices";

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientsResponse[]>([]);

  // --- Cargar productos desde la API ---
    const fetchClients= async () => {
      const productsData = await getAllClients();
      setClients(productsData);
    };
  
    useEffect(() => {
    fetchClients();
  }, []);

  

  return (
    <div className="flex flex-col flex-1 p-10">
      <div className="flex justify-between items-center h-10">
        <h2 className="text-3xl font-bold">Clientes</h2>
        <Header />
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="flex gap-6 mt-10">
        <StatCard title="Total Clientes" icon={<UserIcon size={50} />} value={String(clients.length)} className="bg-amber-400!" />
        <StatCard title="Registros Hoy" icon={<UserPlusIcon size={50} />} value="2" className="bg-amber-400!" />
        <div className="mt-6 bg-white p-4">
          <ClientsTable products={clients} onRefresh={fetchClients} />
        </div>
      </div>
    </div>
  );
}
