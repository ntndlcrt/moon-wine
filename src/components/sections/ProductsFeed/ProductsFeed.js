import ProductCard from '@molecules/ProductCard'

export default function ProductsFeed({products, noWhiteLabel}) {
    return (
        <section className="relative pb-13 bg-beige" data-scroll-section>
            <div className="grid grid-cols-3 gap-x-2 gap-y-10">
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={`product-card-${product.handle}`} {...product} noWhiteLabel={noWhiteLabel} />
                        )
                    })
                }
            </div>
        </section>
    )
}