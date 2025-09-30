import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import EcommerceHomePage from './pages/ecommerce/HomePage.tsx'
import DashboardHomePage from './pages/dashboard/HomePage.tsx'
import ProductsPage from './pages/dashboard/ProductsPage.tsx'
import ClientsPage from './pages/dashboard/ClientsPage.tsx'
import ReportsPage from './pages/dashboard/ReportsPage.tsx'
import SettingsPage from './pages/dashboard/SettingsPage.tsx'
import DashboardLayout from './pages/dashboard/DashboardLayout.tsx'
import { Toaster } from 'sonner'
import LoginPage from './pages/ecommerce/LoginPage.tsx'
import ProductsClientPage from './pages/ecommerce/ProductsClientPage.tsx'
import RegisterPage from './pages/ecommerce/RegisterPage.tsx'
import RecoveryPasswordPage from './pages/ecommerce/RecoveryPasswordPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '',
                Component: EcommerceHomePage
            },
            {
                path: 'catalogo',
                Component: ProductsClientPage
            }
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                Component: LoginPage
            },
            {
                path: 'register',
                Component: RegisterPage
            },
            {
                path: 'forgot-password',
                Component: RecoveryPasswordPage
            }
        ]
    },

    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            {
                path: 'home',
                Component: DashboardHomePage
            },
            {
                path: 'products',
                Component: ProductsPage
            },
            {
                path: 'clients',
                Component: ClientsPage
            },
            {
                path: 'reports',
                Component: ReportsPage
            },
            {
                path: 'settings',
                Component: SettingsPage
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster richColors position="bottom-right" />
        <RouterProvider router={router} />
    </StrictMode>
)
