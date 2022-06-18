import { storefrontClient } from 'shopifyApi/config'
import { getBodyProducts } from 'shopifyApi/bodies'

async function getFormatedProducts(productsData) {
    let products = []

    for(const product of productsData) {
        const { handle, title, publishedAt, productType } = product.node
        let images = []

        product.node.images?.edges.forEach(edge => {
            images.push(edge.node.src)
        })
        
        products.push({
            productType,
            handle,
            title,
            publishedAt,
            images
        })
    }

    return products
}

export default async function getProducts({type = null}) {
    let productsData = await storefrontClient.query(getBodyProducts())
    productsData = productsData?.body?.data?.products?.edges ?? null

    let products = await getFormatedProducts(productsData)

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