import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
