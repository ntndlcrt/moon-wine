import ProductsSliderFrame from '@molecules/ProductsSliderFrame'

export default function HpHero() {
    return (
        <section className="bg-red" data-scroll-section>
            <div className="h-screen relative pt-13 flex justify-center">
                <h1 className="text-center title--xxl text-beige w-content" data-scroll data-scroll-speed="-3">
                    <span className="text-beige_dark">Un vigneron,<br/>un artiste,</span><br/>un vin unique.
                </h1>
            </div>
            <ProductsSliderFrame />
        </section>
    )
}