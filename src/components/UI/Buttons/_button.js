import Link from 'next/link'

import styles from './Button.module.scss'

export default function Button(args) {
    const {
        icon,
        state,
        color,
        url,
        title,
        isLink
    } = args
    
    if(url) {
        if(isLink) {
            return (
                <Link href={url} passhref>
                    <a className={`${styles.button}`}>{title}</a>
                </Link>
            )
        }
    }
}