import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Button } from '@UI/Buttons'
import styles from './HpBox.module.scss'

const buttonArgs = {
    url: '/abonnements',
    title: 'Découvrir nos abonnements',
    isLink: true
}

export default function HpBox() {
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
        <section className="pt-10_5 pb-12_5" data-scroll-section>
            <div className="grid grid-cols-22 extraPadding items-center">
                <div className="col-span-8 py-5_55">
                    <h3 className="title--xl mb-1_1">Des boxs au concept unique</h3>
                    <p className="mb-3_33">Moon Wine, c’est : un vigneron, un artiste, une box de vin naturel et deux cuvées dont une totalement exclusive en édition limitée.  Le tout, disponible, en trois formules pour satisfaire tous vos besoins.</p>
                    <Button {...buttonArgs} />
                </div>
                <div className="col-span-11 col-start-12 relative h-full">
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