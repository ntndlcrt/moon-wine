import Head from 'next/head'

import Nav from '@molecules/Nav'
import { getProducts, getProductByHandle } from '@queries/products'
import ProductHero from '@sections/ProductHero'
import ProductAbout from '@sections/ProductAbout'
import ProductDetails from '@sections/ProductDetails'
import ProductForm from '@sections/ProductForm'

export default function Product({ handle, title, imgPng, price, availableForSale, wineColor, variantId, bgColor, textColor }) {
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
            <ProductAbout bgColor={bgColor} textColor={textColor} />
            <ProductDetails bgColor={bgColor} textColor={textColor} />
            <section className={`${bgColor} ${textColor} pt-7 pb-10_5 relative`} data-scroll-section>
                <div className="extraPadding grid grid-cols-2 gap-7">
                    <div className="col-span-1">
                        <span className="title--xl w-75">À chaque cuvée sa propre histoire</span>
                    </div>
                    <div className="col-span-1">
                        <p>Ici, pour notre premier vin catalan, nous tenions à marquer la diversité des vins de la région et surtout le caractère des lieux de cette petite enclave entre le Penedès et la Terra Alta. Cesc Boronat nous a emmené dans plusieurs parcelles, là où les vignes ressemblent à des parasols, là où son grand-père et son père ont planté de la vigne. Justement, son père, passionné par la Malvoisie aromatique italienne, récupère des bois pour les planter à Nulles lors d’un voyage en Italie.<br/><br/>Il trouve bel et bien un nouveau jardin à ce cépage qui affectionne les sols secs et bien exposés. À la dégustation, on retrouve toutes les notes d’abricot et de fleurs. La bouche est intense et le final fruité offre une très belle acidité.<br/><br/>Dans ce lieu particulier, même si la nature n’est pas généreuse en quantité, elle met tout en oeuvre pour que les raisins prennent l’empreinte de la terre et du ciel. Nous demandons alors à Cesc s’il est possible de produire un vin rouge autour des 12 degrés, comme la plupart de ses vins.<br/><br/>Après avoir dégusté un Grenache noir concentré et fruité présentant de beaux tannins, nous faisons le pari de l’assembler avec la Malvoisie si chère à son père.</p>
                    </div>
                </div>
            </section>
            <ProductForm bgColor={bgColor} textColor={textColor} price={price} />
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