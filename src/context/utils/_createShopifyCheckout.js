import { createCheckout } from 'queries/checkouts'

export default async function createShopifyCheckout(newItem) {
    const data = await createCheckout( newItem['variantId'], newItem['variantQuantity'])  
    return data
}