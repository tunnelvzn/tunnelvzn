import styles from './Updates/Updates.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '/comps/Footer';
import Image from 'next/image'

const Updates = () => {
    return (  
        <>
        <div  className={`${styles.container} ${styles.updateBG}`} >
            <Head>
                <title>Tunnel_vzn | Updates</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={`${styles.updateContent} fadeIn`}>
                <div className={styles.block}></div>
                <h1 className={`${styles.updateTitle} text-center`}>Updates</h1>
                <section>
                <h3 className={styles.subTitle}>Roadmap</h3>
                <div className={styles.roadmapContain}>
                    <Image src="/updateImages/roadmap.png" layout="fill" className={styles.roadmapImg} alt="tunnel vision's roadmap from version one to five"/>
                </div>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Version 5.0 (TBD)</h3>
                    <ul>
                        <li>
                            TBD
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Version 4.0 (Content Additions)</h3>
                    <ul>
                        <li>
                            Burnout Story
                        </li>
                        <li>
                            Epilogue Story
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Version 3.0 (UI Refinements & Site Efficiency)</h3>
                    <ul>
                        <li>
                            Consistent Background Music
                        </li>
                        <li>
                            Thinner Lines & Borders
                        </li>
                        <li>
                            Custom Scroll Bars
                        </li>
                        <li>
                            Color Refinement
                        </li>
                        <li>
                            Faster Loading Speeds
                        </li>
                        <li>
                            Finalized Hover Animations
                        </li>
                        <li>
                            Page Transitions
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Version 2.0 (Enhanced Feedback Features)</h3>
                    <ul>
                        <li>
                            Envy Story
                        </li>
                        <li>
                            Embedded Feedback forms
                        </li>
                        <li>
                            Story Reactions
                        </li>
                        <li>
                            Database
                        </li>
                    </ul>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Version 1.0 (MVP)</h3>
                    <ul>
                        <li>
                            Loneliness & Anxiety Stories
                        </li>
                        <li>
                            Website Responsiveness
                        </li>
                        <li>
                            Background Music
                        </li>
                        <li>
                            General And Story Feedback (Temporary Google Forms)
                        </li>
                        <li>
                            Basic Accessibility Functionalities
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