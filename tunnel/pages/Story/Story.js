import styles from './Story.module.scss'
import Link from 'next/link'
const Story = ({ content }) => {
    let currImage ='comingSoon.svg'
    // if (content.image) {
    //     currImage = content.image
    // }
    let defaultReturn = (
        <div className='d-inline ms-5 me-5 cursor-pointer'>
            < Link href="/404">
                <img className={styles.story} src={`/../../galleryImages/${currImage}`} />
            </Link >
        </div>
    )
    return (
        <>
        {defaultReturn}
        </>
        
    )
}

export default Story