import ProductCard from 'molecules/ProductCard'

export default function ProductsFeed({products}) {
    return (
        <section>
            <div className="grid grid-cols-3 gap-x-2 gap-y-10">
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={`product-card-${product.handle}`} {...product} />
                        )
                    })
                }
            </div>
        </section>
    )
}