import { useCartStore, mapCartToDetalles } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { enviarPedido } from '../../services/pedidoService'
import { Link } from 'react-router'

export default function CartPage() {
    const { items, increment, decrement, removeFromCart, clearCart } = useCartStore()
    const { user } = useAuthStore()
    const navigate = useNavigate()

    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')

    const total = items.reduce((sum, item) => sum + (item.precio ?? 0) * item.quantity, 0)

    const handleCheckout = async () => {
        if (!user.token) {
            toast.warning('Debes iniciar sesión para comprar')
            navigate('/auth/login')
            return
        }

        if (!user.id) {
            toast.error('Error: no se pudo identificar al usuario')
            return
        }

        const telefonoValido = /^\d{9}$/.test(telefono.trim())
        const direccionValida = direccion.trim().length >= 10

        if (!telefonoValido) {
            toast.error('Ingresa un número de teléfono válido de 9 dígitos')
            return
        }

        if (!direccionValida) {
            toast.error('Ingresa una dirección válida (mínimo 10 caracteres)')
            return
        }

        try {
            const pedido = {
                idPedido: 0,
                idUsuario: user.id!,
                fecha: new Date().toISOString(),
                estado: 'PENDIENTE',
                telefono,
                direccion,
                detalles: mapCartToDetalles(items)
            }

            await enviarPedido(pedido, user.token)
            toast.success('Pedido enviado correctamente')
            clearCart()
            navigate('/catalogo')
        } catch (error) {
            console.error(error)
            toast.error('Error al enviar el pedido')
        }
    }

    return (
        <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#5C3A21]">Tu carrito</h1>
                <Link
                    to="/catalogo"
                    className="text-sm text-[#A25E2A] underline hover:text-[#5C3A21] transition"
                >
                    ← Volver al catálogo
                </Link>
            </div>

            {items.length === 0 ? (
                <p className="text-[#7A4B2A]">No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li key={item.idProducto} className="bg-[#F5EBDD] rounded-lg shadow-md p-4 border border-[#A25E2A]">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                    <div className="space-y-1">
                                        <h2 className="text-lg font-semibold text-[#5C3A21]">{item.nombre}</h2>
                                        <div className="flex flex-wrap gap-x-4 text-sm text-[#7A4B2A]">
                                            <p>Precio: S/. {(item.precio ?? 0).toFixed(2)}</p>
                                            <p className="text-[#5C3A21] font-medium">
                                                Subtotal: S/. {((item.precio ?? 0) * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => decrement(item.idProducto)}
                                                    className="px-2 py-1 bg-[#A25E2A] text-white rounded hover:bg-[#8C4B1F] disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    –
                                                </button>
                                                <span className="text-sm text-[#5C3A21] font-medium min-w-[24px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => {
                                                        if (item.quantity >= item.stock) {
                                                            toast.warning(`No hay más unidades disponibles de ${item.nombre}`)
                                                            return
                                                        }
                                                        increment(item.idProducto)
                                                    }}
                                                    className="px-2 py-1 bg-[#A25E2A] text-white rounded hover:bg-[#8C4B1F] disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={item.quantity >= item.stock}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.idProducto)}
                                                className="text-red-600 text-sm hover:underline"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-[#7A4B2A] mt-2">
                                    Stock disponible: {item.stock} unidades
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 space-y-4">
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div className="flex flex-col sm:flex-row gap-2 text-left flex-1 max-w-md">
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className="border border-[#A25E2A] rounded px-3 py-2 flex-1"
                                />
                                <input
                                    type="text"
                                    placeholder="Dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className="border border-[#A25E2A] rounded px-3 py-2 flex-1"
                                />
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                                <p className="text-xl font-bold text-[#5C3A21] mb-2">Total: S/. {total.toFixed(2)}</p>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full sm:w-auto bg-[#A25E2A] text-[#F5EBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#8C4B1F] transition hover:scale-105"
                                >
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}