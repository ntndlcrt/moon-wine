import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { LabelWineColor, AvailableForSale } from '@UI/Labels'
import { ShapeMoon } from '@UI/Shapes'

import styles from './ProductCard.module.scss'

const bottle = {
    rest: {
        transform: 'translate(-50%, -50%)'
    },
    hover: {
        transform: 'translate(-50%, -50%) rotate(-25deg)'
    }
}

export default function ProductCard({ handle, imgPng, availableForSale, title, wineColor, release, price, noWhiteLabel }) {
    return (
        <motion.div
            className={styles.productCard}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <Link href={`/cave-exclusive/${handle}`}>
                <div className={styles.productCardVisual}>
                    {imgPng &&
                        <motion.div className={styles.productCardVisualImage} variants={bottle}>
                            <Image src={imgPng} layout="fill" objectFit="contain" objectPosition="center" />
                        </motion.div>
                    }
                    <div className={styles.productCardVisualShape}>
                        <ShapeMoon color={availableForSale ? 'white' : 'gray'} />
                    </div>
                </div>
            </Link>
            <AvailableForSale available={availableForSale} />
            <Link href={`/cave-exclusive/${handle}`} passHref>
                <a className="w-90 mx-auto">
                    <h2 className={`title--l ${styles.productCardTitle}`}>{title}</h2>
                </a>
            </Link>
            <div className="flex items-center justify-center mt-auto">
                {noWhiteLabel !== true &&
                    <LabelWineColor text={wineColor ?? release ?? '---'} />
                }
                <span className="ml-0_8 text-1">{price}€</span>
            </div>
        </motion.div>
    )
}