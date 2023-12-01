import { storefrontClient } from '@queries/storefrontClient'

const gql = String.raw

function getFormattedProducts(productsData) {
    let products = []

    for(const product of productsData) {
        const { handle, title, publishedAt, productType, variants, wineColor, imgPng } = product.node
        let { price, availableForSale } = variants.edges[0].node
        
        products.push({
            productType,
            handle,
            title,
            publishedAt,
            price,
            availableForSale,
            wineColor: wineColor?.value ?? null,
            imgPng: imgPng?.value ? JSON.parse(imgPng.value)[0].src : null
        })
    }

    return products
}

export async function getThreeAvailablesProducts() {
    const query = gql`{
        collectionByHandle(handle: "bouteilles") {
            products(first: 3, filters: {available: true}) {
                edges {
                    node {
                        handle
                        title
                        variants(first: 1) {
                            edges {
                                node {
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
                }
            }
        }
    }`

    const response = await storefrontClient({query})

    let products = response?.data?.collectionByHandle?.products?.edges
        ?
            getFormattedProducts(response.data.collectionByHandle.products.edges)
        :
            []

    return products
}