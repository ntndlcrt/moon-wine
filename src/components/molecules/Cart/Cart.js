import { useState, useEffect } from 'react'

import { Close } from '@UI/Icons'
import CartEmpty from '@molecules/CartEmpty'
import CartItem from '@molecules/CartItem'
import { useCartContext } from '@context/Store'
import { getCartSubtotal } from '@context/utils'
import { Button } from '@UI/Buttons'

import styles from './Cart.module.scss'

export default function Cart() {
    const [openCart, setOpenCart] = useState(false)
    const [cart, checkoutUrl] = useCartContext()
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)

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

    useEffect(() => {
        setCartItems(cart)
        setSubtotal(getCartSubtotal(cart))
    }, [cart])

    return (
        <div className={`${styles.cart} ${openCart ? styles.cartOpened : ''}`}>
            <div className={styles.cartIcon}>
                <Close clickEvent={closeCart} />
            </div>
            {cartItems.length > 0
                ?
                    <div className="pt-2_77 h-full flex flex-col text-center items-center justify-start">
                        <span className="title--l mb-3_33">Panier</span>
                        {cartItems.map(item => {
                            return (
                                <CartItem key={`cart-item-${item.productHandle}`} {...item} />
                            )
                        })}
                        <div className="border-t w-full border-gray_darkest_faded mt-auto pt-1_67">
                            <div className="flex items-center justify-between mb-2_22">
                                <span>Sous-total</span>
                                <span>{subtotal}€</span>
                            </div>
                            <Button url={checkoutUrl} fulLWidth={true} isLink={true} title="Passer la commande" />
                        </div>
                    </div>
                :
                    <CartEmpty />
            }
        </div>
    )
}