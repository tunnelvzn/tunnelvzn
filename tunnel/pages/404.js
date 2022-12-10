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

                <p>Go back to <Link href="/"><a>Home</a></Link></p>
                <div className={styles.personContainer}>
                    <Image src="/personSitting.svg" height={350} width={350} />
                </div>
                <hr className={styles.line}/>
            </div>
        </div>
    );
}

export default NotFound;