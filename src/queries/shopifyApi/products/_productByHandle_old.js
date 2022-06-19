var myHeaders = new Headers()

myHeaders.append('Content-Type', 'application/json')
myHeaders.append('X-Shopify-Storefront-Access-Token', `${process.env.NEXT_PUBLIC_STOREFRONT_TOKEN}`)
myHeaders.append('Cookie', 'request_method=POST')

function getBody(handle) {
    const graphql = JSON.stringify({
        query: `{
            productByHandle(handle: "${handle}") {
                id
                handle
                title
            }
        }`,
        variables: {}
    })

    return graphql
}

function getRequestOptions(handle) {
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: getBody(handle),
        redirect: 'follow'
    }

    return requestOptions
}

export default async function getProductByHandle(handle) {
    const product = await fetch(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/2021-07/graphql.json`, getRequestOptions(handle))
        .then(response => response.text())
            .then(result => {
                const { id, handle, title } = JSON.parse(result).data.productByHandle

                return {
                    id,
                    handle,
                    title
                }
            })
                .catch(error => console.log('error', error))

    return product
}