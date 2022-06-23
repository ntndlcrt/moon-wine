import { storefrontClient } from '@queries/storefrontClient'

export async function updateCheckout(id, lineItems) {

    const formattedLineItems = lineItems.map(item => {
        return `{
            variantId: "${item.variantId}",
            quantity: ${item.quantity}
        }`
    })
  
    const query = `
        mutation {
            checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${atob(id)}") {
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
  
    const response = await storefrontClient(query)
  
    return response?.data?.checkoutLineItemsReplace?.checkout ?? []
  }