import Link from 'next/link'
import Image from 'next/image'

import { useUpdateCartQuantityContext } from '@context/Store'

import styles from './CartItem.module.scss'

export default function CartItem(args) {
    const updateCartQuantity = useUpdateCartQuantityContext()

    const {
        productTitle,
        productHandle,
        productImage,
        variantId,
        price,
        variantQuantity
    } = args

    function updateItem(id, quantity) {
        updateCartQuantity(id, quantity)
    }

    return (
        <div className={styles.cartItem}>
            <div className="w-45 flex items-center">
                <div className={styles.cartItemVisual}>
                    <Image src={JSON.parse(productImage)[0].src} layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <Link href={`/cave-exclusive/${productHandle}`} passHref>
                    <a className="text-1_18">{productTitle}</a>
                </Link>
            </div>
            <div className={styles.cartItemQuantity}>
                <span className={styles.cartItemQuantityToggle} onClick={() => updateItem(variantId, variantQuantity - 1)}>-</span>
                <span className={styles.cartItemQuantityNumber}>{variantQuantity}</span>
                <span className={styles.cartItemQuantityToggle} onClick={() => updateItem(variantId, variantQuantity + 1)}>+</span>
            </div>
            <div className="flex flex-col text-right">
                <span className="text-1_18 mb-0_83">{price}€</span>
                <span className="uppercase font-500 underline text-0_83 cursor-pointer" onClick={() => updateItem(variantId, 0)}>Supprimer</span>
            </div>
        </div>
    )
}