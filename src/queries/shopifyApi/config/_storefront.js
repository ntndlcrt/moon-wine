import Shopify from '@shopify/shopify-api'

const storefrontClient = new Shopify.Clients.Storefront(
    process.env.NEXT_PUBLIC_DOMAIN,
    process.env.NEXT_PUBLIC_STOREFRONT_TOKEN
)

export default storefrontClient