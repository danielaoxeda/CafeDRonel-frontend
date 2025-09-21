import {Outlet} from "react-router";
import Sidebar from "../../components/Sidebar/GeneralSidebar.tsx";

export default function Layout() {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    );
}