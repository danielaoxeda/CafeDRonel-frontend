import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { Link } from 'react-router'

export default function CartIcon() {
    const items = useCartStore((s) => s.items)
    const total = items.reduce((sum, i) => sum + i.quantity, 0)

    return (
        <Link to="/carrito" className="relative">
            <ShoppingCart className="text-[#F5EBDD] w-6 h-6" />
            {total > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {total}
                </span>
            )}
        </Link>
    )
}