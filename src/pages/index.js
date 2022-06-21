import Head from 'next/head'

import Nav from '@molecules/Nav'
import HpHero from '@sections/HpHero'
import HpBox from '@sections/HpBox'
import HpGallery from '@sections/HpGallery'

export default function Home() {
    return (
        <>
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <Nav />
            <main>
                <HpHero />
                <HpBox />
                <HpGallery />
            </main>
        </>
    )
}