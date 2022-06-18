import Link from 'next/link'
import { useState, useEffect } from 'react'

import { LogoBeige } from 'UI/Logos'

import styles from './Nav.module.scss'

export default function Nav() {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
  
    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
                setShow(false)
            } else {
                setShow(true)
            }
            
            setLastScrollY(window.scrollY)
        }
    }
  
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)

            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])

    return (
        <nav className={`${styles.nav} ${show ? '' : styles.navHidden}`}>
            <Link href={`/`} passHref>
                <a className={styles.navLogo}>
                    <LogoBeige />
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