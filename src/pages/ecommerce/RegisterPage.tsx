import { MapPinIcon } from 'lucide-react'
import RegisterForm from '../../components/forms/RegisterForm.tsx'
import { useAuthStore } from '../../store/authStore.ts'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export default function RegisterPage() {
    const { user } = useAuthStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token !== undefined) {
            navigate('/')
        }
    }, [])

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-orange-200 flex justify-center items-center py-8 md:py-12 lg:py-16 relative overflow-hidden">
            <img
                src="/img/login-bg.png"
                className="absolute -bottom-40 md:-bottom-60 -z-10 w-full pointer-events-none select-none"
                alt=""
            />
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row rounded-xl bg-orange-200 overflow-hidden mx-4">
                {/* Columna ilustración */}
                <div className="w-full md:w-2/5 lg:w-[38%] h-48 md:h-auto p-4 md:p-5 lg:p-6">
                    <div className="h-full bg-gradient-to-b from-white to-orange-900 rounded-lg">
                        <img
                            src="/img/img-login.png"
                            alt=""
                            className="h-full w-full object-contain pointer-events-none select-none"
                        />
                    </div>
                </div>

                {/* Columna formulario */}
                <div className="w-full md:w-3/5 lg:w-[62%] bg-orange-300 flex items-center justify-center">
                    <div className="w-full px-5 md:px-6 lg:px-8 py-6 md:py-8 lg:py-8 mx-auto">
                        <div className="bg-orange-200 p-4 md:p-5 lg:p-6 rounded-lg flex flex-col items-center gap-4">
                            <div className="text-center">
                                <h4 className="text-base md:text-lg lg:text-xl font-bold">
                                    ¡Bienvenido de vuelta!
                                </h4>
                                <p className="text-xs md:text-sm lg:text-base">
                                    Ingresa tus credenciales para continuar
                                </p>
                            </div>

                            <div className="w-full">
                                <RegisterForm />
                            </div>
                        </div>

                        <div className="bg-orange-200 mt-4 p-4 md:p-5 rounded-lg flex flex-col items-center gap-2">
                            <h3 className="text-primary font-bold text-sm md:text-base">
                                Horario de atención
                            </h3>

                            <div className="flex flex-col items-center text-primary text-xs md:text-sm">
                                <p>Lunes - Viernes</p>
                                <p className="flex gap-2">6:00 AM - 9:00 PM</p>
                            </div>

                            <h3 className="flex items-center text-primary font-bold text-xs md:text-sm">
                                <MapPinIcon className="h-4 w-4 md:h-5 md:w-5" />
                                <span className="ml-2">San Martin de Porres, Lima</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
