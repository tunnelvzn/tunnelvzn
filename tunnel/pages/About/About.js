import styles from './About.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';
import Footer from '../../comps/Footer';
import Head from 'next/head'
const About = () => {
    return (  
        <div>
            <Head>
                <title>Tunnel_vzn | About</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            {/* <NavBar/> */}
            <div className={styles.aboutContent}>
                <div className={styles.block}></div>
                <div>
                    <h1 className={`${styles.aboutTitle} text-center`}>About Us</h1>
                    <h3 className={styles.subTitle}>Who are we?</h3>
                    <p>
                        We tell stories that represent the shared struggles of students at the University of Washington,
                        based on a plethora of true recountings that we have researched.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Mission</h3>
                    <p>
                        We empower students who are lost and demoralized by the obstacles that stand before them to
                        continue their journey with comfort in that they know they are not alone in their struggles.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Impact</h3>
                    <p>
                        Through thought-provoking storytelling, our project allows students to see various perspectives
                        from those who have experienced similar situations, thus, gaining greater awareness and a sense of comfort,
                        allowing them to push forward in life. We hope the ideas presented will stay with students long after leaving the website.
                    </p>
                </div>
                <div className={styles.block}></div>
            </div>
        </div>
    );
}
 
export default About;