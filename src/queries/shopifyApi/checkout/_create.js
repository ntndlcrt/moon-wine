import { storefrontClient } from 'queries/shopifyApi/config'

export default async function checkoutCreate({variantId, quantity}) {
    const { data } = await storefrontClient.query({data: `{
        mutation CheckoutCreate($variantId: ID!, $quantity: int!) {
            checkoutCreate(input: {
                lineItems: {
                    variantId: $variantId,
                    quantity: $quantity
                }
            }) {
                checkout {
                    id
                    webUrl
                }
            }
        }
    }`}, {
        variantId,
        quantity
    })

    const { webUrl } = data.checkoutCreate.checkout
    return webUrl
}