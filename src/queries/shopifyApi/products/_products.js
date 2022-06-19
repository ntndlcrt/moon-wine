import { storefrontClient } from 'shopifyApi/config'
import { getBodyProducts } from 'shopifyApi/bodies'

async function getFormatedProducts(productsData, metafieldsData) {
    let products = []

    for(const product of productsData) {
        const { handle, title, publishedAt, productType, variants } = product.node
        let wineColor, imgPng = null
        let { price, availableForSale } = variants.edges[0].node

        if(metafieldsData.some(field => field.key === 'wineColor')) {
            wineColor = product.node['wineColor']?.value ?? null
        }

        if(metafieldsData.some(field => field.key === 'imgPng')) {
            let imgData = product.node['imgPng']?.value
            imgPng = imgData ? JSON.parse(imgData)[0].src : null
        }
        
        products.push({
            productType,
            handle,
            title,
            publishedAt,
            price,
            availableForSale,
            wineColor,
            imgPng
        })
    }

    return products
}

export default async function getProducts({type = null, metafields = []}) {
    let productsData = await storefrontClient.query(getBodyProducts({metafields}))
    productsData = productsData?.body?.data?.products?.edges ?? null

    let products = await getFormatedProducts(productsData, metafields)

    if(type !== null) {
        products = products.filter(product => {
            return product.productType === type
        })
    }

    products.sort((a, b) => {
        let timestampA = new Date(a.publishedAt)
        let timestampB = new Date(b.publishedAt)

        if (timestampA > timestampB) return -1
        if (timestampA < timestampB) return 1
        return 0
    })

    return products
}