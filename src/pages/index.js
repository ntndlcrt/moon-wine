import { parse } from 'postcss'
import { getProducts } from 'queries/shopifyApi'
import { client } from 'queries/shopifyClient'

import ProductsFeed from 'sections/productsFeed'

export default function Home({ products, clientProducts }) {
    console.log(clientProducts)

    return (
        <>
            <h1 className="text-72 px-6 pt-10 pb-20">MOON WINE</h1>
            <ProductsFeed products={products} />
        </>
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts({type: 'Box'})
    const clientProducts = await client.product.fetchAll()

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            clientProducts: JSON.parse(JSON.stringify(clientProducts))
        }
    }
}