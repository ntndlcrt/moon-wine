import Head from 'next/head'
import Nav from '@molecules/Nav'
import { getProducts, getProductByHandle } from '@queries/products'
import { createCheckout } from '@queries/checkouts'

export default function Product({ title, variantId }) {
    async function checkout(id) {
        const checkout = await createCheckout(id, 1)
        console.log(checkout)
    }

    return (
        <>
            <Head>
                <title>{title} | Moon wine</title>
            </Head>
            <Nav />
            <main data-scroll-container>
                <div data-scroll-section>
                    <div>
                        <h1>{title}</h1>
                        <p>{variantId}</p>
                        <button onClick={() => {checkout(variantId)}}>Acheter</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await getProducts('Bouteille')

    const paths = products.map((product) => ({
        params: {
            handle: product.handle
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const product = await getProductByHandle(params.handle)
    const { title, variantId } = product

    return {
        props: {
            title,
            variantId
        }
    }
}