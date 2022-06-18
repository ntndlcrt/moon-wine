import ProductsSliderFrame from 'molecules/ProductsSliderFrame'

export default function HpHero() {
    return (
        <section>
            <div className="w-screen h-screen bg-red relative pt-28 flex justify-center">
                <h1 className="text-center font-molgak text-110 leading-1 text-beige uppercase w-content">
                    Un vigneron,<br/>un artiste,<br/>un vin unique.
                </h1>
            </div>
            <ProductsSliderFrame />
        </section>
    )
}