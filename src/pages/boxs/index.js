import LayoutProductsPage from 'src/layouts/ProductsPage'
import { getProducts } from '@queries/products'

export default function Boxs({ products }) {
    const layoutArgs = {
        pageTitle: 'Boxs à l\'unité | Moon wine',
        title: 'Boxs à<br/>l\'unité',
        content: 'Vous souhaitez découvrir nos boxs sans vous abonner à l\’une de<br/>nos formules ? Il vous est possible de commander la box du<br/>moment à l\’unité.',
        products
    } 

    return (
        <LayoutProductsPage {...layoutArgs} />
    )
}

export const getServerSideProps = async () => {
    const products = await getProducts('Box')

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}