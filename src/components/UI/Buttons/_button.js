import Link from 'next/link'

import styles from './Button.module.scss'

export default function Button(args) {
    const {
        icon,
        state,
        color,
        url,
        title,
        isLink,
        clickEvent,
        fulLWidth
    } = args
    
    if(url) {
        if(isLink) {
            return (
                <Link href={url} passhref>
                    <a className={`${styles.button} ${color === 'beige' ? styles.beige : ''}`}>{title}</a>
                </Link>
            )
        }
    } else {
        return (
            <span className={`${styles.button} ${color === 'beige' ? styles.beige : ''} ${fulLWidth ? 'w-full text-center' : 'w-content' }`} onClick={clickEvent ?? ''}>{title}</span>
        )
    }
}