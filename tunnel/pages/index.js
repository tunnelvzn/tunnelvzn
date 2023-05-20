import styles from '../styles/Home.module.scss'
import Intro from './Intro'
import Gallery from './Gallery'
import NavBar from '../comps/NavBar'
import Credits from '../pages/Credits'
import Updates from '../pages/Updates'
import StoryContent from './StoryContent'
import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../comps/Global/useGlobalContext'
import About from './About/About';
import { Icon } from '@iconify/react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc, runTransaction } from "firebase/firestore";
import Feedback from './Feedback'
import { useRouter } from 'next/router';
import Button from '/comps/Button';

const delay = ms => new Promise(res => setTimeout(res, ms));
export default function Home() {
  const router = useRouter();
  const {
    intro,
    setIntro,
    audio,
    route,
    setRoute,
    loginModal,
    setLoginModal,
    user,
    setUser,
    db,
    setMainNav
  } =
    useContext(GlobalContext);
  const [initialLoad, setInitialLoad] = useState(true)
  const auth = getAuth();

  const currentRoute = router.pathname;
  const CLIENT_ID = '397365732589-h80pt9uicbepf4ttimn2sjupfc9hbc4j.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyD4sh7zqBRP7FAholgOLkTL6f6dQ12pZL0';

  const userSignin = () => {

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setLoginModal(false)
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ": ", errorMessage)
      });


  }

  const userSignup = (event) => {
    const email = document.getElementById('email_new').value
    const password = document.getElementById('password_new').value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setUserDb(user)
        setLoginModal(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ": ", errorMessage)
        // ..
      });
    let name = document.getElementById('username').value
    console.log('update display name:', name)
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: ''
    }).then(() => {
      console.log('profile updated')
      auth.currentUser.reload()
      console.log('reload user')
      setUser(auth.currentUser)
      console.log('user:', user)
    }).catch((error) => {
      console.log(error)
    });


  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // console.log(user)
      // getUserDb(user)
    } else {
      console.log('user not logged in')
    }
  });

  // const getUserDb = async(user) => {
  // const docRef = doc(db, "users", user.id);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {

  //   console.log("No such document!, create new");
  // }

  // }

  const setUserDb = async (user) => {
    console.log(user)
    console.log('set db')
    await setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      liked: []
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

              <button className="ms-4 me-4 mb-3 mt-3 p-1" onClick={(event) => { event.preventDefault(); userSignin() }}>Log in</button>
              <small className='text-center'>don't have an account? <button onClick={() => {
                document.getElementById('loginCard').classList.add('d-none')
                document.getElementById('signupCard').classList.remove('d-none')
              }}> Sign up</button></small>
            </div>
          </div>
        </div>
      </div>
    </div>)
  const yourFunction = async () => {
    await delay(6000);
    setInitialLoad(false)

  };

  yourFunction()

  console.log('load' ,route)
  useEffect(() => {
    if(!intro ) {
      setMainNav(true)
    }
  },[intro])
  let introContent = (
    <div className={`${styles.introContent} d-flex flex-column justify-content-center`}>
      <Head>
        <title>Tunnel_vzn</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className={`${styles.introHeader} text-center`}> Tunnel_vzn </h1>
      <h1 className={`${styles.introSubHeader} text-center`}>Storytelling based on UW student experiences</h1>

      {/* Comment the below line out when you work on the code and uncomment the section stuff */}
      {/* <h1 className={`${styles.introSubHeader} text-center`}>We are currently adding our third story! Check back at 5PM PST!</h1> */}

      <section>
        {!initialLoad &&
          <Button aria-label="enter experience"  center={true} size="large" onClick={() => {
              console.log('click')
              setMainNav(true)
              setIntro(false);
              song.loop = true;
              song.play()
              sessionStorage.setItem("intro", "false");
              sessionStorage.setItem("route", "/");
            }}>
              Start The Experience
          </Button>
        }
        {initialLoad &&
          <section className={styles.center}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
          </section>
        }
      </section>

      <section className={styles.triggerImg}>
        <Image src="/triggerScreen.svg" layout="fill" alt="a pencil sketch of a young man sitting"/>
      </section>
      <section className={`${styles.disclaimer} text-center`}><h5> <Icon icon="game-icons:sound-waves" width="40" height="40" /> This site has sound for better experience.</h5></section>
    </div>
  )

  let afterIntro = (
    <div className={styles.baseLayoutContainer}>
      {/* reference: https://www.npmjs.com/package/react-audio-player */}

      <a className={styles.skipNavigationLink} href="#mainContent">
        Skip Navigation
      </a>
      {
        loginModal && modalRet
      }

      <div id="mainContent" className={`${styles.home} ${styles.mainElement} d-flex flex-column justify-content-center`} tabIndex={-1}>
        {currentRoute == '/' && <Gallery />}
     
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
