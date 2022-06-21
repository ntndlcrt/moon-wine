import { useEffect } from 'react'

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

        return () => {
            if (scroll) scroll.destroy()
        }
    })

    if (typeof window === 'undefined') {
        return <></>
    } else {
        return (
            <body id="body">
                <Component {...pageProps} />
            </body>
        )
    }
}