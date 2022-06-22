import LayoutProductsPage from 'src/layouts/ProductsPage'
import { getGiftsCards } from '@queries/products'

export default function Bottles({ products }) {
    const layoutArgs = {
        pageTitle: 'Cartes cadeaux | Moon wine',
        title: 'Cartes<br/>cadeaux',
        content: 'À la recherche du cadeau idéal ? Offrez dès maintenant une<br/>expérience gustative et visuelle à vos proches. Nos cartes cadeaux<br/>sont valables 1 an sur toute la boutique.',
        products,
        noWhiteLabel: true
    }

    return (
        <LayoutProductsPage {...layoutArgs} />
    )
}

export const getServerSideProps = async () => {
    const products = await getGiftsCards()

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}