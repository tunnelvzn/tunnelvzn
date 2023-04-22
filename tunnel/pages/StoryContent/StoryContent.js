import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react';
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { GlobalContext } from '../../comps/Global/useGlobalContext'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Loneliness } from './Loneliness';
import { Anxiety } from './Anxiety';
import { Envy } from './Envy'
const StoryContent = () => {
    const {
        intro,
        setIntro,
        audio,
        route,
        setRoute,
        setNav,
        storyName
    } =
        useContext(GlobalContext);
    const router = useRouter()


    console.log(storyName)
    let renderComponent;
    switch (storyName) {
        case "Loneliness":
            renderComponent = <Loneliness />
            break
        case "Anxiety":
            renderComponent = <Anxiety />
            break
        case "Envy":
            renderComponent = <Envy />
            break
    }

    return (
        <div>
            <div>
                <button className={`${styles.return}`} onClick={() => {
                    setRoute('/')
                    sessionStorage.setItem("route", "/");
                    router.push('/')
                    console.log('push route')
                    setNav(false)

                }}><span className={`${styles.returnIcon}`}><Icon icon="akar-icons:arrow-back" color="#212121" width="30" height="30" /></span></button>
            </div>

            <section className={`${styles.arrow} ${styles.bounce} text-center`}>
                <h6>Scroll Down</h6>
                <h1 className={styles.theArrow}>▿</h1>
            </section>

            {renderComponent}


        </div>
    )
}


export default StoryContent