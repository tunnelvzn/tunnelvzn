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
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function Home() {
  const {
    intro,
    setIntro,
    audio,
    route,
    setRoute,
    loginModal,
    setLoginModal
  } =
    useContext(GlobalContext);

  const userSignin = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ": ", errorMessage)
      });
  }

  const userSignup = () => {
    const email = document.getElementById('email_new').value
    const password = document.getElementById('password_new').value
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ": ", errorMessage)
        // ..
      });
  }

  let song = audio
  let modalRet = (
    <div className={`${styles.loginModal}`}>
      <div className='container'>
        <button className='btn btn-secondary btn-small' onClick={() => setLoginModal(!loginModal)}> Back</button>
        <div className='row'>
          <div className='col-6 text-center mt-5'>
            <h1 className='mt-5'>Tunnel_vzn</h1>
            <h5>Stories await :D</h5>
          </div>

          <div className='col-6 mt-5 pb-5'>
            <div className='card p-3 d-none' id='signupCard'>
              <h3 className='text-center mb-5'> Join Tunnel_vzn</h3>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Your name:</span>
                </div>
                <input id="username" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
                </div>
                <input id="email_new" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                </div>
                <input id='password_new' type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>

              <button className="ms-4 me-4 mb-3 mt-3 p-1" onClick={() => { userSignup() }}>Sign up</button>
              <small className='text-center'>Already have an account? <button onClick={() => {
                document.getElementById('loginCard').classList.remove('d-none')
                document.getElementById('signupCard').classList.add('d-none')
              }}> Log in</button></small>
            </div>

            <div className='card p-3' id='loginCard'>
              <h3 className='text-center mb-5'> Login to Tunnel_vzn</h3>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
                </div>
                <input id="email" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                </div>
                <input id='password' type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>

              <button className="ms-4 me-4 mb-3 mt-3 p-1" onClick={() => { userSignin() }}>Log in</button>
              <small className='text-center'>don't have an account? <button onClick={() => {
                document.getElementById('loginCard').classList.add('d-none')
                document.getElementById('signupCard').classList.remove('d-none')
              }}> Sign up</button></small>
            </div>
          </div>
        </div>
      </div>
    </div>)


  let introContent = (
    <div className={`${styles.introContent} d-flex flex-column justify-content-center`}>
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

  let afterIntro = (
    <div className={styles.baseLayoutContainer}>
      {/* reference: https://www.npmjs.com/package/react-audio-player */}

      <a className={styles.skipNavigationLink} href="#mainContent">
        Skip Navigation
      </a>
      <NavBar />
      {
        loginModal && modalRet
      }

      <div id="mainContent" className={`${styles.home} ${styles.mainElement} d-flex flex-column justify-content-center`} tabIndex={-1}>
        {route == '/' && <Gallery />}
        {route == '/About' && <About />}
        {route == '/Credits' && <Credits />}
        {route == '/Updates' && <Updates />}

        {/* <Footer/> */}

        {route == '/StoryContent' && <StoryContent />}
      </div>
    </div>
  )

  return (
    <>
      {
        intro ? afterIntro : introContent
      }
    </>

  )
}
