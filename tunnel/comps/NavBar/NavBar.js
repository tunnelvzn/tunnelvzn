import styles from './NavBar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Subnav from './Subnav'
import { useState, useContext } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../Global/useGlobalContext'
// npm install hamburger-react

// content at the top of the page

const Navbar = (props) => {
    const {
        intro, 
        setIntro,
        pause, 
        setPause,
        audio,
        setRoute,
        nav, 
        setNav,
        user,
        auth,
        makeNoise
      } = 
      useContext(GlobalContext);
      console.log("intro: ",intro)
      let song = audio

      console.log('from nav', auth.currentUser)
    // const [nav, setNav] = useState(false)
    const [musicimgSrc, setMusicimgSrc] = useState('/icons/volumeYes.svg')
    
    function toggleMenu() {
        // console.log('toggle menu', nav)
        setNav(!nav)
        document.getElementById('openMenu').classList.toggle('d-none')
        document.getElementById('closeMenu').classList.toggle('d-none')
    }

    function toggleMusic() {
        makeNoise()
        if (pause) {
            console.log('play')
            song.play()
            setMusicimgSrc('/icons/volumeYes.svg')
        } else {
            console.log('pause')
            song.pause()
            setMusicimgSrc('/icons/volumeLightNo.svg')
        }
        setPause(!pause)
    }
    // auth.currentUser.reload()
    console.log('from nav', auth.currentUser)
    return (
        <>  
            <div className= {`${styles.topUiBackground} w-100 d-flex text-center justify-content-between`}>
                <div role="button" aria-label="sound toggle" className={styles.soundButton} onClick={()=> {toggleMusic()}}>
                    <Image src={musicimgSrc} height={35} width={35}/>
                </div>
                <h5 className={`${styles.logoFont} m-2`}>
                    <section onClick={() => 
                        {
                            setRoute('/')
                            console.log(nav)
                            const allTags = document.getElementsByClassName('general-nav-tags')
                            for (let i = 0; i< allTags.length; i++ ) {
                                allTags[i].classList.remove(`${styles.active}`)
                            }
                            document.getElementById('home-tag').classList.add(`${styles.active}`)
                            setNav(false)
                        }}>
                        <a role="link" aria-label="site name" className={styles.logoText}>Tunnel_vzn</a>
                    </section>
                </h5>
                <div className={styles.menuButton} onClick={()=> { makeNoise()}}>
                    <Hamburger label="Show menu" hideOutline={false} toggled={nav} toggle={setNav} color="#212121" duration={0.4} size={40} direction="left" distance="sm" easing="ease-in" />
                </div>
            </div>
            <Subnav show={nav} />
        </>
    );
}

export default Navbar;