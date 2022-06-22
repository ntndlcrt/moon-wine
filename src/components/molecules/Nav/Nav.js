import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Logo } from '@UI/Logos'

import styles from './Nav.module.scss'

export default function Nav() {
    const [showProducts, setShowProducts] = useState(false)

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
                <span onClick={() => {setShowProducts(!showProducts)}}>Produits</span>
                <Link href={`/notre-histoire`}>
                    <a>Notre histoire</a>
                </Link>
                <Link href={`/galerie`}>
                    <a>Galerie d'art</a>
                </Link>
                <Link href={`/blog`}>
                    <a>Blog</a>
                </Link>
            </div>
            <div className={styles.navIcons}></div>
            <div className={styles.navProducts} data-show={showProducts}>
                TEST
            </div>
        </nav>
    )
}