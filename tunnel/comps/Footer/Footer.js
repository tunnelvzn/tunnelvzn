import styles from './Footer.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';


// npm install --save-dev @iconify/react
const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <footer className={styles.footer}>
                <p>Get In Touch! - <Link href="mailto: tunnelvzn.uw@gmail.com"><a className={styles.footerLink}>tunnelvzn.uw@gmail.com</a></Link></p>
                <div className={styles.iconContainer}>
                    <Link href="https://www.instagram.com/tunnel_vzn/"><a className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:instagram-fill" className={styles.iconStyle}/></a></Link>
                    <Link href="https://www.linkedin.com/company/tunnelvzn/"><a className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:linkedin-box-fill" className={styles.iconStyle} /></a></Link>
                    <Link href="mailto: tunnelvzn.uw@gmail.com"><a className={styles.footerLink}><Icon icon="clarity:email-line" width="24" height="24" className={styles.iconStyle} /></a></Link>
                    <Link href="https://ko-fi.com/tunnelvzn"><a className={styles.footerLink} target="_blank"><Icon icon="simple-icons:kofi" width="24" height="24" className={styles.iconStyle} /></a></Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;