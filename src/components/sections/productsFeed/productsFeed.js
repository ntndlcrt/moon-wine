import ProductCard from 'molecules/ProductCard'

export default function ProductsFeed({products}) {
    return (
        <section className="px-7_5">
            <div className="grid grid-cols-3 gap-x-4 gap-y-20">
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard src={product.images[0] ?? null} title={product.title} />
                        )
                    })
                }
            </div>
        </section>
    )
}