import ProductCard from "./ProductCard"
import type { Product } from '../../store/cartStore'

interface ProductListProps {
    products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}