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
                        We tell stories representing the shared struggles of students at the University of Washington. We craft stories based on true recountings that we have researched.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Mission</h3>
                    <p>
                        We empower students who are lost and demoralized by the obstacles that stand before them to continue their journey with relief in knowing they are not alone in their struggles.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Impact</h3>
                    <p>
                        Through thought-provoking storytelling, our project allows students to see various perspectives from those who have experienced similar situations, thus, gaining greater awareness and a sense of comfort, allowing them to push forward. We hope the ideas presented will stay with students long after leaving the website.
                    </p>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Frequently Asked Questions</h3>
                    <br/>
                    <p>Q: Are the characters within the stories real UW students?</p>
                    <p>A: Nope! The characters are fictitious. However, their experiences are similar and inspired by real students.</p>
                    <br/>
                    <p>Q: How does Tunnel_vzn gather student experiences?</p>
                    <p>A: We talk with current students at the university. We also get feedback from students about the relatability of the stories before they go live!</p>
                    <br/>
                    <p>Q: Can I suggest a story idea?</p>
                    <p>A: Yes, you can! We want to hear about all students' experiences. Although we can't guarantee that your exact idea will be an addition by itself, we can assure you that we will adapt your experience into a future story in some capacity.</p>
                    <br/>
                    <p>Q: Is Tunnel_vzn making any profit?</p>
                    <p>A: Nope! Tunnel_vzn is a non-profit project whose sole goal is to tell stories. We do have a Ko-fi donation page. No one is required to donate. We just wanted to feel more official since we have no intention of being sponsored by anyone.</p>
                    <br/>
                    <p>Q: Is the Tunnel_vzn team comprised of students?</p>
                    <p>A: Yes! All team members are students at the University of Washington interested in storytelling and trying to be relatable. No one here is getting paid. Please help. I need to feed myself.</p>
                    <br/>
                </div>
                <div className={styles.block}></div>
            </div>
        </div>
    );
}
 
export default About;