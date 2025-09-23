import {Outlet} from "react-router";
import Sidebar from "../../components/dashboard/nav/Sidebar.tsx";

export default function Layout() {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    );

}