import { useNavigate } from "react-router";
import HeroSection from "../../components/catalogo/HeroSection.tsx";
import SectionDivider from "../../components/catalogo/SectionDivider.tsx";
import Products from "../../components/inicio/Products.tsx";
import Promotions from "../../components/inicio/Promocion.tsx";
import Footer from "../../components/catalogo/Footer.tsx";
import Navbar from "../../components/catalogo/NavBar.tsx";

export default function HomePage() {
    const navigate = useNavigate();

    const handleCompraClick = () => {
        navigate("/catalogo"); // Redirige a la página de catálogo
    };

    return (
        <div className="bg-[#F5EBDD]">
            <Navbar />
            <div className="relative">
                <HeroSection
                    video="/img/Inicio/fondito.mp4"
                    title="EMPIEZA TU DÍA CON UN BUEN CAFÉ"
                />

                {/* Botón centrado debajo del título */}
                <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-20">
                    <button
                        onClick={handleCompraClick}
                        className="bg-[#D4A017] text-[#3B1F0B] font-semibold px-8 py-3 rounded-full shadow-md 
                        transition-transform duration-300 ease-in-out 
                        hover:scale-110 hover:shadow-xl 
                        active:scale-95 
                        animate-bounce hover:animate-none"
                    >
                        Compra ahora
                    </button>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                <SectionDivider imageSrc="/img/Catalogo/separador_cafe.svg" />
                <Products />
                <SectionDivider imageSrc="/img/Catalogo/separador_cafeteras.svg" />
                <Promotions />
            </main>

            <Footer />
        </div>
    );
}
