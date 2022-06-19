import { getProducts, getProductByHandle } from 'queries/shopifyApi'

import { checkoutCreate } from 'queries/shopifyApi/checkout'

export default function Product({ title, variantID }) {
    async function checkout(id) {
        const webUrl = await checkoutCreate(id, 1)
        console.log
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{variantID}</p>
            <button onClick={() => {checkout(variantID)}}>Acheter</button>
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await getProducts({type: 'Bouteille'})

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
    const { title, variantID } = product

    return {
        props: {
            title,
            variantID
        }
    }
}