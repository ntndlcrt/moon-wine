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
            <section className="pt-13_5 pb-10_5" data-scroll-section>
                <div className="flex items-start justify-between relative">
                    <h1 className="title--xxl">La cave<br/>exclusive</h1>
                    <span className="title--xxl">({products.length})</span>
                    <p className="absolute right-2_77 bottom-0 translate-y-1/2">Il vous est possible de commander une bouteille à l’unité afin de<br/>pouvoir découvrir des cuvées différentes ou ré-apprécier des vins qui<br/>vous ont marqué.</p>
                </div>
            </section>
            <ProductsFeed products={products} />
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