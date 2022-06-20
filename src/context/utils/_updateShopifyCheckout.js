import { updateCheckout } from 'queries/checkouts'

export default async function updateShopifyCheckout(updatedCart, checkoutId) {
    const lineItems = updatedCart.map(item => {
        return {
            variantId: item['variantId'],
            quantity: item['variantQuantity']
        }
    })

    await updateCheckout(checkoutId, lineItems)
}