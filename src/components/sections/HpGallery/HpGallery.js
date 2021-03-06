import Image from 'next/image'

import { CheckoutDarkBg } from '@UI/Icons'
import { Button } from '@UI/Buttons'
import { PatternFrameDark } from '@UI/Patterns'

import styles from './HpGallery.module.scss'

const buttonArgs = {
    url: '/galerie',
    title: 'Découvrir notre galerie d\'art',
    isLink: true
}

export default function HpGallery() {
    return (
        <section className="py-13_89 bg-gray_darkest" data-scroll-section>
            <div className="grid grid-cols-22 extraPadding items-center">
                <div className="col-span-9 h-full">
                    <div className={styles.frame}>
                        <div className={styles.frameBottle} data-scroll data-scroll-speed="4">
                            <Image src="/img/png/bottles/oiseau-des-vignes.png" layout="fill" objectFit="contain" objectPosition="center" />
                        </div>
                        <Image src="/img/png/frame.png" layout="fill" objectFit="contain" objectPosition="center" />
                        <div className={styles.frameBackground}>
                            <PatternFrameDark />
                        </div>
                    </div>
                </div>
                <div className="col-span-10 col-start-[12] text-beige py-2">
                    <h3 className="title--xl mb-2_22">Un plaisir gustatif et visuel</h3>
                    <div className="mb-3_33">
                        <div className="flex items-center mb-1_1">
                            <CheckoutDarkBg />
                            <p className="ml-1_1">Vins naturels et biodynamiques issus de l’agriculture biologique</p>
                        </div>
                        <div className="flex items-center mb-1_1">
                            <CheckoutDarkBg />
                            <p className="ml-1_1">En collaboration avec des artistes et vignerons de tout horizon</p>
                        </div>
                        <div className="flex items-center">
                            <CheckoutDarkBg />
                            <p className="ml-1_1">Vins exclusif et de collection, en quantité limitée</p>
                        </div>
                    </div>
                    <Button {...buttonArgs} />
                </div>
            </div>
        </section>
    )
}