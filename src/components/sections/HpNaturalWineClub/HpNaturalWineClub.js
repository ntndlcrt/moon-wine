import React from 'react'
import Ticker from 'react-ticker'
import Image from 'next/image'

import styles from './HpNaturalWineClub.module.scss'

export default function HpNaturalWineClub() {
    return (
        <>
            <section className="paddingNone py-13 relative" data-scroll-section-inview data-scroll-section>
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
                <div className={styles.bottle} data-scroll data-scroll-speed="9">
                    <Image src="/img/png/natural_wine_club.png" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </section>
        </>
    )
}