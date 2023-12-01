import { storefrontClient } from '@queries/storefrontClient'

const gql = String.raw

function getFormattedProducts(productsData) {
    let products = []

    for(const product of productsData) {
        const { handle, title, publishedAt, productType, variants, wineColor, release, imgPng } = product.node
        let { price, availableForSale } = variants.edges[0].node
        
        products.push({
            productType,
            handle,
            title,
            publishedAt,
            price,
            availableForSale,
            wineColor: wineColor?.value ?? null,
            release: release?.value ?? null,
            imgPng: imgPng?.value ? JSON.parse(imgPng.value)[0].src : null
        })
    }

    return products
}

function sortByDate(products) {
    products.sort((a, b) => {
        let timestampA = new Date(a.publishedAt)
        let timestampB = new Date(b.publishedAt)

        if (timestampA > timestampB) return -1
        if (timestampA < timestampB) return 1
        return 0
    })

    return products
}

export async function getProducts(type = null) {
    const query = gql`{
        products (first: 100) {
            edges {
                node {
                    id
                    handle
                    productType
                    publishedAt
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
                    release: metafield(namespace: "accentuate", key: "release") {
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
    }`

    const response = await storefrontClient({query})
    console.log(response)

    let products = response?.data?.products?.edges
        ?
            getFormattedProducts(response.data.products.edges)
        :
            []

    if(type !== null) {
        products = products.filter(product => {
            return product.productType === type
        })
    }

    let available = []
    let notAvailable = []

    products.forEach(product => {
        product.availableForSale === true ? available.push(product) : notAvailable.push(product)
    })

    available = sortByDate(available)
    notAvailable = sortByDate(notAvailable)

    return available.concat(notAvailable)
}