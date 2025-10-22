import { useAuthStore } from '../../store/authStore.ts'
import { LogOutIcon } from 'lucide-react'

export default function Navbar() {
    const { user, logout } = useAuthStore()

    return (
        <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
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
                    <div className="flex items-center gap-8">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm font-semibold text-[#F5EBDD]">
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
                                <li>
                                    <a href="#" className="hover:text-[#E8C28C] transition">
                                        CONTACTO
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Icono de perfil */}
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
                                Cerrar sesion
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
