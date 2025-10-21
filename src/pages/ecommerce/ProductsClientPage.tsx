import HeroSection from "../../components/catalogo/HeroSection"
import ProductList from "../../components/catalogo/ProductList"
import SectionDivider from "../../components/catalogo/SectionDivider"
import Footer from "../../components/catalogo/Footer"



const semillasOrganicas = [
    {
        id: "1",
        name: "Café molido grueso",
        subtitle: "250 g – Ideal para prensa francesa",
        description: "Molienda gruesa que conserva los aceites naturales del café.",
        image: "/img/Catalogo/ProductCard_cafe.png",
        price: 19.50
    },
    {
        id: "2",
        name: "Café molido fino",
        subtitle: "250 g – Ideal para cafetera Moka",
        description: "Molienda fina para extracción intensa y aromática.",
        image: "/img/Catalogo/ProductCard_cafe.png",
        price: 25.50
    },
    {
        id: "3",
        name: "Café molido medio",
        subtitle: "250 g – Ideal para Moka Italiana",
        description: "Molienda media para extracción equilibrada y cuerpo suave.",
        image: "/img/Catalogo/ProductCard_cafe.png",
        price: 20.50
    },
    {
        id: "4",
        name: "Café grano tostado",
        subtitle: "250 g – Para moler en casa",
        description: "Granos enteros para disfrutar de la frescura y aroma al instante.",
        image: "/img/Catalogo/ProductCard_cafe.png",
        price: 22.50
    }
]

const cafeteras = [
    {
        id: "5",
        name: "Prensa Francesa",
        subtitle: "Método europeo – Extracción intensa",
        description: "Ideal para café molido grueso. Conserva aceites naturales y sabores profundos.",
        image: "/img/Catalogo/ProductCard_cafetera.png",
        price: 68.50
    },
    {
        id: "6",
        name: "Moka Italiana",
        subtitle: "Método tradicional – Café concentrado",
        description: "Ideal para molienda media o fina. Produce café estilo espresso con cuerpo intenso.",
        image: "/img/Catalogo/ProductCard_cafetera.png",
        price: 70.50
    }
]

export default function ProductsClientPage() {
    return (
        <div className="bg-[#F5EBDD]">
            <HeroSection
                image="/img/Catalogo/HeroSection_fondo.png"
                title="PRODUCTOS"
            />
            <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                <SectionDivider imageSrc="/img/Catalogo/separador_cafe.svg" />
                <section>
                    <h2 className="text-2xl font-semibold text-[#A25E2A] text-center mb-2">EL CAFÉ QUE OFRECEMOS</h2>
                    <h3 className="text-xl font-bold text-[#5C3A21] text-center mb-6">SEMILLAS ORGÁNICAS</h3>
                    <ProductList products={semillasOrganicas} />
                </section>

                <SectionDivider imageSrc="/img/Catalogo/separador_cafeteras.svg" />

                <section>
                    <h2 className="text-2xl font-semibold text-[#A25E2A] text-center mb-2">EL ARTE DE ELABORAR CAFÉ</h2>
                    <h3 className="text-xl font-bold text-[#5C3A21] text-center mb-4">CAFETERAS</h3>
                    <ProductList products={cafeteras} />
                </section>
            </main>
            <Footer />

        </div>
    )
}