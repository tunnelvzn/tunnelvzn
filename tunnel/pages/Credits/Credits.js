import styles from 'Credits.module.scss'
import Image from 'next/image'


const Credits = () => {
    return (  
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div  className="col-md-6" {...styles.team-text}>
                    <h1 className="text-center mb-5">Credits</h1> 
                    <div className=" mt-3 d-flex justify-content-between">
                        <div className="m-2">
                            <Image src="/creditImages/sami.svg" className={styles.memberVis} />
                            <h5>Sami F.</h5>
                            <small>- Designer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditImages/sylvia.svg" className={styles.memberVis} />
                            <h5>Sylvia L.</h5>
                            <small>- Editor</small>
                        </div>
                        <div  className="m-2">
                            <Image src="/creditImages/rui.svg" className={styles.memberVis} />
                            <h5>Rui H.</h5>
                            <small>- Illustrator</small>
                        </div>
                    </div>
                
                    <div className="mt-3 d-flex justify-content-between">
                        <div className="m-2">
                            <Image src="/creditImages/fred.svg" className={styles.memberVis} />
                            <h5>Fred Z.</h5>
                            <small>- Developer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditImages/augene.svg" className={styles.memberVis} />
                            <h5>Augene P.</h5>
                            <small>- Writer</small>
                        </div>
                        <div className="m-2">
                            <Image src="/creditImages/joon.svg" className={styles.memberVis} />
                            <h5>Joon C.</h5>
                            <small>- Writer</small>
                        </div>
                    </div>

                    <div>
                        <div className="m-2">
                            <Image src="/creditImages/eddy.svg" className={styles.memberVis} />
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
        </div>
    );
}
 
export default Credits;