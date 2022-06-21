import Head from 'next/head'
import { getProducts } from '@queries/products'

import Nav from '@molecules/Nav'
import ProductsFeed from '@sections/ProductsFeed'

export default function Home({ products }) {
    return (
        <>
            <Head>
                <title>Cave exclusive | Moon wine</title>
            </Head>
            <Nav />
            <main data-scroll-container>
                <div data-scroll-section>
                    <section className="pt-16_8 pb-6_25">
                        <h1 className="title--xl">La cave<br/>exclusive</h1>
                    </section>
                    <ProductsFeed products={products} />
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts('Bouteille')

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}