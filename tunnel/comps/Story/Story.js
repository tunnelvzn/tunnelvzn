import styles from './Story.module.scss'
import Link from 'next/link'
import { GlobalContext } from '../Global/useGlobalContext'
import { useContext } from 'react'
import { useRouter } from 'next/router';
const Story = ({ id, name, contentImage}) => {
    const router = useRouter()
    const {
        intro, 
        setIntro,
        audio,
        route,
        setRoute,
        nav, 
        setNav,
        setStoryName, 
        storyName,
        setMainNav
      } = 
      useContext(GlobalContext);
    let currImage = 'comingSoon.svg'
   
    let storyContent = (
        <div className={styles.storyWrapper} onClick={()=> {setNav(false)}}>
            <div className='text-center ms-5 me-5'>
                <div role="button" aria-label={`story about ${name}`} tabIndex="0" onClick={()=> {
                    setMainNav(false)
                    router.push(`/Story?story=${name}`)
                    setStoryName(name)
                    console.log(name)
                    }}>
                    <div className={styles.story}>
                        <img className={`${styles.story} ${styles.standardCover}`} src={`/../../galleryImages/${contentImage}`} />
                    </div>
                </div>
                <h6 className={styles.storyTitles}>{name}</h6>
            </div>
        </div>
    )

    let defaultReturn = (
        <div className={styles.storyWrapper}>
            <div role="button" aria-label="story coming soon" tabIndex="0" className='text-center ms-5 me-5'>
                <Link href="/404">
                    <div className={styles.comingSoonStory}>
                        <img className={styles.story} src={`/../../galleryImages/${currImage}`} />
                    </div>
                </Link>
                <h6 className={styles.storyTitles}>Coming soon...</h6>
            </div>
        </div>
    )
    return (
        <>
            {id == "null" ? defaultReturn : storyContent}
        </>

    )
}

export default Story