import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'
function Subnav(props) {
    console.log(props.show)
    let styleClass
    if (props.show) {
        styleClass = `${styles.subnav} ${styles.show}`
    } else {
        styleClass = `${styles.subnav}`
    }
    return (
        <div className={styleClass}>
            <div id="sidenav" className="sidenav d-flex justify-content-between flex-column">
                <div className="d-flex flex-column h-75 justify-content-around">

                    <Link href="/"><a><sup className={styles.smallText}>I </sup>Home</a></Link>
                    <Link href="/About"><a><sup className={styles.smallText}>II </sup>About</a></Link>
                    <Link href="https://docs.google.com/forms/d/1W2M3AvMM0hDVRwwXUgqTHfUfXxNW-ao13U9OoGff3BY/edit?usp=sharing" target="_blank"><a><sup className={styles.smallText}>III </sup>Feedback</a></Link>
                    <Link href="/Credits"><a><sup className={styles.smallText}>IX </sup>Credits</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Subnav