import Head from 'next/head'

import { getThreeAvailablesProducts } from '@queries/products'
import SubsHero from '@sections/SubsHero'
import SubsComparative from '@sections/SubsComparative'
import SubsServices from '@sections/SubsServices'
import LatestBox from '@sections/LatestBox'
import HpBottles from '@sections/HpBottles'

export default function Subscriptions({products}) {
    return (
        <>
            <Head>
                <title>Abonnements | Moon Wine</title>
            </Head>
            <SubsHero />
            <SubsComparative />
            <SubsServices />
            <LatestBox />
            <HpBottles products={products} />
        </>
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