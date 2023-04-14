import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/js/bootstrap.js";
import { GlobalProvider } from '../comps/Global/useGlobalContext'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tunnel_vzn | Storytelling</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="Tunnel_vzn" />
        <meta name="title" content="Tunnel_vzn"></meta>
        <meta name="description" content="A student ran organization telling stories inspired by the experiences of University of Washington students." />
        <meta name="keywords" content="storytelling" />

        {/* Open Graph Link Preview */}
        <meta name='title' property="og:title" content= "Tunnel_vzn" />
        <meta name='image' property="og:image" content= "https://i.postimg.cc/wvVMnjW9/metaimg.png" />
        <meta name='type' property="og:type" content='website' />
        <meta name='description' property="og:description" content= "A student ran organization telling stories inspired by the experiences of University of Washington students." />
        <meta name='url' property="og:url" content= "www.tunnelvzn.org" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="Tunnel_vzn" />
        <meta name="twitter:description" content="A student ran organization telling stories inspired by the experiences of University of Washington students." />
        <meta name="twitter:image" content="https://i.postimg.cc/wvVMnjW9/metaimg.png" />
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
      <Analytics />
    </>
  )
}

export default MyApp
