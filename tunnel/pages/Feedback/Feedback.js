import styles from './Feedback.module.scss'
import Footer from '/comps/Footer';
import Head from 'next/head'

export const Feedback = () => {
    return (
        <>
            <Head>
                <title>Tunnel_vzn | Feedback</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.feedbackContent}>
                <div className={styles.block}></div>
                <div className={`${styles.header} text-center`}>
                    <h1 className={styles.feedbackTitle}>Feedback</h1>
                    <h6>We value your ideas! Thank you in advance for filling out this form!</h6>
                </div>
                <div className='mt-4'>
                    <label className={`${styles.question} mb-1`}>1. Your preferred email.</label>
                    <input type="email" placeholder="email@email.com" className={`${styles.input} w-100`}></input>
                </div>
                <div className={`${styles.multi} mt-4`}>
                    <label className={`${styles.question} mb-1`}>2. What do you think about the project so far?</label>

                    <div className='mt-2'>
                        <input className='me-2' type="radio" id="Bad" name="fav_language" value="Bad"></input>
                        <label for="Bad">Bad</label></div>

                    <div className='mt-2'>
                        <input className='me-2' type="radio" id="Decent" name="fav_language" value="Decent"></input>
                        <label for="Decent">Decent</label></div>

                    <div className='mt-2'>
                        <input className='me-2' type="radio" id="Good" name="fav_language" value="Good"></input>
                        <label for="Good">Good</label></div>

                    <div className='mt-2'>
                        <input className='me-2' type="radio" id="Awesome" name="fav_language" value="Awesome"></input>
                        <label for="Awesome">Awesome</label>
                    </div>
                </div>
                <div className='mt-4'>
                    <label className={`${styles.question} mb-1`}>3. Based on the previous question, explain why.</label>
                    <textarea type="text" placeholder="I think this because..." className={`${styles.input} ${styles.largeInput} w-100`}></textarea >
                </div>
                <div className='mt-4'>
                    <label className={`${styles.question} mb-1`}>4. Any usability issues or other obstacles you want to bring to our attention?</label>
                    <textarea type="text" placeholder="Something I want to bring to your attention is..." className={`${styles.input} ${styles.largeInput}  w-100`}></textarea >
                </div>
                <div className={`${styles.buttonContainer} text-center mt-3`}>
                    <button className={`${styles.button}`}>Submit</button>
                </div>
                <div className={styles.block}></div>
            </div>  
            <Footer/>  
        </>
    )
}


export default Feedback