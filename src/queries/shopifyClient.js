import Client from 'shopify-buy'

export const client = Client.buildClient({
  storefrontAccessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  domain: process.env.NEXT_PUBLIC_API_URL
})