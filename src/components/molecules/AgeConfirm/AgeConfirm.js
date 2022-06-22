import { useState } from 'react'

import { Button } from '@UI/Buttons'
import { Logo } from '@UI/Logos'
import { PatternBackground } from '@UI/Patterns'

import styles from './AgeConfirm.module.scss'

function confirmAge() {
    localStorage.setItem('ageConfirmed', true)
    window.dispatchEvent(new Event('storage'))
}

const buttonArgs = {
    title: 'Accéder au site',
    isLink: false,
    color: 'beige',
    clickEvent: confirmAge
}

export default function AgeConfirm() {
    const [hide, setHide] = useState(false)

    if(typeof window !== 'undefined') {
        window.addEventListener('storage', () => {
            setHide(localStorage.getItem('ageConfirmed') ?? false)
        })
    }

    return (
        <div className={`${styles.ageConfirm} ${hide ? styles.ageConfirmHidden : ''}`}>
            <div className={styles.ageConfirmLogo}>
                <Logo color="beige" />
            </div>
            <div className={styles.ageConfirmContent}>
                <span className="title--xl mb-2_22">Je certifie que j’ai  L’ÂGE<br/>LÉGAL REQUIS POUR<br/>CONSOMMER DE L’ALCOOL.</span>
                <div className="flex items-center justify-center">
                    <Button {...buttonArgs} />
                </div>
            </div>
            <div className={styles.ageConfirmPattern}>
                <PatternBackground />
            </div>
            <p className={styles.ageConfirmInfos}>Vous devez avoir l’âge légal de votre pays, province ou territoire pour accéder à ce site.<br/>L’abus d’alcool est dangereux pour la santé, à consommer avec modération.</p>
        </div>
    )
}