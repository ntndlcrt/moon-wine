import { useRef } from 'react'
import { motion } from 'framer-motion'

import Link from 'next/link'
import Head from 'next/head'

let cards = []
for(let i=1 ; i<=30 ; i++) {
    cards.push(i)
}

export default function Galery({ columns, width, top, left }) {
    const constraintsRef = useRef(null)

    return (
        <>
            <Head>
                <title>Galerie | Moon Wine</title>
            </Head>
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
                                <div key={`galery-cards-card-${card}`} className="galery__cards__card col-span-1" style={{backgroundImage: `url('/img/gallery/${card}.webp')`}}></div>
                            )
                        }))
                    }
                </motion.div>
                <Link href="/" passHref>
                    <span className="
                        uppercase
                        text-white
                        rounded-full
                        bg-red
                        text-0_83
                        px-3_33
                        py-1_67
                        font-600
                        block
                        cursor-pointer
                        underline
                        flex
                        items-center
                        fixed
                        z-50
                        bottom-3_5
                        left-1/2
                        -translate-x-1/2
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.537" height="20" viewBox="0 0 20.537 20" className="mr-0_8">
                            <g id="Iconly_Light-Outline_Logout" data-name="Iconly/Light-Outline/Logout" transform="translate(45.537 22) rotate(180)">
                                <g id="Logout" transform="translate(25 2)">
                                    <path id="Combined-Shape" d="M9.308,0a4.441,4.441,0,0,1,4.436,4.436v.932a.75.75,0,0,1-1.5,0V4.436A2.939,2.939,0,0,0,9.308,1.5H4.433A2.937,2.937,0,0,0,1.5,4.436V15.565A2.937,2.937,0,0,0,4.433,18.5H9.319a2.929,2.929,0,0,0,2.925-2.924v-.943a.75.75,0,0,1,1.5,0v.943A4.43,4.43,0,0,1,9.319,20H4.433A4.439,4.439,0,0,1,0,15.565V4.436A4.44,4.44,0,0,1,4.433,0Zm8.08,6.554,2.928,2.915a.739.739,0,0,1,.071.081l-.071-.081a.736.736,0,0,1,.094.114c.012.018.024.038.034.057s.017.031.024.048.012.029.018.043.014.039.02.058.008.031.012.047.008.038.011.058,0,.026,0,.039a.669.669,0,0,1,0,.067l-.005.062,0,.04v.005L20.537,10a.751.751,0,0,1-.018.164c0,.016-.008.031-.012.047s-.012.04-.02.059-.012.029-.018.043-.015.032-.024.048-.022.038-.035.057l-.023.032a.786.786,0,0,1-.078.088l-2.921,2.909a.75.75,0,1,1-1.058-1.062l1.64-1.635H7.746a.75.75,0,0,1,0-1.5H17.972L16.33,7.616a.75.75,0,1,1,1.058-1.062Z" fill="#f5f4ec" fillRule="evenodd"/>
                                </g>
                            </g>
                        </svg>
                        Quitter la galerie
                    </span>
                </Link>
            </motion.div>
        </>
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