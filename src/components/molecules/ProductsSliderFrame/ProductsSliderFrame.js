import Image from 'next/image'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'

import { PatternFrame } from 'UI/Patterns'

import styles from './ProductsSliderFrame.module.scss'
import 'swiper/css'

export default function ProductsSliderFrame({  }) {
    let [bottles, setBottles] = useState([])

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
        <div id="products-slider-frame" className="relative pb-13">
            <div className={styles.frame}>
                <Image src='/img/png/frame.png' layout="fill" object-fit="contain" />
            </div>
            <Swiper
                spaceBetween={290}
                slidesPerView={'auto'}
                autoplay={{delay: 3000}}
                loop={true}
                className={styles.swiper}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src={bottles[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[1]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[2]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[3]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[4]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[5]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[6]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[7]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bottles[8]} alt="" />
                </SwiperSlide>
            </Swiper>
            {/* <div className={styles.bottles} data-scroll data-scroll-direction="horizontal" direction="horizontal">
                {bottles && bottles.map((bottle) => {
                    return (
                        <div className={styles.bottlesBottle}>
                            <img src={bottle} alt="" />
                        </div>
                    )
                })}
            </div> */}
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