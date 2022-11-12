import React, { createContext, useReducer, useState } from 'react';


const initialState = {
  
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [intro, setIntro] = useState(true)
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(`https://docs.google.com/uc?export=download&id=1qcaDUv3lxrnOufajibXXL27Ymi8I78Us`));
    
   return(
      <GlobalContext.Provider value = {{intro, setIntro, audio}}> 
        {children} 
   </GlobalContext.Provider>
   )
}