import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePageEcommerce from "./pages/ecommerce/HomePage.tsx";
import HomePageDashboard from "./pages/dashboard/HomePage.tsx";
import ProductsPage from "./pages/dashboard/ProductsPage.tsx";
import ClientsPage from "./pages/dashboard/ClientsPage.tsx";
import ReportsPage from "./pages/dashboard/ReportsPage.tsx";
import SettingsPage from "./pages/dashboard/SettingsPage.tsx";
import LayoutDashboard from "./pages/dashboard/Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePageEcommerce
    },
    {
        path: "/dashboard",
        Component: LayoutDashboard,
        children: [
            {
                path: "home",
                Component: HomePageDashboard
            },
            {
                path: "products",
                Component: ProductsPage
            },
            {
                path: "clients",
                Component: ClientsPage
            },
            {
                path: "reports",
                Component: ReportsPage
            },
            {
                path: "settings",
                Component: SettingsPage
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
