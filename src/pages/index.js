import Head from 'next/head'

import Nav from '@molecules/Nav'
import HpHero from '@sections/HpHero'
import HpBox from '@sections/HpBox'

export default function Home() {
    return (
        <>
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <Nav />
            <main data-scroll-container>
                <div data-scroll-section>
                    <HpHero />
                    <HpBox />
                </div>
            </main>
        </>
    )
}