import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Logo } from 'UI/Logos'

import styles from './Nav.module.scss'

export default function Nav() {
    // const [show, setShow] = useState(true)
    // const [lastScrollY, setLastScrollY] = useState(0)
  
    // const controlNavbar = () => {
    //     if (typeof document !== 'undefined') { 
    //         if (document.scrollY > lastScrollY) {
    //             setShow(false)
    //         } else {
    //             setShow(true)
    //         }
            
    //         setLastScrollY(document.scrollY)
    //     }
    // }
  
    // useEffect(() => {
    //     if (typeof document !== 'undefined') {
    //         document.addEventListener('scroll', controlNavbar)

    //         return () => {
    //             document.removeEventListener('scroll', controlNavbar)
    //         }
    //     }
    // }, [lastScrollY])

    return (
        <nav id="nav" className={`${styles.nav}`}>
            <Link href={`/`} passHref>
                <a className={styles.navLogo}>
                    <Logo color="green_dark" />
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