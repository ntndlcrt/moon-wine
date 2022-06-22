import { LogoAB } from '@UI/Logos'

import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer id="footer" data-scroll-section>
            <div className={styles.footer} data-scroll data-scroll-direction="vertical" data-scroll-speed="-8" data-scroll-target="#footer" data-scroll-position="bottom">
                <div className={styles.footerContent}>
                    <div className={styles.footerContentContact}>
                        <a href="mailto:contact@moonwine.fr" className="text-2_78">contact@moonwine.fr</a>
                    </div>
                    <div className={styles.footerContentLinksProducts}></div>
                    <div className={styles.footerContentLinksAbout}></div>
                    <div className={styles.footerContentLabel}>
                        <LogoAB />
                    </div>
                </div>
            </div>
        </footer>
    )
}