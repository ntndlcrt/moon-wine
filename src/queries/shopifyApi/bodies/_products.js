export default function getBodyProducts() {
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
                        images(first: 10) {
                            edges {
                                node {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }`,
    }
}