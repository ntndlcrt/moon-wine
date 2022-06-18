import 'styles/app.scss'

export default function App({ Component, pageProps }) {
    if (typeof window === 'undefined') {
        return <></>
    } else {
        return <Component {...pageProps} />
    }
}