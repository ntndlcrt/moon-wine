import Head from 'next/head'
import { getProducts } from 'queries/shopifyApi'

import Nav from 'molecules/Nav'
import HpHero from 'sections/HpHero'

export default function Home({ products }) {
    return (
        <>
            <Head>
                <title>Moon Wine | Un vigneron, un artiste, un vin unique</title>
            </Head>
            <body>
                <Nav />
                <main>
                    <HpHero products={products} />
                </main>
            </body>
        </>
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts()

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}