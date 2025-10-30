import AddToCartControls from './AddToCartControls'
import type { Product } from '../../store/cartStore'

export default function ProductCard({ product }: { product: Product }) {
    const defaultImage =
        product.categoria.toLowerCase() === 'cafetera'
            ? '/img/Catalogo/ProductCard_cafetera.png'
            : '/img/Catalogo/ProductCard_cafe.png'

    return (
        <div className="flex flex-col sm:flex-row bg-[#E8C28C] rounded-xl shadow-md overflow-hidden border border-[#A25E2A] hover:shadow-lg transition">
            <div className="w-full sm:w-[149px] h-[200px] sm:h-[281px] flex-shrink-0">
                <img
                    src={product.image ?? defaultImage}
                    alt={product.nombre}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 p-4 flex flex-col">
                <h2 className="text-lg font-bold text-[#5C3A21] line-clamp-2">{product.nombre}</h2>
                <p className="text-sm text-[#7A4B2A] mt-1">{product.subtipo}</p>
                <p className="text-[#5C3A21] mt-2 line-clamp-3 flex-grow">{product.descripcion}</p>
                <div className="mt-4">
                    <p className="text-[#5C3A21] font-semibold mb-2">S/. {product.precio.toFixed(2)}</p>
                    <AddToCartControls product={product} />
                </div>
            </div>
        </div>
    )
}