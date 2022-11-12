import styles from '../styles/Home.module.scss'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer';
import React from "react";
import Head from 'next/head'
import { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../comps/Global/useGlobalContext'
export default function Home() {
  //...
  const {
    intro, 
    setIntro,
    audio
  } = 
  useContext(GlobalContext);
  console.log(intro)
  let song = audio
  // let returnComponent = intro? :
  let introContent = (
    <div className={ `${styles.introContent} d-flex flex-column justify-content-center` }>
      <h5 className={ `${styles.introHeader} text-center` }> Tunnel_vzn </h5>
      <h5 className='text-center'> Story based on UW student experience</h5>
      <div className={styles.startBtn} onClick={() => {setIntro(false); song.play()}}>
        Start the experience
      </div>
    </div>
  )

  let afterIntro = (
    <>
    {/* reference: https://www.npmjs.com/package/react-audio-player */}
    
      <NavBar/>
      <div className={`h-100 ${styles.home} d-flex flex-column justify-content-center`}>

        {/* <audio src={`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`} controls autoPlay/> */}
        <Head>
          <title>Tunnel_vzn | Home</title>
        </Head>
        
        <Gallery />
        <btn onClick={()=> {setIntro(true)}}>back</btn>
        <Footer />
      </div>
    </>
  )
  return (
    <>
    {intro ? introContent : afterIntro}
    </>
   
  )
}
