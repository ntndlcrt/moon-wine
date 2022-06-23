import Image from 'next/image'
import { useState, useEffect } from 'react'

import { MoonSymbol } from '@UI/Icons'

import styles from './SubsHero.module.scss'

export default function SubsHero() {
    const [activeStep, setActiveStep] = useState(null)

    function setLocalStorageActiveStep(index) {
        localStorage.setItem('activeStep', index)
        window.dispatchEvent(new Event('storage'))
        document.documentElement.setAttribute('data-hide-nav', 'true')
    }

    useEffect(() => {
        window.addEventListener('storage', () => {
            setActiveStep(localStorage.getItem('activeStep') ?? null)
        })
    }, [])

    return (
        <section className="bg-red" data-scroll-section>
            <div className="flex flex-col py-13 mb-13 items-center justify-center text-center text-beige">
                <div className={styles.moonSymbols}>
                    <div className={styles.moonSymbolsIcon}>
                        <MoonSymbol icon="empty" />
                    </div>
                    <div className={styles.moonSymbolsIcon}>
                        <MoonSymbol icon="half" />
                    </div>
                    <div className={styles.moonSymbolsIcon}>
                        <MoonSymbol icon="full" isBeigeDark={true} />
                    </div>
                </div>
                <h1 className="title--xxl mb-1_67">Les formules<br/>moonwine</h1>
                <p className="mb-4_75">Moon Wine, c’est : un vigneron, un artiste, une box de vin naturel et deux<br/>cuvées dont une totalement exclusive en édition limitée.  Le tout, disponible,<br/>en trois formules pour satisfaire tous vos besoins.</p>
                <div className={styles.displayed}>
                    <div className={`${styles.stepButton} ${styles.stepButton1} ${parseInt(activeStep) === 1 ? styles.stepButtonActive : ''}`} onClick={() => {setLocalStorageActiveStep(1)}}>
                        <span>1</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton2} ${parseInt(activeStep) === 2 ? styles.stepButtonActive : ''}`} onClick={() => {setLocalStorageActiveStep(2)}}>
                        <span>2</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton3} ${parseInt(activeStep) === 3 ? styles.stepButtonActive : ''}`} onClick={() => {setLocalStorageActiveStep(3)}}>
                        <span>3</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton4} ${parseInt(activeStep) === 4 ? styles.stepButtonActive : ''}`} onClick={() => {setLocalStorageActiveStep(4)}}>
                        <span>4</span>
                    </div>
                    <Image src='/img/png/boxs/displayed.png' layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </div>
        </section>
    )
}