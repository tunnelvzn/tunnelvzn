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
                    <h3 className={styles.subTitle}>Website Notices</h3>
                    <p>
                        We are aware of screenreader and keyboard accessibility bugs and are tackling those challenges right now. We want the site to be inclusive to all students. Thank you for understanding.
                    </p>
                </section>
                <section>
                    <h3 className={styles.subTitle}>Story Notices</h3>
                    <p>
                        Story two will be releasing on January 16th, 2023. Although a story may be live, it is still subject to change for we are actively seeking feedback to make them better!
                    </p>
                </section>
                <div className={styles.block}></div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default Updates;