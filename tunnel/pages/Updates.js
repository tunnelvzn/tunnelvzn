import styles from './Updates/Updates.module.scss'
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
                <title>Tunnel_vzn | Updates</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.updateContent}>
                <div className={styles.block}></div>
                <h1 className={`${styles.updateTitle} text-center`}>Updates</h1>
                <section>
                <h3 className={styles.subTitle}>Roadmap</h3>
                <div className={styles.roadmapContain}>
                    <Image src="/updateImages/roadmap.png" layout="fill" className={styles.roadmapImg} alt="tunnel vision's roadmap from version one to five"/>
                </div>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Transparency Statement</h3>
                    <p>
                        We are actively improving user experience in two main aspects: content and website. We believe in transparency and maintaining good communication with students. Thus, the purpose of this page is to inform you about the state of the organization.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Upcoming Content</h3>
                    <ul>
                        <li>
                            Published stories are still subject to change due to new feedback
                        </li>
                        <li>
                            Story four is in early research and development
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Known Bugs</h3>
                    <ul>
                        <li>
                            Website title does not link back to the home
                        </li>
                        <li>
                            Images on mobile stretched awkwardly
                        </li>
                        <li>
                            Non-existent story reaction statistics on mobile
                        </li>
                        <li>
                            Faulty screen reader menu button
                        </li>
                        <li>
                            Inconsistent scroll bar styles
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Incoming Website Updates</h3>
                    <ul>
                        <li>
                            Better story reaction buttons
                        </li>
                        <li>
                            Enhanced story scroll navigation
                        </li>
                        <li>
                            Detailed roadmap
                        </li>
                        <li>
                            Responsiveness for tablets 
                        </li>
                        <li>
                            Dark mode
                        </li>
                        <li>
                            Page and text transition animations
                        </li>
                        <li>
                            User accounts
                        </li>
                        <li>
                            Story sharing
                        </li>
                        <li>
                            Story annotation feature
                        </li>
                        <li>
                            DIY stories functionality
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