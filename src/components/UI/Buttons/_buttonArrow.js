import { Arrow } from 'UI/Icons'

import styles from './Button.module.scss'

export default function ButtonArrow(args) {
    const {
        color,
        side,
        title,
        disabled,
        clickEvent,
        clickEventArg
    } = args

    return (
        <span
            className={`${styles.buttonArrow} ${side === 'left' ? styles.buttonArrowLeft : styles.buttonArrowRight} text-${color} ${disabled ? styles.buttonArrowDisabled : ''}`}
            onClick={() => {clickEvent(clickEventArg)}}
        >
            <Arrow color={color} />
            {title}
        </span>
    )
}