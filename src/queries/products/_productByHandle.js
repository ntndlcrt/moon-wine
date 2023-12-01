import { storefrontClient } from '@queries/storefrontClient'

const gql = String.raw

function getFormattedProduct(productData) {
    let handle = productData.handle
    let title = productData.title
    let { id, availableForSale, price } = productData.variants.edges[0].node
    let wineColor = productData.wineColor?.value
    let imgPng = productData.imgPng?.value

    return {
        handle,
        title,
        variantId: id,
        availableForSale,
        price,
        imgPng: imgPng,
        wineColor
    }
}

export async function getProductByHandle(handle) {
    const query = gql`{
        product(handle: "${handle}") {
            handle
            title
            variants(first: 1) {
                edges {
                    node {
                        id
                        price {
                            amount
                            currencyCode
                        }
                        availableForSale
                    }
                }
            }
            wineColor: metafield(namespace: "accentuate", key: "wineColor") {
                key
                value
            }
            imgPng: metafield(namespace: "accentuate", key:"imgPng") {
                key
                value
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