import { Coffee } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover"
             style={{
                 backgroundImage: `url("src/img/404-background.jpg")`,
             }}>

            {/* Bloque central */}
            <div className="flex items-center justify-center space-x-12">

                <img
                    src="src/img/404.png"
                    alt="404 café"
                    className="w-200 mb-6"
                />
            </div>

            <p className="mt-4 text-4xl text-white font-medium">
                ¡Ups! Parece que esta página se fue a tomar un café.
            </p>

            {/* Botón de regreso */}
            <a
                href="/"
                className="mt-10 px-8 py-4 bg-amber-800 text-2xl text-white rounded-2xl shadow-lg hover:bg-amber-900 transition-colors"
            >
                Volver al inicio
            </a>

            {/* Frase decorativa */}
                <p className="mt-8 text-2xl italic text-white flex items-center gap-2">
                    Coffee D' Ronel – siempre hay un café esperándote
                    <Coffee className="w-6 h-6 text-white animate-bounce" />
                </p>
        </div>
    );
}
