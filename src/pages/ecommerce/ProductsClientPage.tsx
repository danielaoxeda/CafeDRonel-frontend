import { useEffect, useState } from 'react'
import HeroSection from "../../components/catalogo/HeroSection"
import ProductList from "../../components/catalogo/ProductList"
import SectionDivider from "../../components/catalogo/SectionDivider"
import Footer from "../../components/catalogo/Footer"
import Navbar from "../../components/catalogo/NavBar"
import { getProductos } from '../../services/productService'
import type { Product } from '../../store/cartStore'
import { toast } from 'sonner'

export default function ProductsClientPage() {
    const [empaques, setEmpaques] = useState<Product[]>([])
    const [cafeteras, setCafeteras] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductos()
                const activos = data.filter(p => p.activo)

                setEmpaques(activos.filter(p => p.categoria.toLowerCase() === 'empaque'))
                setCafeteras(activos.filter(p => p.categoria.toLowerCase() === 'cafetera'))
            } catch (error) {
                console.error(error)
                toast.error('Error al cargar productos')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="bg-[#F5EBDD]">
            <Navbar />
            <HeroSection
                image="/img/Catalogo/HeroSection_fondo.png"
                title="PRODUCTOS"
            />
            <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                {/* Sección Empaques */}
                <SectionDivider imageSrc="/img/Catalogo/separador_cafe.svg" />
                <section>
                    <h2 className="text-2xl font-semibold text-[#A25E2A] text-center mb-2">EL CAFÉ QUE OFRECEMOS</h2>
                    <h3 className="text-xl font-bold text-[#5C3A21] text-center mb-6">EMPAQUES</h3>
                    {loading ? (
                        <p className="text-center text-[#7A4B2A]">Cargando productos...</p>
                    ) : (
                        <ProductList products={empaques} />
                    )}
                </section>

                {/* Sección Cafeteras */}
                <SectionDivider imageSrc="/img/Catalogo/separador_cafeteras.svg" />
                <section>
                    <h2 className="text-2xl font-semibold text-[#A25E2A] text-center mb-2">EL ARTE DE ELABORAR CAFÉ</h2>
                    <h3 className="text-xl font-bold text-[#5C3A21] text-center mb-4">CAFETERAS</h3>
                    {loading ? (
                        <p className="text-center text-[#7A4B2A]">Cargando productos...</p>
                    ) : (
                        <ProductList products={cafeteras} />
                    )}
                </section>
            </main>
            <Footer />
        </div>
    )
}