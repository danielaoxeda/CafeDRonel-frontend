import { useState } from 'react'
import { useAuthStore } from '../../store/authStore.ts'
import { LogOutIcon, Menu, X } from 'lucide-react'
import CartIcon from './CartIcon'

export default function Navbar() {
    const { user, logout } = useAuthStore()
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#3B1F0B]/30 backdrop-blur-sm text-[#F5EBDD]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo a la izquierda */}
                    <a href="#">
                        <img
                            src="/img/Catalogo/NavBar_Logo_Empresa.png"
                            alt="Café D'Ronel"
                            className="h-10 w-auto"
                        />
                    </a>

                    {/* Enlaces + perfil a la derecha */}
                    <div className="flex items-center gap-4">
                        {/* Desktop nav */}
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm font-semibold drop-shadow-lg">
                                <li>
                                    <a href="/" className="hover:text-[#E8C28C] transition">
                                        INICIO
                                    </a>
                                </li>
                                <li>
                                    <a href="/catalogo" className="hover:text-[#E8C28C] transition">
                                        PRODUCTOS
                                    </a>
                                </li>
                                <li>
                                    <a href="/nosotros" className="hover:text-[#E8C28C] transition">
                                        NOSOTROS
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Cart: visible on all sizes (keep single instance in header) */}
                        <CartIcon />

                        {/* Profile / logout visible on all sizes */}
                        <div className="flex items-center gap-2">
                            {user.token === undefined ? (
                                <a href="/auth/login">
                                    <img
                                        src="/img/Catalogo/NavBar_perfil.png"
                                        alt="Usuario"
                                        className="rounded-full border border-[#F5EBDD] shadow-inner w-10 h-10 object-cover"
                                    />
                                </a>
                            ) : (
                                <button
                                    className="bg-red-500 p-2 rounded-lg text-white font-bold flex gap-2 cursor-pointer"
                                    onClick={logout}
                                >
                                    <LogOutIcon />
                                    Cerrar sesión
                                </button>
                            )}

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden p-2 rounded-md hover:bg-white/10"
                                aria-controls="mobile-menu"
                                aria-expanded={open}
                            >
                                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                className={`${open ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-[#3B1F0B]/95 backdrop-blur-sm text-[#F5EBDD]`}
            >
                <div className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-base font-semibold pt-4">
                        <li>
                            <a href="/" className="block hover:text-[#E8C28C] transition" onClick={() => setOpen(false)}>
                                INICIO
                            </a>
                        </li>
                        <li>
                            <a href="/catalogo" className="block hover:text-[#E8C28C] transition" onClick={() => setOpen(false)}>
                                PRODUCTOS
                            </a>
                        </li>
                        <li>
                            <a href="/nosotros" className="block hover:text-[#E8C28C] transition" onClick={() => setOpen(false)}>
                                NOSOTROS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}