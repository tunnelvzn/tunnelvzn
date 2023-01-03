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
                    <h3 className={styles.subTitle}>Official Humans Of UW Partnership</h3>
                    <p>
                        We are collaborating with <Link href="https://www.instagram.com/officialhumansofuw/"><a target="_blank">Official Humans Of UW</a></Link> because both organizations seek to accomplish the same goal through differing approaches.
                        Tunnel_vzn gathers many experiences and combines them into one story like a collage. On the other hand, Official Humans Of UW focuses on amplifying the voices of individual students. 
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
                                We talk with current students at the university, gather personal accounts from social media, and take inspiration from our friends at Official Humans Of UW. We also get feedback from students about the relatability and realism of the stories before they go live!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What can I do to make my story heard?</Accordion.Header>
                            <Accordion.Body>
                                If you want to share your story, we encourage you to submit them to Official Humans Of UW to ensure that your experience gets heard by as many people as possible!
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
                <div className={styles.block}></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default About;