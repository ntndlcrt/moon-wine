import '@styles/app.scss'

export default function App({ Component, pageProps }) {
    let oldValue = 0
    let newValue = 0

    if(typeof window !== 'undefined') {
        window.addEventListener('scroll', (e) => {
            newValue = window.pageYOffset

            if (oldValue < newValue) {
                document.querySelector('html').setAttribute('data-direction', 'down')
            } else if (oldValue > newValue) {
                document.querySelector('html').setAttribute('data-direction', 'up')
            }

            oldValue = newValue
        })
    }

    if (typeof window === 'undefined') {
        return <></>
    } else {
        return (
            <body>
                <Component {...pageProps} />
            </body>
        )
    }
}