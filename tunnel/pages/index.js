import styles from '../styles/Home.module.css'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer';
import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-100'>
      <NavBar/>
      <Head>
        <title>Tunnel_vzn | Home</title>
      </Head>
      <Gallery/>
      <Footer/>
    </div>
  )
}
