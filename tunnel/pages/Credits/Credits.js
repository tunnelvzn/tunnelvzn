import styles from './Credits.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';
import Footer from '../../comps/Footer';

const Credits = () => {
    return (  
        <div>
            <NavBar/>
            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div  className="col-md-6" {...styles.teamText}>
                    <h1 className="text-center mb-5">Credits</h1> 
                    <div className=" mt-3 d-flex justify-content-between">
                        <div className="m-2">
                            <Image src="/creditsImages/sami.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Sami F.</h5>
                            <small>- Designer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditsImages/sylvia.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Sylvia L.</h5>
                            <small>- Editor</small>
                        </div>
                        <div  className="m-2">
                            <Image src="/creditsImages/rui.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Rui H.</h5>
                            <small>- Illustrator</small>
                        </div>
                    </div>
                
                    <div className="mt-3 d-flex justify-content-between">
                        <div className="m-2">
                            <Image src="/creditsImages/fred.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Fred Z.</h5>
                            <small>- Developer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditsImages/augene.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Augene P.</h5>
                            <small>- Writer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditsImages/joon.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Joon C.</h5>
                            <small>- Writer</small>
                        </div>
                    </div>

                    <div>
                        <div className="m-3">
                            <Image src="/creditsImages/eddy.svg" className={styles.memberVis} height={100} width={100} />
                            <h5>Eddy P.</h5>
                            <small>- Founder & Designer</small>
                        </div>
                    </div>

                    <div className={styles.end}>
                        <p><b>Images:</b> Unsplash & our own images</p>
                        <p><b>BGM:</b> Aurora by Sanchii from Uppbeat</p>
                        <p><b>Development:</b> HTML, CSS, JS</p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Credits;