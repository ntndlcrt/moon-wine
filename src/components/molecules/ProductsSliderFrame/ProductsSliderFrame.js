import Image from 'next/image'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import { PatternFrame } from '@UI/Patterns'

import styles from './ProductsSliderFrame.module.scss'
import 'swiper/css'

export default function ProductsSliderFrame({  }) {
    let [bottles, setBottles] = useState(false)

    useEffect(() => {
        let bottlesSrcs = []
    
        let bottlesNames = [
            '27-36',
            'amore',
            'arcane',
            'arome',
            'blanc-sur-rouge',
            'gourmandise',
            'oiseau-des-vignes',
            'passion',
            'rouge-sur-blanc',
        ]
    
        bottlesNames.forEach(name => {
            bottlesSrcs.push(`/img/png/bottles/${name}.png`)
        })

        setBottles(bottlesSrcs)
    }, [])

    return (
        <div id="productsSliderFrame" className="relative pb-20_83">
            <div className={styles.frame}>
                <Image src='/img/png/frame.png' layout="fill" object-fit="contain" />
            </div>
            {bottles &&
                <div className={styles.bottles} data-scroll data-scroll-direction="horizontal" data-scroll-target="#productsSliderFrame" data-scroll-speed="-9">
                    {bottles.map(bottle => {
                        return (
                            <div key={`bottle-${bottle}`} className={styles.bottlesBottle}>
                                <Image src={bottle} layout="fill" objectFit="contain" objectPosition="center" />
                            </div>
                        )
                    })}
                </div>
            }
            <div className={styles.framePattern}>
                <PatternFrame />
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    let bottles = []

    return {
        props: {
            bottles: JSON.parse(JSON.stringify(bottles)) ?? null
        }
    }
}