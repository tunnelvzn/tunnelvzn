import React, { createContext, useReducer, useEffect, useState, onMount } from 'react';

const initialState = {
  
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [route, setRoute] = useState( '/')
    const [intro, setIntro] = useState(true)
    useEffect(() => {
        const sessionIntro = sessionStorage.getItem('intro')
        const sessionRoute = sessionStorage.getItem('route')
        setRoute(sessionRoute? sessionRoute : '/')
        setIntro(sessionIntro? sessionIntro: true)
    },[])
    
   
    const [pause, setPause] = useState(false)
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`));
    
   return(
    <GlobalContext.Provider value = {{intro, setIntro, audio, pause, setPause, route, setRoute}}> 
        {children} 
    </GlobalContext.Provider>
   )
}