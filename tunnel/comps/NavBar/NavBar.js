import styles from './NavBar.module.scss'
const Navbar = () => {
    return (
        <div id="sidenav" className="sidenav d-flex justify-content-between flex-column">
            <div className="d-flex flex-column">
                <div className="navTabs">
                    <a href="home.html" id="selected-nav"><sup id="smallText">I </sup>Home</a>
                    <a href="about.html"><sup id="smallText">II </sup>About</a>
                    <a target="_blank"
                        href="https://docs.google.com/forms/d/1W2M3AvMM0hDVRwwXUgqTHfUfXxNW-ao13U9OoGff3BY/edit?usp=sharing"><sup
                            id="smallText">III </sup>Feedback</a>
                    <a href="credits.html"><sup id="smallText">IX </sup>Credits</a>
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