import Button from "../../components/button/Button.tsx";
import StatCard from "../../components/card/StateCards.tsx";
import { Header } from "../../components/dashboard/header/Header.tsx";
import ProductsTable from "../../components/tables/products/ProductsTable.tsx";

import {ChartCandlestickIcon, CoinsIcon, PackageIcon, PlusIcon, TriangleAlertIcon} from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="flex flex-col flex-1 p-10">
            <div className="flex justify-between items-center h-10">
                    <h2 className="text-3xl font-bold">Productos</h2>
                    <Header />
                  </div>
            <div className="h-20 flex justify-between items-center ml-260">
                    <Button>
                    <PlusIcon/> Agregar Producto
                    </Button>
                
            </div>
            

            <div className="flex gap-4 mt-6">
                <StatCard title="Total Productos" icon={<PackageIcon size={40}/>} value="5" className="bg-amber-400!"/>
                <StatCard title="Ventas Hoy" icon={<CoinsIcon size={40}/>} value="S/. 1,234" className="bg-amber-400!"/>
                <StatCard title="Stock Bajo" icon={<TriangleAlertIcon size={40}/>} value="3" className="bg-amber-400!"/>
                <StatCard title="Crecimiento" icon={<ChartCandlestickIcon size={40}/>} value="13%" className="bg-amber-400!"/>
            </div>

            <div className="flex-1 mt-8">
                <ProductsTable/>
            </div>

        </div>
    );
}