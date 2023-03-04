import styles from './Button.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../Global/useGlobalContext'

export const Button = (props) => {
    const size = props.size

    return (
        <>
            {size == undefined &&
                <button> normal</button>}
            {size == "large" && 
            <button> big ass button</button>}
        </>


    )


}


export default Button