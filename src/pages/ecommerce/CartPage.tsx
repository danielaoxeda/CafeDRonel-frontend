import { useCartStore } from '../../store/cartStore'
import { toast } from 'sonner'
import { Link } from 'react-router'

export default function CartPage() {
    const { items, increment, decrement, removeFromCart, clearCart } = useCartStore()
    const total = items.reduce((sum, item) => sum + (item.price ?? 0) * item.quantity, 0)

    const handleCheckout = () => {
        toast.success('Tu orden ha sido registrada localmente')
        clearCart()
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-[#5C3A21] mb-4">Tu carrito</h1>

            {/* Botón siempre visible */}
            <Link
                to="/catalogo"
                className="inline-block mb-6 text-sm text-[#A25E2A] underline hover:text-[#5C3A21] transition"
            >
                ← Volver al catálogo
            </Link>

            {items.length === 0 ? (
                <p className="text-[#7A4B2A]">No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li key={item.id} className="bg-[#F5EBDD] rounded-lg shadow-md p-4 border border-[#A25E2A]">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg font-semibold text-[#5C3A21]">{item.name}</h2>
                                        <p className="text-sm text-[#7A4B2A]">Cantidad: {item.quantity}</p>
                                        <p className="text-sm text-[#7A4B2A]">Precio: S/. {(item.price ?? 0).toFixed(2)}</p>
                                        <p className="text-sm text-[#5C3A21]">Subtotal: S/. {((item.price ?? 0) * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => decrement(item.id)} className="px-2 py-1 bg-[#A25E2A] text-white rounded">–</button>
                                        <button onClick={() => increment(item.id)} className="px-2 py-1 bg-[#A25E2A] text-white rounded">+</button>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-sm hover:underline">Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 text-right">
                        <p className="text-xl font-bold text-[#5C3A21]">Total: S/. {total.toFixed(2)}</p>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 bg-[#A25E2A] text-[#F5EBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#8C4B1F] transition hover:scale-105"
                        >
                            Finalizar compra
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}