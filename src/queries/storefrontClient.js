export async function storefrontClient({query, variables = {}}) {
    const fetchUrl = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api/2021-01/graphql.json`

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({query, variables}),
    }
  
    try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) =>
            response.json(),
        )

        return data
    } catch (error) {
        throw new Error(error.json())
    }
}