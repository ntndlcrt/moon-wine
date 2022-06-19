import Head from 'next/head'
import { getProducts } from 'queries/shopifyApi'

import Nav from 'molecules/Nav'
import ProductsFeed from 'sections/ProductsFeed'

export default function Home({ products }) {
    return (
        <>
            <Head>
                <title>Cave exclusive | Moon wine</title>
            </Head>
            <body>
                <Nav />
                <main>
                    <section className="pt-16_8 pb-6_25">
                        <h1 className="title--xl">La cave<br/>exclusive</h1>
                    </section>
                    <ProductsFeed products={products} />
                </main>
            </body>
        </>
    )
}

export const getServerSideProps = async () => {
    const getProductsProps = {
        type: 'Bouteille',
        metafields: [
            {
                namespace: 'accentuate',
                key: 'wineColor'
            },
            {
                namespace: 'accentuate',
                key: 'imgPng'
            }
        ]
    }

    const products = await getProducts(getProductsProps)

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}