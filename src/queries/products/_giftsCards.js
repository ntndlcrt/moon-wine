import { storefrontClient } from '@queries/storefrontClient'

const gql = String.raw

function getFormattedProducts(productsData) {
    let products = []

    for(const product of productsData) {
        const { handle, title, variants, images } = product.node
        let { price, availableForSale } = variants.edges[0].node
        
        products.push({
            handle,
            title,
            price,
            availableForSale,
            imgPng: images?.edges[0]?.node?.src ?? null
        })
    }

    return products
}

export async function getGiftsCards(type = null) {
    const query = gql`{
        collectionByHandle(handle: "cartes-cadeaux") {
            products(first: 10) {
                edges {
                    node {
                        handle
                        title
                        variants(first: 1) {
                            edges {
                                node {
                                    availableForSale
                                    price
                                }
                            }
                        }
                        images(first: 1) {
                            edges {
                                node {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }`

    const response = await storefrontClient({query})

    let products = response.data.collectionByHandle.products.edges
        ?
            getFormattedProducts(response.data.collectionByHandle.products.edges)
        :
            []

    return products
}