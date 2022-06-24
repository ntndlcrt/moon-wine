import Image from 'next/image'
import { useAddToCartContext } from '@context/Store'
import { useState } from 'react'
import Ticker from 'react-ticker'

import styles from './ProductForm.module.scss'

export default function ProductForm({bgColor, textColor, price, title, handle, imgPng, variantId}) {
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
        <section className={`relative py-16_8 ${bgColor} ${textColor}`} data-scroll-section>
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
                    <span className={styles.productFormCardInputLess} onClick={() => {quantity > 1 ? setQuantity(quantity-1) : ''}}>-</span>
                    <span className={styles.productFormCardInputNumber}>{quantity}</span>
                    <span className={styles.productFormCardInputMore} onClick={() => {setQuantity(quantity+1)}}>+</span>
                </div>
                <span
                    className="
                        uppercase
                        text-red
                        rounded-full
                        bg-beige
                        text-0_83
                        px-3_33
                        py-1_67
                        font-600
                        block
                        cursor-pointer
                        mt-3_33
                    "

                    onClick={handleAddToCart}
                >
                    Ajouter au panier
                </span>
            </div>
            <Ticker speed={20}>
                    {({index}) => (
                        <>
                            <span className="text-24_33 font-molgak mr-3_33 leading-1 whitespace-nowrap w-content translate-x-3_33">Natural wine club</span>
                        </>
                    )}
            </Ticker>
        </section>
    )
}