import AddToCartControls from './AddToCartControls'
import type { Product } from '../../store/cartStore'

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-row bg-[#E8C28C] rounded-xl shadow-md overflow-hidden border border-[#A25E2A] min-h-[180px] hover:shadow-lg transition">
            {/* Imagen a la izquierda */}
            <div className="w-[149px] h-[281px] flex-shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Texto a la derecha */}
            <div className="flex-1 p-4 flex flex-col justify-center">
                <h2 className="text-lg font-bold text-[#5C3A21]">{product.name}</h2>
                <p className="text-sm text-[#7A4B2A] mt-1">{product.subtitle}</p>
                <p className="text-[#5C3A21] mt-2">{product.description}</p>
                <p className="text-[#5C3A21] font-semibold mt-2">S/. {product.price.toFixed(2)}</p>
                <AddToCartControls product={product} />
            </div>
        </div>
    )
}