import Head from 'next/head'

import Nav from 'molecules/Nav'
import HpHero from 'sections/HpHero'

export default function Home() {
    return (
        <>
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <body>
                <Nav />
                <main data-scroll-container>
                    <div data-scroll-section>
                        <HpHero />
                    </div>
                </main>
            </body>
        </>
    )
}