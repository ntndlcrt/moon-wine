import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import AgeConfirm from '@molecules/AgeConfirm'
import Nav from '@molecules/Nav'
import Cart from '@molecules/Cart'
import Footer from '@molecules/Footer'
import StepsOverlay from '@molecules/StepsOverlay'
import { CartProvider } from '@context/Store'

import '@styles/app.scss'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const [isGallery, setIsGallery] = useState(false)

    useEffect(() => {
        let scroll

        import('locomotive-scroll').then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
                getDirection: true
            })

            scroll.on('scroll', (instance) => {
                document.documentElement.setAttribute('data-direction', instance.direction)
            })
        })
        
        window.addEventListener('DOMContentLoaded', () => {
            scroll.update()
        })
        
        window.addEventListener('resize', () => {
            scroll.update()
        })

        window.addEventListener('beforeunload', () => {
            localStorage.setItem('ageConfirmed', false)
            localStorage.setItem('openCart', false)
        })

        return () => {
            if (scroll) scroll.destroy()
        }
    })

    useEffect(() => {
        router.asPath === '/galerie' ? setIsGallery(true) : setIsGallery(false)
    })

    return (
        <CartProvider>
            <AgeConfirm />
            {isGallery !== true &&
                <Nav />
            }
            <StepsOverlay />
            <Cart />
            <main id="main" className="bg-beige" data-scroll-container>
                <Component {...pageProps} />
                {isGallery !== true &&
                    <Footer />
                }
            </main>
        </CartProvider>
    )
}