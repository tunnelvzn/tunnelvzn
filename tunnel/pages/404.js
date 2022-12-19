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

                <section className={styles.personContainer}>
                    <section className={styles.personImg}>
                        <img src="/personSitting.svg" height={350} width={350} />
                    </section>
                    <hr className={styles.line} />
                </section>

            </div>
        </div>
    );
}

export default NotFound;