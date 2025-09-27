export default function Footer() {
    return (
        <footer className="bg-[#3B1F0B] text-[#F5EBDD] py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Lado izquierdo: copyright */}
                <div className="text-sm text-center md:text-left">
                    <p>© 2025 Café D’Ronel. Todos los derechos reservados.</p>
                </div>

                {/* Lado derecho: redes sociales */}
                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">Síguenos:</span>

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
            </div>
        </footer>
    )
}