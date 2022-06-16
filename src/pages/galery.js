import { useRef } from 'react'
import { motion } from 'framer-motion'

let cards = []
for(let i=1 ; i<=100 ; i++) {
    cards.push(i)
}

export default function Galery({ columns, width, top, left }) {
    const constraintsRef = useRef(null)

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-Shopify-Storefront-Access-Token", "264ef0e372d2093b9a8ad4ab597725cd");

var graphql = JSON.stringify({
  query: "{\n	products(first: 2) {\n		edges {\n      node {\n        metafields(first:15) {\n          edges {\n            node {\n              id\n              namespace\n              value\n            }\n          }\n        }\n      }\n    }\n	}\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://moon-wine.myshopify.com/api/2021-07/graphql.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

    return (
        <motion.div className="galery" ref={constraintsRef}>
            <motion.div
                className="galery__cards"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    width: `${width}px`,
                    top: `calc(50% - ${top}px)`,
                    left: `calc(50% - ${left}px)`
                }}
                drag
                dragConstraints={constraintsRef}
                dragTransition={{ bounceStiffness: 600 }}
            >
                {
                    cards.map((card => {
                        return (
                            <div key={`galery-cards-card-${card}`} className="galery__cards__card" style={{backgroundImage: `url(https://picsum.photos/200/300)`}}>{card}</div>
                        )
                    }))
                }
            </motion.div>
        </motion.div>
    )
}

export const getServerSideProps = async () => {
    let columns = Math.round(Math.sqrt(cards.length))
    let width = columns * 400 + (columns - 1) * 24
    let top = (Math.ceil(columns) * 600 + Math.ceil(columns) * 24) / 2
    let left = width / 2

    return {
        props: {
            columns,
            width,
            top,
            left
        }
    }
}