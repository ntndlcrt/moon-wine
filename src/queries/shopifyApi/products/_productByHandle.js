import { storefrontClient } from 'shopifyApi/config'
import { getBodyProductByHandle } from 'shopifyApi/bodies'

function getFormatedProduct(productData) {
    let title = productData.title
    let variantID = productData.variants.edges[0].node.id

    return {
        title,
        variantID
    }
}

export default async function getProductByHandle(handle) {
    let productData = await storefrontClient.query(getBodyProductByHandle(handle))
    productData = productData?.body?.data?.productByHandle

    return getFormatedProduct(productData)
}