var myHeaders = new Headers()

myHeaders.append('Content-Type', 'application/json')
myHeaders.append('X-Shopify-Access-Token', `${process.env.NEXT_PUBLIC_ADMIN_TOKEN}`)
myHeaders.append('Cookie', 'request_method=POST')

var graphql = JSON.stringify({
    query: `{
        articles(first:100) {
            edges {
                node {
                    handle
                    title
                    excerptHtml
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

export default async function getProducts() {
    const products = await fetch(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/2021-07/graphql.json`, requestOptions)
        .then(response => response.text())
            .then(result => {
                let productsData = []

                return productsData
            })
                .catch(error => console.log('error', error))

    return products
}