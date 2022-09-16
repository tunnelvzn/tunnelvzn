import styles from './About.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';
import Footer from '../../comps/Footer';
const About = () => {
    return (  
        <>
        <NavBar/>
        <div className="row mt-5">
            <div className="col-3"></div>
            <div className= {`${styles.aboutText} col-6`}>
                <Image src='/aboutImages/girl.svg' className={styles.aboutBgImg} height={500} width={500} />
                <div className="mt-3 ">
                    <h1 className="text-center mb-5">About Us</h1>
                    <h3>Who are we?</h3>
                    <p>
                        We tell stories that represent the shared struggles of students at the University of Washington,
                        based on a plethora of true recountings that we have researched.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>Mission</h3>
                    <p>
                        We empower students who are lost and demoralized by the obstacles that stand before them to
                        continue their journey with comfort in that they know they are not alone in their struggles.
                    </p>
                </div>
                <div className="mt-5">
                    <h3>Impact</h3>
                    <p>
                        Through thought-provoking storytelling, our project allows students to see various perspectives
                        from those who have experienced similar situations, thus, gaining greater awareness and a sense of comfort,
                        allowing them to push forward in life. We hope the ideas presented will stay with students long after leaving the website.
                    </p>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
        <Footer/>
        </>
    );
}
 
export default About;