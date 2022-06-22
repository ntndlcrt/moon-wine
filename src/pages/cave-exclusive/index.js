import LayoutProductsPage from 'src/layouts/ProductsPage'
import { getProducts } from '@queries/products'

export default function Bottles({ products }) {
    const layoutArgs = {
        pageTitle: 'Cave exclusive | Moon wine',
        title: 'La cave<br/>exclusive',
        content: 'Il vous est possible de commander une bouteille à l’unité afin de<br/>pouvoir découvrir des cuvées différentes ou ré-apprécier des vins qui<br/>vous ont marqué.',
        products
    }

    return (
        <LayoutProductsPage {...layoutArgs} />
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