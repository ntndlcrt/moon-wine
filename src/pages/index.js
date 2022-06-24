import Head from 'next/head'
import Image from 'next/image'

import { getThreeAvailablesProducts } from '@queries/products'

import Nav from '@molecules/Nav'
import HpHero from '@sections/HpHero'
import HpBox from '@sections/HpBox'
import HpGallery from '@sections/HpGallery'
import HpAbout from '@sections/HpAbout'
import HpNaturalWineClub from '@sections/HpNaturalWineClub'
import HpBottles from '@sections/HpBottles'
import LatestBox from '@sections/LatestBox'

export default function Home({products}) {
    return (
        <div className="relative">
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <HpHero />
            <HpBox />
            <HpGallery />
            <HpAbout />
            <HpNaturalWineClub />
            <HpBottles products={products} />
            <LatestBox />
            <div className="hpStickyButton">
                <div className="hpStickyButton__img">
                    <Image layout="fill" objectPosition="center" objectFit="contain" src="/img/png/hpStickyButton.png" />
                </div>
                <span>La box du moment</span>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const products = await getThreeAvailablesProducts()

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}