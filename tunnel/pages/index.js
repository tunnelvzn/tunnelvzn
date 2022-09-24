import styles from '../styles/Home.module.css'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer';
import Head from 'next/head'
import Sound from 'react-sound'
export default function Home() {
  
  return (
    <div className={`h-100 ${styles.home} d-flex flex-column justify-content-between`}>
      <Sound
      url="cool_sound.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
      <NavBar/>
      <Head>
        <title>Tunnel_vzn | Home</title>
      </Head>
      <Gallery/>
      <Footer/>
    </div>
  )
}
