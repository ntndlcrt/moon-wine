import Link from 'next/link'

import { LogoAB, LogoWide } from '@UI/Logos'

import styles from './Footer.module.scss'

const linksProducts = [
    {
        title: 'Abonnements',
        url: '/abonnements'
    },
    {
        title: 'Boxs à l\'unité',
        url: '/boxs'
    },
    {
        title: 'La Cave Exclusive',
        url: '/cave-exclusive'
    },
    {
        title: 'Cartes cadeaux',
        url: '/cartes-cadeaux'
    },
]

const linksAbout = [
    {
        title: 'Notre histoire',
        url: '/notre-histoire'
    },
    {
        title: 'Galerie d\'art',
        url: '/galerie'
    },
    {
        title: 'Blog',
        url: '/blog'
    },
    {
        title: 'FAQs',
        url: '/faq'
    },
]

export default function Footer() {
    return (
        <footer id="footer" data-scroll-section>
            <div className={styles.footer} data-scroll data-scroll-direction="vertical" data-scroll-speed="-8" data-scroll-target="#footer" data-scroll-position="bottom">
                <div className={styles.footerContent}>
                    <div className={styles.footerContentContact}>
                        <span className="font-500 mb-0_7 text-0_83 uppercase">Écrivez-nous</span>
                        <a href="mailto:contact@moonwine.fr" className="text-2_22 mb-2_77 leading-1_2">contact@moonwine.fr</a>
                        <span className="font-500 mb-0_7 text-0_83 uppercase">Rencontrez-nous</span>
                        <p className="text-2_22 mb-3_33 leading-1_2">17 rue du Sec Arembault<br/>59800 Lille, France</p>
                        <p className="opacity-50 text-0_83">L’abus d’alcool est dangereux pour la santé,<br/>à consommer avec modération.</p>
                    </div>
                    <div className={styles.footerContentLinks}>
                        <div className="flex flex-col">
                            {linksProducts.map(link => {
                                return (
                                    <Link key={`footer-link-${link.url}`} href={link.url} passHref>
                                        <a className="mb-1 text-1_18 leading-1_1">{link.title}</a>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex flex-col">
                            {linksAbout.map(link => {
                                return (
                                    <Link key={`footer-link-${link.url}`} href={link.url} passHref>
                                        <a className="mb-1 text-1_18 leading-1_1">{link.title}</a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.footerContentLabel}>
                        <LogoAB />
                    </div>
                </div>
                <div className={styles.footerFooter}>
                    <div className={styles.footerFooterLogo}>
                        <LogoWide />
                    </div>
                    <div className={styles.footerFooterCopyright}>
                        <div className="flex items-center">
                            <Link href='/mentions-legales' passHref>
                                <a className="mr-1_67">Mentions légales</a>
                            </Link>
                            <Link href='/politique-de-confidentialite' passHref>
                                <a className="mr-1_67">Politique de confidentialité</a>
                            </Link>
                            <Link href='/cgv-cgu' passHref>
                                <a>CGV & CGU</a>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <Link href='/credits' passHref>
                                <a className="mr-1_67">Crédits</a>
                            </Link>
                            <span>©2022 Moonwine</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}