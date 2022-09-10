import styles from '../styles/Home.module.css'
import Intro from './Intro'
import Header from './Header'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Gallery/>
    </div>
  )
}
