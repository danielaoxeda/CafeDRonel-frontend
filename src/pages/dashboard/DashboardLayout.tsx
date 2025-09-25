import {Outlet} from "react-router";
import Sidebar from "../../components/sidebar/GeneralSidebar.tsx";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    );

}