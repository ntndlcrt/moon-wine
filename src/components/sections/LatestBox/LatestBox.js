import Image from 'next/image'

import { LabelUptitle } from "@UI/Labels"
import { Button } from "@UI/Buttons"

import styles from './LatestBox.module.scss'

const buttonArgs = {
    url: '/boxs/',
    title: 'Acheter à l\'unité',
    isLink: true,
    color: "beige"
}

export default function LatestBox() {
    return (
        <section className="mb-10_5" data-scroll-section>
            <div className="w-full bg-red py-10_5 relative overflow-hidden rounded-1">
                <div className="flex flex-col items-center justify-center text-center w-50 mx-auto">
                    <LabelUptitle title="Etienne fort x vitoria vilela" />
                    <h2 className="title--xl mt-2_22 mb-1_67 text-beige">La box du moment</h2>
                    <Button {...buttonArgs} />
                </div>
                <div className={styles.latestBoxVisual} data-scroll data-scroll-speed="-1">
                    <Image src="/img/png/latest-box.png" layout="fill" objectPosition="bottom center" objectFit="contain" />
                </div>
            </div>
        </section>
    )
}