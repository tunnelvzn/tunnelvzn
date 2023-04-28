import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import { useContext } from 'react'
import { GlobalContext } from '../Global/useGlobalContext'
import { FirebaseApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
// content inside of hamburger icon
function Subnav(props) {
    const router = useRouter()
    const {
        intro,
        setIntro,
        audio,
    route,
        setRoute,
        nav,
        setNav,
        auth,
        loginModal,
        setLoginModal,
        makeNoise
    } =
        useContext(GlobalContext);


    let styleClass
    if (props.show) {
        styleClass = `${styles.subnav} ${styles.show}`
    } else {
        styleClass = `${styles.subnav}`
    }

    function setUnderline(e) {

        const allTags = document.getElementsByClassName('general-nav-tags')
        for (let i = 0; i < allTags.length; i++) {
            allTags[i].classList.remove(`${styles.active}`)
        }
        console.log(e.currentTarget)
        e.currentTarget.classList.add(`${styles.active}`)


    }

    const userLogIn = () => {
        console.log('hi')
        setLoginModal(true)
        console.log(loginModal)
    }


    return (
        <div className={styleClass}>
            <div id="sidenav" className="sidenav d-flex justify-content-between flex-column">
                <ol className={`${styles.spaceAbove} d-flex flex-column h-75 justify-content-around`}>
                    {/* <li>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => userLogIn()}>Log in</button>
                    </li> */}


                    <li role="link" aria-label="home tab" tabIndex="0" id="home-tag" className={`${styles.pageTabs} general-nav-tags`} onClick={(e) => {
                        setRoute('/');
                        console.log(route)
                        sessionStorage.setItem("route", "/");
                        setNav(false)
                        setUnderline(e)
                        makeNoise()
                        router.push('/')
                    }}><a>Home</a>
                    </li>

                    <li role="link" aria-label="about tab" tabIndex="0" id="about-tag" className={`${styles.pageTabs} general-nav-tags`} onClick={(e) => {
                        setRoute('/About');
                        sessionStorage.setItem("route", "/About");
                        setNav(false)
                        setUnderline(e)
                        makeNoise()
                        router.push('/About')
                    }}><a>About</a>
                    </li>

                    <li id="feedback-tag" className={`${styles.pageTabs} ${styles.feedbackTab} general-nav-tags`} onClick={(e) => {
                        setRoute('/Feedback');
                        sessionStorage.setItem("route", "/Feedback");
                        setNav(false)
                        setUnderline(e)
                        makeNoise()
                        router.push('/Feedback')
                    }}>
                        <a>Feedback</a>
                    </li>

                    <li role="link" aria-label="project updates tab" tabIndex="0" id="updates-tag" className={`${styles.pageTabs} general-nav-tags`} onClick={(e) => {
                        setRoute('/Updates');
                        sessionStorage.setItem("route", "/Updates");
                        setNav(false)
                        setUnderline(e)
                        makeNoise()
                        router.push('/Updates')
                    }}><a>Updates</a>
                    </li>

                    <li role="link" aria-label="credits tab" tabIndex="0" id="credits-tag" className={`${styles.pageTabs} general-nav-tags`} onClick={(e) => {
                        setRoute('/Credits');
                        sessionStorage.setItem("route", "/Credits");
                        setNav(false)
                        setUnderline(e)
                        makeNoise()
                        router.push('/Credits')
                    }}><a>Credits</a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Subnav