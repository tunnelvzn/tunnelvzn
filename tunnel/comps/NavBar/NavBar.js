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
        setNav
      } = 
      useContext(GlobalContext);
      console.log("intro: ",intro)
      let song = audio
    // const [nav, setNav] = useState(false)
    const [musicimgSrc, setMusicimgSrc] = useState('/icons/volumeYes.svg')
    
    function toggleMenu() {
        // console.log('toggle menu', nav)
        setNav(!nav)
        document.getElementById('openMenu').classList.toggle('d-none')
        document.getElementById('closeMenu').classList.toggle('d-none')
    }

    function toggleMusic() {
        console.log(pause)
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
    return (
        <>
            <div className= {`${styles.topUiBackground} w-100 d-flex text-center justify-content-between`}>
                <div role="button" aria-label="sound toggle" tabindex="0" className={styles.soundButton} onClick={()=> {toggleMusic()}}>
                    <Image src={musicimgSrc} height={35} width={35}/>
                </div>
                <h5 className={`${styles.logoFont} m-2`}>
                    <div onClick={() => 
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
                        <a role="link" aria-label="site name" tabindex="0">Tunnel_vzn</a>
                    </div>
                </h5>
                <div className={styles.menuButton}>
                    <Hamburger label="Show menu" hideOutline={false} toggled={nav} toggle={setNav} color="#000000" duration={0.4} size={40} direction="left" distance="sm" easing="ease-in" />
                </div>
            </div>
            <Subnav show={nav} />
        </>
    );
}

export default Navbar;