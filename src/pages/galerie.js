import { useRef } from 'react'
import { motion } from 'framer-motion'

let cards = []
for(let i=1 ; i<=100 ; i++) {
    cards.push(i)
}

export default function Galery({ columns, width, top, left }) {
    const constraintsRef = useRef(null)

    return (
        <motion.div className="galery" ref={constraintsRef} data-scroll-section>
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
                            <div key={`galery-cards-card-${card}`} className="galery__cards__card col-span-1" style={{backgroundImage: `url(https://picsum.photos/200/300)`}}>{card}</div>
                        )
                    }))
                }
            </motion.div>
        </motion.div>
    )
}

export const getServerSideProps = async () => {
    let columns = Math.round(Math.sqrt(cards.length))
    let width = columns * 400 + columns * 120
    let top = (Math.ceil(columns) * 600 + Math.ceil(columns) * 120) / 2
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