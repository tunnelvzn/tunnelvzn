import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/js/bootstrap.js";
import { GlobalProvider } from '../comps/Global/useGlobalContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tunnel_vzn | Storytelling</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="Tunnel_vzn" />
        <meta name="description" content="A student ran organization telling stories inspired by the experiences of University of Washington students." />
        <meta name="keywords" content="storytelling" />

        <meta property="og:title" content="Tunnel_vzn - Storytelling" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://drive.google.com/file/d/1USbIDfD-YuXqWgQKf0Tba9cWRG_dOK1E/view?usp=share_link" />
        <meta property="og:url" content="https://www.tunnelvzn.org/"/>
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}

export default MyApp
