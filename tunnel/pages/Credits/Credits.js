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
            </Head>
            <div className={styles.creditContent}>
                <div>
                    <div className="col-md-6">
                        <div className={styles.block}></div>
                        <h1 className={`${styles.creditTitle} text-center`}>Credits</h1> 
                        <div className="mt-3 d-flex justify-content-between">
                            <div className="m-3">
                                <Image src="/creditsImages/sami.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Sami F.</h5>
                                <small>- Designer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/sylvia.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Sylvia L.</h5>
                                <small>- Editor</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/rui.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Rui H.</h5>
                                <small>- Illustrator</small>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <div className="m-3">
                                <Image src="/creditsImages/fred.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Fred Z.</h5>
                                <small>- Developer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/augene.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Augene P.</h5>
                                <small>- Writer</small>
                            </div>
                            <div className="m-3">
                                <Image src="/creditsImages/joon.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Joon C.</h5>
                                <small>- Writer</small>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <div className="m-3">
                                <Image src="/creditsImages/eddy.svg" className={styles.memberVis} height={100} width={100} />
                                <h5>Eddy P.</h5>
                                <small>- Founder & Designer</small>
                            </div>
                        </div>
                        <div className="m-3">
                            <div className={styles.end}>
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