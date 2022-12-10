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

                <div className={styles.backBtn}>
                    <h6><b>Go back to <Link href="/"><a>Home</a></Link></b></h6>
                </div>

                <div className={styles.personContainer}>
                    <div  className={styles.personImg}>
                        <img src="/personSitting.svg" height={350} width={350} />
                       
                    </div>
                    <hr className={styles.line} />
                </div>

            </div>
        </div>
    );
}

export default NotFound;