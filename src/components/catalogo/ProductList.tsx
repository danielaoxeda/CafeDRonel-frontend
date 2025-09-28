import ProductCard from "./ProductCard"

interface Product {
    id: string
    name: string
    subtitle: string
    description: string
    image: string
}

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