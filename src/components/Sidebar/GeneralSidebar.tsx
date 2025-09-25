import {
    ClipboardIcon,
    HomeIcon,
    LogOutIcon,
    MenuIcon,
    SettingsIcon,
    ShoppingBasketIcon,
    UserRoundIcon
} from "lucide-react";
import {Link} from "react-router";
import {type JSX, useState} from "react";

interface NavItem {
    path: string;
    label: string;
    icon: JSX.Element;
}

const navItems: NavItem[] = [
    {
        path: "/dashboard/home",
        label: "Inicio",
        icon: <HomeIcon/>
    },
    {
        path: "/dashboard/products",
        label: "Productos",
        icon: <ShoppingBasketIcon/>
    },
    {
        path: "/dashboard/clients",
        label: "Clientes",
        icon: <UserRoundIcon/>
    },
    {
        path: "/dashboard/reports",
        label: "Reportes",
        icon: <ClipboardIcon/>
    },
    {
        path: "/dashboard/settings",
        label: "Ajustes",
        icon: <SettingsIcon/>
    }
]

export default function Sidebar() {
    const [active, setActive] = useState<boolean>(true);

    return (
        <nav
             className={`${active ? "w-56" : "w-20"} h-screen flex flex-col justify-between bg-primary p-4 transition-all sticky top-0 left-0`}>

            <div className="pb-10 flex items-center justify-between w-full pt-6 ">
                {/*Todo: Aquí falta el logo no lo tengo xd*/}
                {/*Todo: No me gusta como queda cambiar en un futuro o no*/}
                <Link to="/dashboard/home" className={`${active ? "block" : "hidden"} text-white text-xl font-bold`}>Coffee
                    D'Ronel</Link>
                <button
                    className={`text-white h-full p-2 rounded-lg cursor-pointer outline-0 hover:bg-accent transition-all ${!active && "w-full flex items-center justify-center"}`}
                    onClick={() => setActive(!active)}>
                    <MenuIcon/>
                </button>
            </div>

            <div className="space-y-2 h-fit">
                {navItems.map((item) => (
                    <Link to={item.path}
                          className="text-white w-full flex justify-center items-center hover:bg-accent p-4 rounded-lg transition-all cursor-pointer"
                          title={item.label}>
                        <span className="w-13">{item.icon}</span>
                        {active && <span
                            className="text-lg font-bold w-full text-ellipsis overflow-hidden">{item.label}</span>}
                    </Link>
                ))}
            </div>

            <div className="w-full h-10 flex justify-between items-center text-white">
                {active && <span className="text-sm font-bold">Usuario admin</span>}
                <button
                    className={`w-10 hover:bg-red-500 p-2 rounded-lg cursor-pointer transition-all ${!active && "w-full flex items-center justify-center"}`}>
                    <LogOutIcon/>
                </button>
            </div>
        </nav>
    );
}