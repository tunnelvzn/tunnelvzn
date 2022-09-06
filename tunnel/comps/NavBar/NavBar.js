import styles from './NavBar.module.scss'
import Link from 'next/link'

// Content inside of a hamburger icon
const Navbar = () => {
    return (
        <div id="sidenav" className="sidenav d-flex justify-content-between flex-column">
            <div className="d-flex flex-column">
                <div className="navTabs">
                    <Link href="/Gallery"><a><sup className={styles.smallText}>I </sup>Home</a></Link>
                    <Link href="/About"><a><sup className={styles.smallText}>II </sup>About</a></Link>
                    <Link href="https://docs.google.com/forms/d/1W2M3AvMM0hDVRwwXUgqTHfUfXxNW-ao13U9OoGff3BY/edit?usp=sharing" target="_blank"><a><sup className={styles.smallText}>III </sup>Feedback</a></Link>
                    <Link href="/Credits"><a><sup className={styles.smallText}>IX </sup>Credits</a></Link>
                </div>
            </div> 
            <div className="mb-5 linkGroup">
                <h5 className="linkTitle">Get In Touch!</h5>
                <ul id="socialLinks">
                    <li>
                        check me
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;