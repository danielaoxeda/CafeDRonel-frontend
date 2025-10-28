import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'

/** Producto según el backend */
export type Product = {
    idProducto: number
    nombre: string
    categoria: string
    subtipo: string
    descripcion: string
    precio: number
    stock: number
    activo: boolean
    image?: string 
}

/** Ítem en el carrito */
export type CartItem = Product & { quantity: number }

/** POST /pedidos */
export type DetallePedido = {
    idDetalle: number
    idProducto: number
    cantidad: number
    precioUnitario: number
}

interface CartState {
    items: CartItem[]
    addToCart: (product: Product, qty: number) => void
    increment: (idProducto: number) => void
    decrement: (idProducto: number) => void
    removeFromCart: (idProducto: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addToCart: (product, qty) =>
                set((state) => {
                    const existing = state.items.find((item) => item.idProducto === product.idProducto)
                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.idProducto === product.idProducto
                                    ? { ...item, quantity: item.quantity + qty }
                                    : item
                            ),
                        }
                    }
                    return { items: [...state.items, { ...product, quantity: qty }] }
                }),
            increment: (idProducto) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.idProducto === idProducto ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                })),
            decrement: (idProducto) =>
                set((state) => ({
                    items: state.items
                        .map((item) =>
                            item.idProducto === idProducto
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                })),
            removeFromCart: (idProducto) =>
                set((state) => ({
                    items: state.items.filter((item) => item.idProducto !== idProducto),
                })),
            clearCart: () => set({ items: [] }),
        }),
        { name: 'cart-storage' }
    )
)

/** Helper para transformar el carrito en detalles de pedido */
export const mapCartToDetalles = (items: CartItem[]): DetallePedido[] => {
    return items.map((item) => ({
        idDetalle: 0,
        idProducto: item.idProducto,
        cantidad: item.quantity,
        precioUnitario: item.precio,
    }))
}