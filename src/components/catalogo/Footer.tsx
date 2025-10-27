export default function Footer() {
    return (
        <footer className="bg-[#3B1F0B] text-[#F5EBDD] py-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                {/* Columna 1: Información de contacto */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold mb-1">Contáctanos</h3>
                    <a
                        href="https://maps.app.goo.gl/MAgK9MXtrwvkXmuS6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        📍 San Martín de Porres 8, Lima 15108
                    </a>
                    <p>
                        📞 <a href="tel:+51963509165" className="hover:underline">963 509 165</a>
                    </p>
                    <p>
                        ✉️ <a href="mailto:cafedronel@gmail.com" className="hover:underline">cafedronel@gmail.com</a>
                    </p>
                </div>

                {/* Columna 2: Redes sociales */}
                <div className="flex flex-col gap-2 md:items-center">
                    <h3 className="text-base font-semibold mb-1">Síguenos</h3>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/cafederonel?igsh=MTlrcm11eno3bmg3NA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img
                                src="/img/Catalogo/Footer_instagram.png"
                                alt="Instagram"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/share/17M8vCTja7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img
                                src="/img/Catalogo/Footer_facebook.png"
                                alt="Facebook"
                                className="h-6 w-6"
                            />
                        </a>
                    </div>
                    <p className="mt-2 italic text-[#D9CBB3] text-center">Sabor que inspira, aroma que conecta.</p>
                </div>

                {/* Columna 3: Legal */}
                <div className="flex flex-col gap-2 md:items-end">
                    <h3 className="text-base font-semibold mb-1">Legal</h3>
                    <a href="/terminos" className="hover:underline">Términos y Condiciones</a>
                    <p>© 2025 Café D’Ronel</p>
                    <p className="text-[#D9CBB3]">Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}