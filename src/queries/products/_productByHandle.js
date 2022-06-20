import { storefrontClient } from 'queries/storefrontClient'

const gql = String.raw

function getFormattedProduct(productData) {
    let title = productData.title
    let variantId = productData.variants.edges[0].node.id

    return {
        title,
        variantId
    }
}

export async function getProductByHandle(handle) {
    const query = gql`{
        product(handle: "${handle}") {
            title
            variants(first: 1) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }`

    const response = await storefrontClient({query})

    let product = response.data.product
        ?
            getFormattedProduct(response.data.product)
        :
            []

    return product
}