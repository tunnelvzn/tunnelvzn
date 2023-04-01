import styles from './Updates.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '/comps/Footer';
import Image from 'next/image'

// Fred, do:
// npm install react-bootstrap bootstrap

const Updates = () => {
    return (  
        <>
        <div className={styles.updateBG}>
            <Head>
                <title>Tunnel_vzn | Project Updates</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.updateContent}>
                <div className={styles.block}></div>
                <h1 className={`${styles.updateTitle} text-center`}>Updates</h1>
                <section>
                    <h3 className={styles.subTitle}>Transparency Statement</h3>
                    <p>
                        We are actively improving user experience in two main aspects: content and website.  
                        We believe in transparency and maintaining good communication with students. 
                        Thus, the purpose of this page is to inform you about the state of the organization.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Upcoming Content</h3>
                    <ul>
                        <li>
                            Published stories are still subject to change due to new feedback.
                        </li>
                        <li>
                            Story three will release on March 31st, 2023. [Delayed due to new feedback]
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Upcoming Website Improvements</h3>
                    <ul>
                        <li>
                            Database updates & feedback functionality improvements
                        </li>
                        <li>
                            Screenreader accessibility enhancements
                        </li>
                        <li>
                            Responsiveness for tablets 
                        </li>
                        <li>
                            Dark mode
                        </li>
                        <li>
                            User account for additional features
                        </li>
                        <li>
                            Page transition animations
                        </li>
                        <li>
                            General UI updates
                        </li>
                    </ul>
                </section>
                <div className={styles.block}></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default Updates;