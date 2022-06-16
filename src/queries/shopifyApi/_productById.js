var myHeaders = new Headers()

myHeaders.append('Content-Type', 'application/json')
myHeaders.append('X-Shopify-Storefront-Access-Token', '264ef0e372d2093b9a8ad4ab597725cd')
myHeaders.append('Cookie', 'request_method=POST')

function getBody(id) {
    const graphql = JSON.stringify({
        query: `{
            node(id: "${id}") {
                ... on Product {
                    id
                    handle
                    title
                }
            }
        }`,
        variables: {}
    })

    return graphql
}

function getRequestOptions(id) {
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: getBody(id),
        redirect: 'follow'
    }

    return requestOptions
}

export default async function getProductById(id) {
    const product = await fetch(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/2021-07/graphql.json`, getRequestOptions(id))
        .then(response => response.text())
            .then(result => {
                let productData = {}
                let data = JSON.parse(result).data.node

                productData = {
                    id: data.id,
                    handle: data.handle,
                    title: data.title
                }

                return productData
            })
                .catch(error => console.log('error', error))

    return product
}