import styles from './Feedback.module.scss'

export const Feedback = () => {
    return (
        <div className={`${styles.topSpace}`}>
            <div className='text-center'>
                <h1>Feedback</h1>
                <h6>tell us what you think</h6>
            </div>

            <div className='mt-4'>
                <label className='mb-1'> your preferred email</label>
                <input type="email" className={`${styles.input} w-100`}></input>
            </div>

            <div className='mt-4'>
                <label> what do you think about the project so far</label>

                <div className='mt-2'>
                    <input className='me-2' type="radio" id="Bad" name="fav_language" value="Bad"></input>
                    <label for="Bad">Bad</label></div>

                <div className='mt-2'>
                    <input className='me-2' type="radio" id="Okay" name="fav_language" value="Okay"></input>
                    <label for="Okay">Okay</label></div>

                <div className='mt-2'>
                    <input className='me-2' type="radio" id="Good" name="fav_language" value="Good"></input>
                    <label for="Good">Good</label></div>

                <div className='mt-2'>
                    <input className='me-2' type="radio" id="Awesome" name="fav_language" value="Awesome"></input>
                    <label for="Awesome">Awesome</label>
                </div>


            </div>
            <div className='mt-4'>
                <label className='mb-1'> Based on the previous question, Why do you feel this way?</label>
                <textarea type="text" className={`${styles.input} ${styles.largeInput} w-100`}></textarea >
            </div>
            <div className='mt-4'>
                <label className='mb-1' > Any issues with usability or other problems with the website you want to bring to our attention?</label>
                <textarea type="text" className={`${styles.input} ${styles.largeInput}  w-100`}></textarea >
            </div>
            <div className='text-center mt-3'>
                <button className={`${styles.button} `}>Submit</button>
            </div>
        </div>)
}


export default Feedback