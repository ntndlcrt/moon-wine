import { client } from 'queries/shopifyClient'

export default function Home({ products }) {
    console.log(products)
    return (
        <h1 className="text-72">MOON WINE</h1>
    )
}

export const getServerSideProps = async () => {
    const products = await client.product.fetchAll() ?? null

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}