import Image from 'next/image'
import { useAddToCartContext } from '@context/Store'
import { useState, useEffect } from 'react'

import styles from './ProductForm.module.scss'

export default function ProductForm({bgColor, textColor, price}) {
    const addToCart = useAddToCartContext()
    const [quantity, setQuantity] = useState(1)

    async function handleAddToCart() {
        if (quantity !== '') {
            addToCart({
                productTitle: title,
                productHandle: handle,
                productImage: imgPng,
                variantId,
                price: price,
                variantQuantity: quantity
            })
        }
    }

    return (
        <section className={`relative py-13 ${bgColor} ${textColor}`} data-scroll-section>
            <div className={styles.productFormCard}>
                <div className={styles.productFormCardVisual}>
                    <div className={styles.productFormCardVisualImage}>
                        <Image src="/img/png/bottles/amore.png" layout="fill" objectFit="contain" objectPosition="center" />
                    </div>
                </div>
                <span className="mt-3_33 uppercase font-600 text-0_83 mb-1_25">Prix unitaire (75CL)</span>
                <div className="title--l mb-1_1">{price}€</div>
                <span className="uppercase font-600 text-0_83 mb-1_25">Combien en voulez-vous ?</span>
                <div className={styles.productFormCardInput}>
                    <span className={styles.productFormCardInputLess} onClick={() => {setQuantity(quantity-1)}}>-</span>
                    <input type="number" value={quantity} className={styles.productFormCardInputNumber} onChange={(e) => {setQuantity(e.value)}} />
                    <span className={styles.productFormCardInputMore} onClick={() => {setQuantity(quantity+1)}}>+</span>
                </div>
            </div>
        </section>
    )
}