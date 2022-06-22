import { LabelUptitle } from '@UI/Labels'
import { Button } from '@UI/Buttons'
import ProductCard from '@molecules/ProductCard'

const buttonArgs = {
    url: '/cave-exclusive',
    title: 'Voir toute la cave exclusive',
    isLink: true
}

export default function HpBottles({products}) {
    return (
        <section className="relative bg-beige" data-scroll-section>
            <div className="flex flex-col items-center text-center px-25 mb-6_25">
                <LabelUptitle title="La cave exclusive" />
                <h3 className="title--xl mt-2_22 mb-1_1">Nos bouteilles à l'unité</h3>
                <p className="px-5_55">Il vous est possible de commander une bouteille à l’unité afin de pouvoir découvrir des cuvées différentes ou ré-apprécier des vins qui vous ont marqué.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-10">
                {products &&
                    products.map((product) => {
                        return (
                            <ProductCard key={`product-card-${product.handle}`} {...product} />
                        )
                    })
                }
            </div>
            <div className="mt-6_25 flex justify-center">
                <Button {...buttonArgs} />
            </div>
        </section>
    )
}