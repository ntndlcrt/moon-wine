import { useState } from 'react'

import { Close } from '@UI/Icons'
import CartEmpty from '@molecules/CartEmpty'

import styles from './Cart.module.scss'

export default function Cart() {
    const [openCart, setOpenCart] = useState(false)
    const [cart, setCart] = useState(null)

    function setLocalStorageOpenCart(index) {
        localStorage.setItem('openCart', index)
        window.dispatchEvent(new Event('storage'))
    }

    if(typeof window !== 'undefined') {
        window.addEventListener('storage', () => {
            setOpenCart(localStorage.getItem('openCart') === 'true' ? true : false)
        })
    }

    function closeCart() {
        setLocalStorageOpenCart(false)
        document.documentElement.setAttribute('data-hide-nav', 'false')
    }

    return (
        <div className={`${styles.cart} ${openCart ? styles.cartOpened : ''}`}>
            <div className={styles.cartIcon}>
                <Close clickEvent={closeCart} />
            </div>
            {cart
                ?
                    ''
                :
                    <CartEmpty />
            }
        </div>
    )
}