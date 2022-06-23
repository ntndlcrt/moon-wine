import { CheckoutLightBg } from '@UI/Icons'
import { MoonSymbol } from '@UI/Icons'
import { Button } from '@UI/Buttons'

import styles from './SubCard.module.scss'

const buttonArgs = {
    title: 'Ajouter au panier',
    fulLWidth: true
}

export default function SubCard({icon, isDarkBeige, title, content, price, infos, details}) {
    return (
        <div className={`${styles.subCard} ${isDarkBeige ? 'bg-beige_dark' : 'bg-white'}`}>
            <div className={styles.subCardIcon}>
                <MoonSymbol icon={icon} />
            </div>
            <div className="mb-2_22">
                <h2 className="title--l leading-1_2">{title}</h2>
                <p>{content}</p>
            </div>
            <div className="mb-2_22">
                <span className="title--l leading-1_2">{price}</span>
                <p>{infos}</p>
            </div>
            <div className="flex flex-col mb-2_77">
                {details.map((detail, index) => {
                    return (
                        <div key={`detail-${index}`} className="flex items-center mb-1_1">
                            <CheckoutLightBg />
                            <p className="ml-1_1">{detail}</p>
                        </div>
                    )
                })}
            </div>
            <div className="mt-auto w-full">
                <Button {...buttonArgs} />
            </div>
        </div>
    )
}