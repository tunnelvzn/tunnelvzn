import styles from './Story.module.scss'
import Link from 'next/link'
const Story = ({ id, name, contentImage }) => {

    let currImage = 'comingSoon.svg'
    // if (content.image) {
    //     currImage = content.image
    // }
    let defaultReturn = (
        <div className={styles.storyWrapper}>
            <div className='text-center ms-5 me-5'>
                <Link href="/404">
                    <img className={styles.story} src={`/../../galleryImages/${currImage}`} />
                </Link >
                <h6 className={styles.storyTitles}><b>Coming soon...</b></h6>
            </div>
        </div>
    )
    console.log(defaultReturn)

    let storyContent = (
        <div className={styles.storyWrapper}>
            <div className='text-center ms-5 me-5'>
                < Link href='/StoryContent'>
                    <img className={styles.story} src={`/../../galleryImages/${contentImage}`} />
                </Link >
                <h6 className={styles.storyTitles}><b>{name}</b></h6>
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