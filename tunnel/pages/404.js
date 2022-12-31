import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const NotFound = () => {

    return (
        // className={` d-flex flex-column justify-content-center h-100 ${styles.notFound}`}
        <div className={styles.notFound}>
            <div>
                <h1 className={styles.numbers}>404</h1>
                <h1 className={styles.message}>This story has not been told yet!</h1>

                <div className={styles.goHomeBtn}>
                    <h6><Link href="/"><a>Go Back Home</a></Link></h6>
                </div>

                <section className={styles.personImg}>
                    <Image src="/personSitting.png" layout="fill" alt="a pencil sketch of a young man sitting on the ground"/>
                </section>
                <hr className={styles.line} />
            </div>
        </div>
    );
}

export default NotFound;