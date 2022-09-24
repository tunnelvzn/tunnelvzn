import Link from 'next/link'
import styles from '../styles/Home.module.css'
const NotFound = () => {

    return (
        <div className={` d-flex flex-column justify-content-center h-100 ${styles.notFound}`}>
            <div className="text-center">
                <h1>404<b className='ms-3'>:/</b></h1>
                <h1>Oooops... This page cannot be found </h1>

                <p>Go back to <Link href="/"><a>Home</a></Link></p>
            </div>
        </div>
    );
}

export default NotFound;