import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'

export type Product = {
    id: string
    name: string
    subtitle: string
    description: string
    image: string
    price: number
}

export type CartItem = Product & { quantity: number }

interface CartState {
    items: CartItem[]
    addToCart: (product: Product, qty: number) => void
    increment: (id: string) => void
    decrement: (id: string) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addToCart: (product, qty) =>
                set((state) => {
                    const existing = state.items.find((item) => item.id === product.id)
                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + qty }
                                    : item
                            ),
                        }
                    }
                    return { items: [...state.items, { ...product, quantity: qty }] }
                }),
            increment: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                })),
            decrement: (id) =>
                set((state) => ({
                    items: state.items
                        .map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                })),
            removeFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            clearCart: () => set({ items: [] }),
        }),
        { name: 'cart-storage' }
    )
)