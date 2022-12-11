import styles from './About.module.scss'
import Accordion from 'react-bootstrap/Accordion';
import Head from 'next/head'

// Fred, do:
// npm install react-bootstrap bootstrap

const About = () => {
    return (  
        <div>
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
                                We talk with current students at the university. We also get feedback from students about the relatability of the stories before they go live!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I suggest a story idea?</Accordion.Header>
                            <Accordion.Body>
                                Yes, you can! We want to hear about all students' experiences. Although we can't guarantee that your exact idea will be an addition by itself, we can assure you that we will adapt your experience into a future story in some capacity.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Is Tunnel_vzn making any profit?</Accordion.Header>
                            <Accordion.Body>
                                Nope! Tunnel_vzn is a non-profit project whose sole goal is to tell stories. We do have a Ko-fi donation page. No one is required to donate. We just wanted to feel more official since we have no intention of being sponsored by anyone.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Is the Tunnel_vzn team comprised of students?</Accordion.Header>
                            <Accordion.Body>
                                Yes! All team members are students at the University of Washington interested in storytelling and trying to be relatable. No one here is getting paid. Please help. I need to feed myself.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className={styles.block}></div>
            </div>
        </div>
    );
}
 
export default About;