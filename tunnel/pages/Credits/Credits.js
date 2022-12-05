import styles from './Credits.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';
import Footer from '../../comps/Footer';
import Head from 'next/head'

const Credits = () => {
    return (  
        <div>
            <Head>
                <title>Tunnel_vzn | Credits</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.creditContent}>
                <div>
                    <div className="container me-auto">
                        <div className={styles.block}></div>
                        <h1 className={`${styles.creditTitle} text-center`}>Credits</h1> 
                        <div className="mt-4 d-flex justify-content-around">
                            <div className="m-3">
                                <Image src="/creditsImages/fred.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Fred Z.</h5>
                                <small>- Developer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/rui.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Rui H.</h5>
                                <small>- Illustrator</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/anna.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Anna S.</h5>
                                <small>- Illustrator</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/sylvia.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Sylvia L.</h5>
                                <small>- Editor</small>
                            </div>
                        </div>
                        <div className="mt-4 d-flex justify-content-around">
                            <div className="m-3">
                                <Image src="/creditsImages/sami.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Sami F.</h5>
                                <small>- Designer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/augene.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Augene P.</h5>
                                <small>- Designer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/joon.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Joon C.</h5>
                                <small>- Designer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/eddy.svg" className={styles.memberVis} height={120} width={120} />
                                <h5>Eddy P.</h5>
                                <small>- Founder & Designer</small>
                            </div>
                        </div>
                        <div  className="mt-4 d-flex">
                            <div className={`${styles.end} m-3`}>
                                <p>BGM: Aurora by Sanchii from Uppbeat</p>
                                <p>Development: Next.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Credits;