import Head from 'next/head'

import Nav from '@molecules/Nav'
import { getProducts, getProductByHandle } from '@queries/products'
import { useAddToCartContext } from '@context/Store'
import ProductHero from '@sections/ProductHero'

export default function Product({ handle, title, imgPng, price, availableForSale, wineColor, variantId, bgColor, textColor }) {
    // async function checkout(id) {
    //     const checkout = await createCheckout(id, 1)
    //     console.log(checkout)
    // }

    const addToCart = useAddToCartContext()

    async function handleAddToCart() {
        const quantity = 1

        if (quantity !== '') {
            addToCart({
                productTitle: title,
                productHandle: handle,
                productImage: imgPng,
                variantId,
                price: price,
                variantQuantity: quantity
            })
        }
    }

    return (
        <>
            <Head>
                <title>{title} | Moon wine</title>
            </Head>
            <Nav />
            {/* <section data-scroll-section className="bg-beige py-13 relative">
                <h1>{title}</h1>
                <p>{variantId}</p>
                <button onClick={handleAddToCart}>Ajouter 1 au panier</button>
            </section> */}
            <ProductHero bgColor={bgColor} textColor={textColor} title={title} imgPng={JSON.parse(imgPng)[0].src} />
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
    const { handle, title, imgPng, price, availableForSale, wineColor, variantId } = product

    let bgColor, textColor

    switch(wineColor) {
        case 'Rouge' :
            bgColor = 'bg-red'
            textColor = 'text-beige'
            break
        case 'Blanc' :
            bgColor = 'bg-beige_darker'
            textColor = 'text-beige'
            break
        case 'Pet\'nat' :
            bgColor = 'bg-green_dark'
            textColor = 'text-green_light'
            break
    }

    return {
        props: {
            handle,
            title,
            imgPng,
            price,
            availableForSale,
            wineColor,
            variantId,
            bgColor,
            textColor
        }
    }
}