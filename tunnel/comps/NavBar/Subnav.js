import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import { useContext } from 'react'
import { GlobalContext } from '../Global/useGlobalContext'

// content inside of hamburger icon
function Subnav(props) {
    const {
        intro, 
        setIntro,
        audio,
        route,
        setRoute
      } = 
      useContext(GlobalContext);

    let styleClass
    if (props.show) {
        styleClass = `${styles.subnav} ${styles.show}`
    } else {
        styleClass = `${styles.subnav}`
    }
    return (
        <div className={styleClass}>
            <div id="sidenav" className="sidenav d-flex justify-content-between flex-column">
                <ol className={`${styles.spaceAbove} d-flex flex-column h-75 justify-content-around`}>
                    <li className={`${styles.pageTabs} ${styles.active}`} onClick={() => {setRoute('/'); sessionStorage.setItem("route", "/");}}><a>Home</a></li>
                    <li className={styles.pageTabs} onClick={() => {setRoute('/About'); sessionStorage.setItem("route", "/About");}}><a>About</a></li>
                    <li className={styles.pageTabs}><Link href="https://docs.google.com/forms/d/1W2M3AvMM0hDVRwwXUgqTHfUfXxNW-ao13U9OoGff3BY/edit?usp=sharing"><a>Feedback</a></Link></li>
                    <li className={styles.pageTabs} onClick={() => {setRoute('/Credits'); sessionStorage.setItem("route", "/Credits");}}><a>Credits</a></li>
                </ol>
            </div>
        </div>
    )
}

export default Subnav