import styles from './About.module.scss'
import Accordion from 'react-bootstrap/Accordion';
import Head from 'next/head'
import Link from 'next/link'
import Footer from '/comps/Footer';

// Fred, do:
// npm install react-bootstrap bootstrap

const About = () => {
    return (  
        <>
        <div className={styles.aboutBG}>
            <Head>
                <title>Tunnel_vzn | About</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.aboutContent}>
                <div className={styles.block}></div>
                <div>
                    <h1 className={`${styles.aboutTitle} text-center`}>About Us</h1>
                    <h3 className={styles.subTitle}>Who are we?</h3>
                    <p>
                        We tell stories representing the shared struggles of students at the University of Washington. We craft stories based on true recountings that we have researched. We are a student-run organization unaffiliated with the university.
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
                    <h3 className={`${styles.subTitle} ${styles.customSpace}`}>Frequently Asked Questions</h3>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Are the characters within the stories real UW students?</Accordion.Header>
                            <Accordion.Body>
                                Nope! The characters are fictitious. However, their experiences are similar and inspired by real students.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How does Tunnel_vzn gather student experiences?</Accordion.Header>
                            <Accordion.Body>
                                We talk with current students at the university and gather personal accounts from social media. We also get feedback from students about the relatability and realism of the stories before they go live!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Is Tunnel_vzn making any profit?</Accordion.Header>
                            <Accordion.Body>
                                Nope! Tunnel_vzn is a non-profit project whose sole goal is to tell stories. We do have a Ko-fi donation page. No one is required to donate, but we would greatly appreciate it! Ultimately, we just wanted to feel more official since we have no plans of being sponsored by anyone.                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Is the Tunnel_vzn team comprised of students?</Accordion.Header>
                            <Accordion.Body>
                                Yes! All team members are students at the University of Washington who have a passion for storytelling.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div>
                    <h3 className={styles.subTitle}>Campus Resources</h3>
                    <p>
                        Since our project discusses mental health topics, it would be a shame not to mention the campus resources available to students. 
                        We are linking <Link href="http://livewell.uw.edu/"><a className={styles.partnerLink} target="_blank">Livewell</a></Link> and the <Link href="https://www.washington.edu/counseling/"><a className={styles.partnerLink} target="_blank">Counseling Center</a></Link> as great resources depending on the type of care you need!
                    </p>
                </div>
                <div className={styles.block}></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default About;