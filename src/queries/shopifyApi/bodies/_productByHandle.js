export default function getBodyProductByHandle(handle) {
    return {
        data: `{
            productByHandle(handle: "${handle}") {
                title
                variants(first: 1) {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        }`
    }
}