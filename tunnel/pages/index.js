import styles from '../styles/Home.module.css'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer';
export default function Home() {
  return (
    <div className='h-100'>
      <NavBar/>
      <Gallery/>
      <Footer/>
    </div>
  )
}
