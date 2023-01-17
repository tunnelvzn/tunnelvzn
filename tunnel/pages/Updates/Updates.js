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
                        We are actively improving user experience. There are two main aspects we are focused on: content and website. 
                        We believe in transparency and maintaining good communication with students. 
                        Thus, the purpose of this page is to inform you about the state of the organization.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Content Aspect</h3>
                    <ul>
                        <li>
                            Published stories are still subject to change due to new feedback.
                        </li>
                        <li>
                            Story three will release on March 16th, 2023.
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Website Aspect</h3>
                    <ul>
                        <li>
                            Screenreader accessibility improvements
                        </li>
                        <li>
                            Responsiveness for tablet orientation 
                        </li>
                        <li>
                            User Sign-in for additional features
                        </li>
                        <li>
                            Dark Mode
                        </li>
                        <li>
                            Page Transition Animations
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