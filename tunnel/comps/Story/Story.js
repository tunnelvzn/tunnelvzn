import styles from './Story.module.scss'
import Link from 'next/link'
const Story = ({ id, name, contentImage }) => {
   
    let currImage ='comingSoon.svg'
    // if (content.image) {
    //     currImage = content.image
    // }
    let defaultReturn = (
        <div className='d-inline ms-5 me-5 cursor-pointer'>
            < Link href="/404">
                <img className={styles.story} src={`/../../galleryImages/${contentImage}`} />
            </Link >
        </div>
    )

    let storyContent = (
        <div className='d-inline ms-5 me-5 cursor-pointer'>
            < Link href='/StoryContent'>
                <img className={styles.story} src={`/../../galleryImages/${contentImage}`} />
            </Link >
        </div>
    )
    return (
        <>
        {id == null ? defaultReturn : storyContent}
        </>
        
    )
}

export default Story