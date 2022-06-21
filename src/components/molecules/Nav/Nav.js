import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Logo } from 'UI/Logos'

import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <nav id="nav" className={`${styles.nav}`}>
            <Link href={`/`} passHref>
                <a className={styles.navLogo}>
                    <Logo color="gray_darkest" />
                </a>
            </Link>
            <div className={styles.navLinks}>
                <Link href={`/abonnements`}>
                    <a>Abonnements</a>
                </Link>
                <Link href={`/boxes`}>
                    <a>Boxes</a>
                </Link>
                <Link href={`/cave-exclusive`}>
                    <a>Cave exclusive</a>
                </Link>
                <Link href={`/cartes-cadeaux`}>
                    <a>Cartes cadeaux</a>
                </Link>
            </div>
            <div className={styles.navIcons}></div>
        </nav>
    )
}