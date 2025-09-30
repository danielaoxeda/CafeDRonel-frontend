export default function Promotions() {
    return (
        <section className="py-4">
            <div className="max-w-6xl mx-auto px-4">
                {/* Títulos */}
                <h2 className="text-center text-3xl md:text-4xl text-[#B88A63] font-semibold tracking-wider mb-2">
                    PROMOCIONES
                </h2>
                <h3 className="text-2xl font-bold text-center text-[#4A2C2A] mb-8 mt-4">
                    OFERTAS DE TEMPORADA
                </h3>

                {/* Contenedor principal */}
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
                    {/* Imagen a la izquierda */}
                    <div className="md:w-1/2">
                        <img
                            src="/img/Inicio/image.png"
                            alt="Promoción cafetera"
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Texto a la derecha */}
                    <div className="md:w-1/2 bg-[#D9E0DA] rounded-lg p-6 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-[#4A2C2A] mb-4">
                            15% DE <span className="text-[#7A1D1D]">DESCUENTO</span>
                        </h4>
                        <p className="text-[#4A2C2A] leading-relaxed">
                            En empaques <b>Café Molido</b> y <b>Café Tostado en Grano</b> Perfecto para los amantes del café que disfrutan molerlo al instante, garantizando
                            frescura, intensidad y una experiencia auténtica en cada taza.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
