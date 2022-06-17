import { getProducts } from 'queries/shopifyApi'

import ProductsFeed from 'sections/ProductsFeed'

export default function Home({ products }) {
    return (
        <>
            <h1 className="text-72 px-6 pt-10 pb-20">MOON WINE</h1>
            <ProductsFeed products={products} />
        </>
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts()

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}