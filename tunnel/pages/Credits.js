import styles from './Credits/Credits.module.scss'
import Image from 'next/image'
import Footer from '/comps/Footer';
import Link from 'next/link'
import Head from 'next/head'

const Credits = () => {
    return (
        <>
            <div  className={`${styles.container}`}>
                <Head>
                    <title>Tunnel_vzn | Credits</title>
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <div className={`${styles.creditContent} fadeIn`}>
                    <div>
                        <div className="container me-auto">
                            <div className={styles.block}></div>
                            <h1 className={`${styles.creditTitle} text-center`}>Credits</h1>
                            <div className="mt-4 d-md-flex justify-content-center">
                                <div className="mt-4 d-sm-flex d-inline justify-content-around">
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/fred.svg" className={styles.memberVis} height={120} width={120} alt="fred's initials"/>
                                        <h5>Fred Z.</h5>
                                        <small>Developer</small>
                                    </div>
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/rui.svg" className={styles.memberVis} height={120} width={120} alt="rui's initials"/>
                                        <h5>Rui H.</h5>
                                        <small>Illustrator</small>
                                    </div>
                                </div>
                                <div className="mt-4 d-sm-flex d-inline justify-content-around">
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/anna.svg" className={styles.memberVis} height={120} width={120} alt="anna's initials"/>
                                        <h5>Anna S.</h5>
                                        <small>Illustrator</small>
                                    </div>
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/sylvia.svg" className={styles.memberVis} height={120} width={120} alt="sylvia's initials"/>
                                        <h5>Sylvia L.</h5>
                                        <small>Editor</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 d-md-flex justify-content-center">
                                <div className="mt-4 d-sm-flex d-inline justify-content-around">
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/augene.svg" className={styles.memberVis} height={120} width={120} alt="augene's initials"/>
                                        <h5>Augene P.</h5>
                                        <small>Editor</small>
                                    </div>
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/eddy.svg" className={styles.memberVis} height={120} width={120} alt="eddy's initials"/>
                                        <h5>Eddy P.</h5>
                                        <small>Founder</small>
                                    </div>
                                </div>

                                <div className="mt-4 d-sm-flex d-inline justify-content-around">
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/joon.svg" className={styles.memberVis} height={120} width={120} alt="joon's initials"/>
                                        <h5>Joon C.</h5>
                                        <small>Ex-developer</small>
                                    </div>
                                    <div className={`${styles.memberVisDiv} m-3 text-center`}>
                                        <Image src="/creditsImages/sami.svg" className={styles.memberVis} height={120} width={120} alt="sami's initials"/>
                                        <h5>Sami F.</h5>
                                        <small>Ex-designer</small>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 d-flex justify-content-around">
                                <div className={styles.end}>
                                    <p>
                                        BGM: Eclipse - Cinematic Dark Hybrid Music [FREE DOWNLOAD] by Keys of Moon Music 
                                        <br/>
                                        <Link href="https://soundcloud.com/keysofmoon"><a className={styles.creditLink} target="_blank">https://soundcloud.com/keysofmoon</a></Link>
                                        <br/>
                                        Music provided by <Link href="https://www.plugnplaymusic.net"><a className={styles.creditLink} target="_blank"> https://www.plugnplaymusic.net</a></Link>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.block}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Credits;