export default function getBodyProducts({metafields}) {
    return {
        data: `{
            products (first: 100) {
                edges {
                    node {
                        id
                        handle
                        title
                        productType
                        publishedAt
                        variants(first: 1) {
                            edges {
                                node {
                                    price
                                    availableForSale
                                }
                            }
                        }
                        ${metafields &&
                            metafields.map(field => {
                                return `
                                    ${field.key}: metafield(namespace: "${field.namespace}", key: "${field.key}") {
                                        key
                                        value
                                    }
                                `
                            })
                        }
                    }
                }
            }
        }`,
    }
}