import { getProducts } from 'queries/shopifyApi'

const products = await getProducts()

export default function Product({ product }) {
    return (
        <h1>{product.title}</h1>
    )
}

export const getStaticPaths = async () => {
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
    const products = await getProducts()
    const product = products.find(product => product.handle === params.handle)

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}