import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'

// content inside of hamburger icon
function Subnav(props) {
    // console.log(props.show)
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
                    <li className={styles.pageTabs}><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.pageTabs}><Link href="/About"><a>About</a></Link></li>
                    <li className={styles.pageTabs}><Link href="https://docs.google.com/forms/d/1W2M3AvMM0hDVRwwXUgqTHfUfXxNW-ao13U9OoGff3BY/edit?usp=sharing"><a>Feedback</a></Link></li>
                    <li className={styles.pageTabs}><Link href="/Credits"><a>Credits</a></Link></li>
                </ol>
            </div>
        </div>
    )
}

export default Subnav