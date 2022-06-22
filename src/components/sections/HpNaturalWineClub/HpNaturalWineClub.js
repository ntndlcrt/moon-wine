import React from 'react'
import Ticker from 'react-ticker'
import Image from 'next/image'

import styles from './HpNaturalWineClub.module.scss'

export default function HpNaturalWineClub() {
    return (
        <>
            <section className="paddingNone py-13 relative overflow-hidden" data-scroll-section-inview data-scroll-section>
                <Ticker speed={20}>
                    {({index}) => (
                        <>
                            <span className="title--xxxl mr-3_33">Natural wine club</span>
                        </>
                    )}
                </Ticker>
                <Ticker speed={20} direction="toRight">
                    {({index}) => (
                        <>
                            <span className="title--xxxl mr-3_33">Natural wine club</span>
                        </>
                    )}
                </Ticker>
                <div className={`${styles.bottleFirst} z-50`} data-scroll data-scroll-speed="-2">
                    <Image src="/img/png/natural_wine_club_tiltRight.png" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <div className={`${styles.bottleSecond} z-20`} data-scroll data-scroll-speed="7">
                    <Image src="/img/png/natural_wine_club_tiltLeft.png" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </section>
        </>
    )
}