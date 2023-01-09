import styles from '../styles/Home.module.scss'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Credits from '../pages/Credits'
import Updates from '../pages/Updates'
import StoryContent from './StoryContent'
import React from "react";
import Head from 'next/head'
import { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../comps/Global/useGlobalContext'
import About from './About/About';
import { Icon } from '@iconify/react';

export default function Home() {
  const {
    intro, 
    setIntro,
    audio,
    route,
    setRoute
  } = 
  useContext(GlobalContext);

  let song = audio

  let introContent = (
      <div className={ `${styles.introContent} d-flex flex-column justify-content-center` }>
          <Head>
            <title>Tunnel_vzn</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
        <h1 className={`${styles.introHeader} text-center`}> Tunnel_vzn </h1>
        <h1 className={`${styles.introSubHeader} text-center`}>Storytelling based on UW student experiences</h1>
        <div role="button" aria-label="enter experience" tabindex="0" className={styles.startBtn} onClick={() => {
          console.log('click')
          setIntro(false); 
          song.loop = true;
          song.play()
          sessionStorage.setItem("intro", "false");
          sessionStorage.setItem("route", "/");
          }}>
          Start The Experience
        </div>
        <div className={`${styles.disclaimer} text-center`}><h5> <Icon icon="game-icons:sound-waves" width="40" height="40" /> Sound on for better experience.</h5></div>
      </div>
  )
  console.log(route, 'route in main')
  let afterIntro = (
    <div className={styles.baseLayoutContainer}>
      {/* reference: https://www.npmjs.com/package/react-audio-player */}
    
      <a className={styles.skipNavigationLink} href="#mainContent">
        Skip Navigation
      </a>
      <NavBar/>
      <div id="mainContent" className={`${styles.home} ${styles.mainElement} d-flex flex-column justify-content-center`} tabIndex={-1}>

        {route == '/' && <Gallery /> }
        {route == '/About' && <About />}
        {route == '/Credits' && <Credits/>}
        {route == '/Updates' && <Updates/>}

        {/* <Footer/> */}

        {route == '/StoryContent' && <StoryContent/>}
      </div>
    </div>
  )
  return (
    <>
    {
      intro ? afterIntro: introContent 
    }
    </>
   
  )
}
