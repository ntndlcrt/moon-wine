import { useEffect } from 'react'

import AgeConfirm from '@molecules/AgeConfirm'
import Nav from '@molecules/Nav'
import Footer from '@molecules/Footer'
import StepsOverlay from '@molecules/StepsOverlay'

import '@styles/app.scss'

export default function App({ Component, pageProps }) {
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

        return () => {
            if (scroll) scroll.destroy()
        }
    })

    return (
        <>
            <AgeConfirm />
            <Nav />
            <StepsOverlay />
            <main id="main" className="bg-beige" data-scroll-container>
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    )
}