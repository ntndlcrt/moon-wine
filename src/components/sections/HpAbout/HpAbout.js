import Image from 'next/image'

import { Button } from '@UI/Buttons'

import styles from './HpAbout.module.scss'

const buttonArgs = {
    url: '/a-propos',
    title: 'Découvrir notre histoire',
    isLink: true
}

export default function HpAbout() {
    return (
        <section className="pt-13" data-scroll-section>
            <div className={`flex flex-wrap items-start justify-center px-13_89 title--xl mb-3_33 ${styles.text}`}>
                <span className="mr-1_67">Pour</span>
                <div className={styles.vignette}>
                    <Image src='/img/png/vignettes/first.jpg' layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <span className="ml-1_67">créer des</span>
                <span className="mr-1_67">éxpériences</span>
                <div className={styles.vignette}>
                    <Image src='/img/png/vignettes/second.jpg' layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <span className="ml-1_67">il faut</span>
                <div className={styles.vignette}>
                    <Image src='/img/png/vignettes/third.jpg' layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <span className="ml-1_67">des histoires</span>
                <span className="mr-1_67">à raconter</span>
                <div className={styles.vignette}>
                    <Image src='/img/png/vignettes/fourth.jpg' layout="fill" objectFit="cover" objectPosition="center" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button {...buttonArgs} />
            </div>
        </section>
    )
}