import { Outlet } from 'react-router'
import Sidebar from '../../components/dashboard/sidebar/GeneralSidebar'
import PrivateDashboard from './PrivateDashboard.tsx'

export default function DashboardLayout() {
    return (
        <PrivateDashboard>
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        </PrivateDashboard>
    )
}
