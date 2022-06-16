import { getProducts, getProductByHandle } from 'queries/shopifyApi'

export default function Product({ product }) {
    return (
        <h1>{product.title}</h1>
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

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}