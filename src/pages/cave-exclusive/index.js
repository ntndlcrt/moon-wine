import Head from 'next/head'
import { getProducts } from 'queries/shopifyApi'

import Nav from 'molecules/Nav'
import ProductsFeed from 'sections/ProductsFeed'

export default function Home({ products }) {
    console.log(products)
    
    return (
        <>
            <Head>
                <title>Cave exclusive | Moon wine</title>
            </Head>
            <body>
                <Nav />
                <main>
                    <section className="pt-24 pb-17_5 px-7_5">
                        <h1 className="title--xl">La cave<br/>exclusive</h1>
                    </section>
                    <ProductsFeed products={products} />
                </main>
            </body>
        </>
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts({type: 'Bouteille'})

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}