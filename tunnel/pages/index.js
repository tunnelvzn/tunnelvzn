import styles from '../styles/Home.module.scss'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Credits from '../pages/Credits'
import Footer from '../comps/Footer';
import StoryContent from './StoryContent'
import React from "react";
import Head from 'next/head'
import { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../comps/Global/useGlobalContext'
import About from './About/About';
import { Icon } from '@iconify/react';

export default function Home() {
  //...
  const {
    intro, 
    setIntro,
    audio,
    route,
    setRoute
  } = 
  useContext(GlobalContext);
  useEffect(()=> {
    console.log('intro', intro)
  }, [])
  
  let song = audio

  let introContent = (
      <div className={ `${styles.introContent} d-flex flex-column justify-content-center` }>
          <Head>
            <title>Tunnel_vzn</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
        <h5 className={ `${styles.introHeader} ${styles.introText} text-center` }> Tunnel_vzn </h5>
        <h5 className={ `${styles.introText} text-center` }> Storytelling based on UW student experiences</h5>
        <div className={styles.startBtn} onClick={() => {
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
    <>
    {/* reference: https://www.npmjs.com/package/react-audio-player */}
    
      <NavBar/>
      <div className={`h-100 ${styles.home} d-flex flex-column justify-content-center`}>
        <Head>
          <title>Tunnel_vzn | Home</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        
        {route == '/' && <Gallery />}
        {route == '/About' && <About />}
        {route == '/Credits' && <Credits/>}
        {route == '/StoryContent' && <StoryContent/>}
        
        <Footer />
      </div>
    </>
  )
  return (
    <>
    {
      intro ? afterIntro: introContent 
    }
    </>
   
  )
}
