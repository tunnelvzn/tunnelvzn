import styles from '../styles/Home.module.scss'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer';
import React from "react";
import Head from 'next/head'
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
export default function Home() {
  //...

  const [intro, setIntro] = useState(true)

  // let returnComponent = intro? :
  let introContent = (
    <div className={ `${styles.introContent} d-flex flex-column justify-content-center` }>
      <h5 className={ `${styles.introHeader} text-center` }> Tunnel_vzn </h5>
      <h5 className='text-center'> Story based on UW student experience</h5>
      <div className={styles.startBtn} onClick={() => {setIntro(false)}}>
        Start the experience
      </div>
    </div>
  )

  let afterIntro = (
    <>
    <NavBar />
      <div className={`h-100 ${styles.home} d-flex flex-column justify-content-center`}>

        {/* reference: https://www.npmjs.com/package/react-audio-player */}
        <ReactAudioPlayer
          src={`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`}
          autoPlay
        />

        {/* <audio src={`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`} controls autoPlay/> */}
        <Head>
          <title>Tunnel_vzn | Home</title>
        </Head>
        <div onClick={()=> {setIntro(true)}}>back</div>
        <Gallery />
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
