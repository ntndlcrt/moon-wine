import Image from 'next/image'
import { useState, useEffect } from 'react'

import { ButtonArrow } from '@UI/Buttons'
import { Close } from '@UI/Icons'

import stepsContents from './_stepsContents'

import styles from './StepsOverlay.module.scss'

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

export default function StepsOverlay(){
    const [activeStep, setActiveStep] = useState(null)
    const [stepContent, setStepContent] = useState(null)

    function setLocalStorageActiveStep(index) {
        localStorage.setItem('activeStep', index)
        window.dispatchEvent(new Event('storage'))
    }

    useEffect(() => {
        setStepContent(stepsContents[activeStep -1])

        if(activeStep === 'null') {
            document.documentElement.setAttribute('data-hide-nav', 'false')
        } else if(document.documentElement.getAttribute('data-hide-nav')) {
            document.documentElement.setAttribute('data-hide-nav', 'true')
        }

        if(parseInt(activeStep) === 1) {
            buttonArrowPreviousArgs.disabled = true
        } else if(parseInt(activeStep) === 4) {
            buttonArrowNextArgs.disabled = true
        } else {
            buttonArrowPreviousArgs.disabled = false
            buttonArrowNextArgs.disabled = false
        }

    }, [activeStep])


    if(typeof window !== 'undefined') {
        window.addEventListener('storage', () => {
            setActiveStep(localStorage.getItem('activeStep') ?? null)
        })
    }

    function closeOverlay() {
        setLocalStorageActiveStep(null)
        document.documentElement.setAttribute('data-hide-nav', 'false')
    }

    function changeStep(which) {
        if(which === 'previous' && activeStep > 1) {
            setLocalStorageActiveStep(parseInt(activeStep) - 1)
        } else if (which === 'next' && activeStep < 4) {
            setLocalStorageActiveStep(parseInt(activeStep) + 1)
        }
    }

    return (
        <div id="steps-overlay" className={`${styles.stepsOverlay} ${stepContent ? styles.stepsOverlayActive : ''}`} data-scroll data-scroll-sticky data-scroll-target="main">
            <div className="flex flex-col h-full">
                <Close clickEvent={closeOverlay} />
                {stepContent &&
                    <>
                        <div className="grid grid-cols-4 mt-2_22">
                            <div className={styles.stepsOverlayContent}>
                                <span>{activeStep ?? '0'}/4</span>
                                <span className={styles.stepsOverlayContentTitle}>{stepContent.title}</span>
                                <p>{stepContent.content}</p>
                            </div>
                        </div>
                        <div className={styles.stepsOverlayContentImgs}>
                            <div className={styles.stepsOverlayContentImgsImg}>
                                <Image src={stepContent.srcFirst} layout="fill" objectFit="cover" objectPosition="center" />
                            </div>
                            <div className={styles.stepsOverlayContentImgsImg}>
                                <Image src={stepContent.srcSecond} layout="fill" objectFit="cover" objectPosition="center" />
                            </div>
                        </div>
                    </>
                }
                <div className={styles.stepsOverlayFooter}>
                    <ButtonArrow {... buttonArrowPreviousArgs} clickEvent={changeStep} clickEventArg={'previous'} />
                    <ButtonArrow {... buttonArrowNextArgs} clickEvent={changeStep} clickEventArg={'next'} />
                </div>
            </div>
        </div>
    )
}