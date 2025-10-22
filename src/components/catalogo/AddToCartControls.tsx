import { useState } from 'react'
import { useCartStore } from '../../store/cartStore'
import type { Product } from '../../store/cartStore'

export default function AddToCartControls({ product }: { product: Product }) {
    const [qty, setQty] = useState(1)
    const addToCart = useCartStore((s) => s.addToCart)

    return (
        <div className="mt-4 flex items-center gap-2">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2 py-1 bg-[#A25E2A] text-white rounded transition hover:scale-105">–</button>
            <span className="text-[#5C3A21] font-semibold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-2 py-1 bg-[#A25E2A] text-white rounded transition hover:scale-105">+</button>
            <button
                onClick={() => {
                    addToCart(product, qty)
                    setQty(1)
                }}
                className="ml-2 px-4 py-2 bg-[#5C3A21] text-[#F5EBDD] rounded shadow hover:bg-[#3B1F0B] transition hover:scale-105"
            >
                Agregar
            </button>
        </div>
    )
}