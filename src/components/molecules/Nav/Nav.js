import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { useCartContext } from '@context/Store'
import { Logo } from '@UI/Logos'
import { Search, User, Bottle } from '@UI/Icons'

import styles from './Nav.module.scss'

export default function Nav() {
    const [showProducts, setShowProducts] = useState(false)
    const [cartItems, setCartItems] = useState(0)
    const cart = useCartContext()[0]
  
    useEffect(() => {
        let numItems = 0
        cart.forEach(item => {
            numItems += item.variantQuantity
        })
        setCartItems(numItems)
    }, [cart])

    function toggleCart() {
        let current = localStorage.getItem('openCart')
        localStorage.setItem('openCart', current === 'true' ? false : true)
        window.dispatchEvent(new Event('storage'))
        document.documentElement.setAttribute('data-hide-nav', 'true')
    }

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
                <span className={showProducts ? 'text-red underline' : ''} onClick={() => {setShowProducts(!showProducts)}}>Produits</span>
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
            <div className={styles.navIcons}>
                <div className={styles.navIconsIcon}>
                    <Search color="gray_darkest" />
                </div>
                <div className={styles.navIconsIcon}>
                    <User color="gray_darkest" />
                </div>
                <div className={styles.navIconsCart} onClick={() => {toggleCart()}}>
                    <Bottle color="gray_darkest" />
                    <span className={styles.navIconsCartCount}>{cartItems}</span>
                </div>
            </div>
            <div className={styles.navProducts} data-show={showProducts}>
                <Link href="/boxs">
                    <div className={styles.navProductsCard} onClick={() => {setShowProducts(false)}}>
                        <div className={styles.navProductsCardImage}>
                            <Image src="/img/png/navProducts/box.png" layout="fill" objectPosition="center" objectFit="contain" />
                        </div>
                        <span className="text-1_18">Boxs à l’unité</span>
                    </div>
                </Link>
                <Link href="/cave-exclusive">
                    <div className={styles.navProductsCard} onClick={() => {setShowProducts(false)}}>
                        <div className={styles.navProductsCardImage}>
                            <Image src="/img/png/navProducts/bottle.png" layout="fill" objectPosition="center" objectFit="contain" />
                        </div>
                        <span className="text-1_18">La Cave Exclusive</span>
                    </div>
                </Link>
                <Link href="/cartes-cadeaux">
                    <div className={styles.navProductsCard} onClick={() => {setShowProducts(false)}}>
                        <div className={styles.navProductsCardImage}>
                            <Image src="/img/png/navProducts/gift.png" layout="fill" objectPosition="center" objectFit="contain" />
                        </div>
                        <span className="text-1_18">Cartes cadeaux</span>
                    </div>
                </Link>
                <div className="bg-red h-full pt-2_77 rounded-1 tex-center">
                    <p className="title--l text-beige text-center">La box du<br/>moment</p>
                </div>
            </div>
        </nav>
    )
}