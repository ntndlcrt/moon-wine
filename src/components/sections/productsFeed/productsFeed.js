import ProductCard from 'molecules/ProductCard'

export default function ProductsFeed({products}) {
    return (
        <section className="pb-20">
            <div className="grid grid-cols-4 gap-6 px-6">
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