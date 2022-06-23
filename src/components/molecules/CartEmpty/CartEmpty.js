import { Button } from '@UI/Buttons'
import { EmptyCart } from '@UI/Icons'

const buttonArgs = {
    url: '/abonnements',
    title: "Découvrir nos abonnements",
    isLink: true
}

import styles from './CartEmpty.module.scss'

export default function CartEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center w-50">
            <div className={styles.icon}>
                <EmptyCart />
            </div>
            <span className="title--l mt-3_33 mb-2_22">Votre panier est vide</span>
            <Button {...buttonArgs} />
        </div>
    )
}