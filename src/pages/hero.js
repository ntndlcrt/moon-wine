import customCursor from 'src/scripts/customCursor'

export default function Hero() {
    //customCursor()

    return (
        // <section className="hp-hero h-screen">
        //     <div className="hp-hero__shape h-full">
        //         <div className="hp-hero__shape__cursor bg-red"></div>
        //     </div>
        //     <div className="hp-hero__blend flex items-center justify-center h-full">
        //         <h1 className="text-center text-120 font-700 uppercase">Un vigneron,<br/>un artiste,<br/>un vin unique.</h1>
        //     </div>
        //     <div className="hp-hero__blend__overlay flex items-center justify-center h-full">
        //         <h1 className="text-center text-120 font-700 uppercase">Un vigneron,<br/>un artiste,<br/>un vin unique.</h1>
        //     </div>
        // </section>

        // <div className="hp-hero w-screen h-screen">
        //     <h1 id="hp-hero-text" className="hp-hero__text text-center text-120 font-700 uppercase h-100 w-100 flex items-center justify-center absolute top-0 left-0">
        //         Un vigneron,<br/>un artiste,<br/>un vin unique.
        //     </h1>
        //     <div className="hp-hero__background h-full w-full bg-red absolute left-0 top-0"></div>
        //     <div className="hp-hero__cursor absolute z-10 bg-beige"></div>
        // </div>

        // <div className="hp-hero w-screen h-screen bg-red">
        //     <div className="hp-hero__area"></div>
        //     <div className="hp-hero__title text-red">Un vigneron,<br/>un artiste,<br/>un vin unique.</div>
        //     <div className="hp-hero__cursor bg-beige"></div>
        //     <div className="hp-hero__title text-beige">Un vigneron,<br/>un artiste,<br/>un vin unique.</div>
        // </div>

        <div className="w-screen h-screen bg-red relative pt-26 flex justify-center">
            <h1 className="text-center font-molgak text-110 leading-1 text-beige uppercase w-content">
                Un vigneron,<br/>un artiste,<br/>un vin unique.
            </h1>
        </div>
    )
}