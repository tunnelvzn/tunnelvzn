import styles from './Footer.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';


// npm install --save-dev @iconify/react
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p>Get In Touch! - <Link href="mailto: tunnelvzn.uw@gmail.com"><a className={styles.footerLink}>tunnelvzn.uw@gmail.com</a></Link></p>
                <div className={styles.iconContainer}>
                    <Link href=""><a className={styles.footerLink}><Icon icon="akar-icons:instagram-fill" className={styles.iconStyle} /></a></Link>
                    <Link href=""><a className={styles.footerLink}><Icon icon="akar-icons:linkedin-box-fill" className={styles.iconStyle} /></a></Link>
                    <Link href="mailto: tunnelvzn.uw@gmail.com"><a className={styles.footerLink}><Icon icon="clarity:email-line" width="24" height="24" className={styles.iconStyle} /></a></Link>
                    <Link href=""><a className={styles.footerLink}><Icon icon="simple-icons:kofi" width="24" height="24" className={styles.iconStyle} /></a></Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;