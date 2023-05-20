import styles from './Button.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import ReactAudioPlayer from 'react-audio-player';
import { GlobalContext } from '../Global/useGlobalContext'

export const Button = (props) => {
    const { size, children, onClick } = props;

    return (
        <>
            {size == undefined &&
                <button className={styles.button} onClick={() => onClick()}>{children}</button>}
            {size == "large" &&
            <button className={styles.largeButton} onClick={() => onClick()}>{children}</button>}
        </>
    )
}

export default Button
