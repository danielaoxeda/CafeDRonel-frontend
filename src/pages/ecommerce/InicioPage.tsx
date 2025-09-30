import HeroSection from "../../components/catalogo/HeroSection"
import SectionDivider from "../../components/catalogo/SectionDivider"
import Products from "../../components/inicio/Products"
import Promotions from "../../components/inicio/Promocion"
import Footer from "../../components/catalogo/Footer"

export default function ProductsClientPage() {
    return (
        <div className="bg-[#F5EBDD]">
            <HeroSection
                image="/img/Inicio/cafes.png"
                title="INICIO"
            />
            <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                <SectionDivider imageSrc="/img/Catalogo/separador_cafe.svg" />

                {/* Aquí agregue productos */}
                <Products />

                <SectionDivider imageSrc="/img/Catalogo/separador_cafeteras.svg" />

                {/* Aquí agregue las promociones */}
                <Promotions />
            </main>
            <Footer />
        </div>
    )
}
