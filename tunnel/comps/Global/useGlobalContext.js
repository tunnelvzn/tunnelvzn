import React, { createContext, useReducer, useEffect, useState, onMount } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent  } from "firebase/analytics";

const initialState = {    
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyD4sh7zqBRP7FAholgOLkTL6f6dQ12pZL0",
        authDomain: "tunnelvzn.firebaseapp.com",
        projectId: "tunnelvzn",
        storageBucket: "tunnelvzn.appspot.com",
        messagingSenderId: "397365732589",
        appId: "1:397365732589:web:f674f12fa74997496b18e4",
        measurementId: "G-5F86FDL6R7"
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const auth = getAuth(app);
      
    const [user, setUser] = useState({})
    const [route, setRoute] = useState( '/')
    const [intro, setIntro] = useState(true)
    const [storyName, setStoryName] = useState('')
    const [nav, setNav] = useState(false)
    const [mainNav, setMainNav] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    useEffect(() => {
        const sessionIntro = sessionStorage.getItem('intro')
        const sessionRoute = sessionStorage.getItem('route')
        console.log(sessionIntro, sessionRoute)
        setRoute(sessionRoute == null? sessionRoute : '/')
        setIntro(sessionIntro == null? sessionIntro : true)
        setMainNav(sessionIntro == null? false : true)
        console.log(mainNav)
    }, intro)

    const [pause, setPause] = useState(false)
    // const [audio] = useState(typeof Audio !== "undefined" && new Audio(`https://drive.google.com/u/0/uc?id=1xFWLoxKWYk6Ub8reLvzVg89a-p__Cvzl&export=download`));
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(`https://drive.usercontent.google.com/u/1/uc?id=1xFWLoxKWYk6Ub8reLvzVg89a-p__Cvzl&export=download`));
    let click;
    if(typeof Audio != "undefined") {
        click  = new Audio('https://drive.google.com/u/0/uc?id=1uW1Pdf2vdZ-jc8W0Rvrx4Nvi8Q8No2Ms&export=download');
      }
    const makeNoise = () => {
        click.play()
    }
   return(
    <GlobalContext.Provider value = {{intro, setIntro, audio, pause, setPause, route, setRoute, nav, setNav, storyName, setStoryName, db, auth,loginModal, setLoginModal,user, setUser, makeNoise, mainNav, setMainNav}}> 
        {children} 
    </GlobalContext.Provider>
   )
}