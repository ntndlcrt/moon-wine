import Head from 'next/head'

import Nav from '@molecules/Nav'
import HpHero from '@sections/HpHero'
import HpBox from '@sections/HpBox'
import HpGallery from '@sections/HpGallery'
import HpAbout from '@sections/HpAbout'
import HpNaturalWineClub from '@sections/HpNaturalWineClub'
import HpBottles from '@sections/HpBottles'

export default function Home() {
    return (
        <>
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <HpHero />
            <HpBox />
            <HpGallery />
            <HpAbout />
            <HpNaturalWineClub />
            <HpBottles />
        </>
    )
}