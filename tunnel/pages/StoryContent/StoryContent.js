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
    const { id } = router.query
    const story = stories.find(story => story.id == id)
    console.log(storyName)
    let renderComponent;
    switch (storyName) {
        case "Loneliness":
            renderComponent = <Loneliness />
            break
        case "Anxiety":
            renderComponent = <Anxiety />
            break
    }

    return (
        <div>
            {/* once we roll out button component, we can revisit this */}
            {/* <div>
                <button className={`${styles.return}`} onClick={() => {
                    setRoute('/')
                    sessionStorage.setItem("route", "/");
                    setNav(false)
                    console.log('trigger, to route: ', route)
                }}><span className={`${styles.returnText}`}>Back</span></button>
            </div> */}

            <section className={`${styles.arrow} ${styles.bounce} text-center`}>
                <h6>Scroll/Arrow Key Down</h6>
                <h1 className={styles.theArrow}>▿</h1>
            </section>

            {renderComponent}

           
        </div>
    )
}


export default StoryContent