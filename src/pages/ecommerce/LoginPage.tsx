import {MapPinIcon} from "lucide-react";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-orange-200 flex justify-center items-center py-20 relative overflow-hidden">
            <img src="/img/login-bg.png" className="absolute -bottom-60 -z-10 w-screen" alt=""/>
            <div className="w-2/3 flex rounded-xl h-full bg-orange-200">
                <div className="w-1/3 h-full p-6">
                    <div className="h-full bg-gradient-to-b from-white to-orange-900 rounded-lg">
                        <img src="/img/img-login.png" alt="" className="h-full w-full object-contain"/>
                    </div>
                </div>
                <div className="w-2/3 bg-orange-300 h-full rounded-xl flex flex-col justify-center items-center gap-4 px-30 py-10">
                    <div className="bg-orange-200 p-4 w-full rounded-lg flex flex-col justify-center items-center gap-4">
                        <div className="text-center">
                            <h4 className="text-xl font-bold">¡Bienvenido de vuelta!</h4>
                            <p>Ingresa tus credenciales para continuar</p>
                        </div>

                        <div className="w-full">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="bg-orange-200 p-4 w-full rounded-lg flex flex-col justify-center items-center gap-2">
                        <h3 className="text-primary font-bold">Horario de atención</h3>

                        <div className="flex flex-col justify-center items-center text-primary">
                            <p>Lunes - Viernes</p>
                            <p className="flex gap-2">6:00 AM - 9:00 PM</p>
                        </div>

                        <h3 className="flex items-center text-primary font-bold">
                            <MapPinIcon />
                            <span className="ml-2">San Martin de Porres, Lima</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}