import styles from './Story.module.scss'
import Link from 'next/link'
import { GlobalContext } from '../Global/useGlobalContext'
import { useContext } from 'react'
const Story = ({ id, name, contentImage }) => {
    const {
        intro, 
        setIntro,
        audio,
        route,
        setRoute
      } = 
      useContext(GlobalContext);
    let currImage = 'comingSoon.svg'
   
    // aria label should include {name} so it would be: "story about {name}"
    let storyContent = (
        <div className={styles.storyWrapper}>
            <div className='text-center ms-5 me-5'>
                <div role="button" aria-label="story about" tabindex="0" onClick={()=> setRoute('/StoryContent')}>
                    <img className={styles.story} src={`/../../galleryImages/${contentImage}`} />
                </div>
                <h6 className={styles.storyTitles}><b>{name}</b></h6>
            </div>
        </div>
    )

    let defaultReturn = (
        <div className={styles.storyWrapper}>
            <div role="button" aria-label="story coming soon" tabindex="0" className='text-center ms-5 me-5'>
                <Link href="/404">
                    <img className={styles.story} src={`/../../galleryImages/${currImage}`} />
                </Link>
                <h6 className={styles.storyTitles}><b>Coming soon...</b></h6>
            </div>
        </div>
    )
    console.log(defaultReturn)
    return (
        <>
            {id == "null" ? defaultReturn : storyContent}
        </>

    )
}

export default Story