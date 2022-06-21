import { storefrontClient } from '@queries/storefrontClient'

const gql = String.raw

export async function createCheckout(id, quantity) {
    console.log(id)
    console.log(quantity)
    const query = gql`
        mutation {
            checkoutCreate(input: {
                lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
            }) {
                checkout {
                    id
                    webUrl
                    lineItems(first: 250) {
                        edges {
                            node {
                                id
                                title
                                quantity
                            }
                        }
                    }
                }
            }
        }
    `

    const response = await storefrontClient({query})

    return response?.data?.checkoutCreate?.checkout ?? []
}