var myHeaders = new Headers()

myHeaders.append('Content-Type', 'application/json')
myHeaders.append('X-Shopify-Storefront-Access-Token', '264ef0e372d2093b9a8ad4ab597725cd')
myHeaders.append('Cookie', 'request_method=POST')

var graphql = JSON.stringify({
    query: `{
        products(first: 100) {
            edges {
                node {
                    id
                    handle
                    title
                    productType
                    publishedAt
                    images(first: 10) {
                        edges {
                            node {
                                src
                            }
                        }
                    }
                    metafields(first: 15) {
                        edges {
                            node {
                                key
                            }
                        }
                    }
                }
            }
        }
    }`,
    variables: {}
})

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow'
}

function getProductObject(data) {
    const { id, handle, title, images, publishedAt } = data
    const type = data.productType

    return {
        id,
        publishedAt,
        handle,
        title,
        type,
        images
    }
}

export default async function getProducts(params = null) {
    const products = await fetch(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/2021-07/graphql.json`, requestOptions)
        .then(response => response.text())
            .then(result => {
                let productsData = []

                JSON.parse(result).data.products.edges.map((product) => {
                    let images = []

                    product.node.images?.edges?.map((image) => {
                        images.push(image.node.src)
                    })

                    let productData = product.node
                    productData.images = images

                    if(params === null) {
                        productsData.push(getProductObject(productData))
                    } else {
                        if(params.type !== undefined) {
                            if(productData.productType === params.type) {
                                productsData.push(getProductObject(productData))
                            }
                        } else {
                            productsData.push(getProductObject(productData))
                        }
                    }
                })

                productsData.sort((a, b) => {
                    let timestampA = new Date(a.publishedAt)
                    let timestampB = new Date(b.publishedAt)

                    if (timestampA > timestampB) return -1
                    if (timestampA < timestampB) return 1
                    return 0
                })

                return productsData
            })
                .catch(error => console.log('error', error))

    return products
}