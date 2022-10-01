import styles from '../styles/Home.module.css'
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

  const [url, setUrl] = useState('')

  return (
    <div className={`h-100 ${styles.home} d-flex flex-column justify-content-between`}>

{/* https://www.npmjs.com/package/react-audio-player */}
      <ReactAudioPlayer
        src={`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`}
        autoPlay
        controls
      />
      
      {/* <audio src={`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`} controls autoPlay/> */}
      <NavBar />
      <Head>
        <title>Tunnel_vzn | Home</title>
      </Head>
      <Gallery />
      <Footer />
    </div>
  )
}
