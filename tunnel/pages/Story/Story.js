import Image from 'next/image'
import styles from './Story.module.scss'
import Link from 'next/link'
const Story = ({ content }) => {

    let defaultReturn = (
        <div className='d-inline ms-5 me-5 cursor-pointer'>
            < Link href="/404">
                <img className={styles.story} src={`/../../galleryImages/${content.image}`} alt={content.name} />
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