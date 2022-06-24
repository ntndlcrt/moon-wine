import Image from 'next/image'

import styles from './ProductHero.module.scss'

export default function ProductHero({bgColor, textColor, title, imgPng}) {
    return (
        <section className={`h-screen w-screen relative z-30 ${bgColor}`} data-scroll-section>
            <div className={`${styles.productHeroTitle} ${textColor}`}>
                <h1 data-scroll data-scroll-speed="1">{title}</h1>
            </div>
            <div className={styles.productHeroImage}>
                <div className={styles.productHeroImageScroll} data-scroll data-scroll-speed="-2">
                    <Image src={imgPng} layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </div>
        </section>
    )
}