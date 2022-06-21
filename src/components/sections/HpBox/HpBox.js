import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Button, ButtonArrow } from '@UI/Buttons'
import { Close } from '@UI/Icons'

import stepsContents from './_stepsContents'
import styles from './HpBox.module.scss'

const buttonArgs = {
    url: '/abonnements',
    title: 'Découvrir nos abonnements',
    isLink: true
}

let buttonArrowPreviousArgs = {
    title: 'Précédent',
    color: 'gray_darkest',
    side: 'left',
    disabled: false
}

let buttonArrowNextArgs = {
    title: 'Suivant',
    color: 'gray_darkest',
    side: 'right',
    disabled: false
}

export default function HpBox() {
    const [activeStep, setActiveStep ] = useState(null)
    const [stepContent, setStepContent] = useState(stepsContents[0])

    useEffect(() => {
        if(activeStep !== null) {
            setStepContent(stepsContents[activeStep -1])
        }

        if(activeStep === 1) {
            buttonArrowPreviousArgs.disabled = true
        } else if(activeStep === 4) {
            buttonArrowNextArgs.disabled = true
        } else {
            buttonArrowPreviousArgs.disabled = false
            buttonArrowNextArgs.disabled = false
        }

    }, [activeStep])

    function closeOverlay() {
        setActiveStep(null)
    }

    function changeStep(which) {
        if(which === 'previous' && activeStep > 1) {
            setActiveStep(activeStep - 1)
        } else if (which === 'next' && activeStep < 4) {
            setActiveStep(activeStep + 1)
        }
    }

    return (
        <section className="pt-10_5 pb-12_5">
            <div className="grid grid-cols-22 extraPadding items-center">
                <div className="col-span-8 py-5_55">
                    <h2 className="title--xl mb-1_1">Des boxs au concept unique</h2>
                    <p className="mb-3_33">Moon Wine, c’est : un vigneron, un artiste, une box de vin naturel et deux cuvées dont une totalement exclusive en édition limitée.  Le tout, disponible, en trois formules pour satisfaire tous vos besoins.</p>
                    <Button {...buttonArgs} />
                </div>
                <div className="col-span-11 col-start-12 relative h-full">
                    <div className={`${styles.stepButton} ${styles.stepButton1} ${activeStep === 1 ? styles.stepButtonActive : ''}`} onClick={() => {setActiveStep(1)}}>
                        <span>1</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton2} ${activeStep === 2 ? styles.stepButtonActive : ''}`} onClick={() => {setActiveStep(2)}}>
                        <span>2</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton3} ${activeStep === 3 ? styles.stepButtonActive : ''}`} onClick={() => {setActiveStep(3)}}>
                        <span>3</span>
                    </div>
                    <div className={`${styles.stepButton} ${styles.stepButton4} ${activeStep === 4 ? styles.stepButtonActive : ''}`} onClick={() => {setActiveStep(4)}}>
                        <span>4</span>
                    </div>
                    <Image src='/img/png/boxs/displayed.png' layout="fill" objectFit="contain" objectPosition="center" />
                </div>
            </div>
            <div id="step-overlay" className={`${styles.stepOverlay} ${activeStep ? styles.stepOverlayActive : ''}`} data-scroll data-scroll-sticky data-scroll-target="body">
                <div className="flex flex-col h-full">
                    <Close clickEvent={closeOverlay} />
                    <div className="grid grid-cols-4 mt-2_22">
                        <div className={styles.stepOverlayContent}>
                            <span>{activeStep ?? '0'}/4</span>
                            <span className={styles.stepOverlayContentTitle}>{stepContent.title}</span>
                            <p>{stepContent.content}</p>
                        </div>
                    </div>
                    <div className={styles.stepOverlayContentImgs}>
                        <div className={styles.stepOverlayContentImgsImg}>
                            <Image src={stepContent.srcFirst} layout="fill" objectFit="cover" objectPosition="center" />
                        </div>
                        <div className={styles.stepOverlayContentImgsImg}>
                            <Image src={stepContent.srcSecond} layout="fill" objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                    <div className={styles.stepOverlayFooter}>
                        <ButtonArrow {... buttonArrowPreviousArgs} clickEvent={changeStep} clickEventArg={'previous'} />
                        <ButtonArrow {... buttonArrowNextArgs} clickEvent={changeStep} clickEventArg={'next'} />
                    </div>
                </div>
                <div className={`${styles.stepOverlayCloseArea} ${activeStep ? styles.stepOverlayCloseAreaActive : ''}`} onClick={() => {setActiveStep(null)}}></div>
            </div>
        </section>
    )
}