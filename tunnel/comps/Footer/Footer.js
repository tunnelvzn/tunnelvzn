import styles from './Footer.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';


// npm install --save-dev @iconify/react
const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <footer className={styles.footer}>
                <h6 className={styles.copyright}>© 2024 Tunnel_vzn</h6>
                <p aria-label="Contact us via email">Contact us at <Link tabIndex="0" href="mailto: tunnelvzn.uw@gmail.com"><a target="_blank" className={styles.footerLink}>tunnelvzn.uw@gmail.com</a></Link> for inquiries!</p>
                <div className={styles.iconContainer}>
                    <Link href="https://www.instagram.com/tunnel_vzn/"><a tabIndex="0" aria-label="instagram" className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:instagram-fill" width="21" height="21" className={styles.iconStyle}/></a></Link>
                    <Link href="https://www.facebook.com/tunnelvznorg"><a tabIndex="0" aria-label="facebook" className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="mdi:facebook" width="21" height="21" className={styles.iconStyle}/></a></Link>
                    <Link href="https://www.linkedin.com/company/tunnelvzn/"><a tabIndex="0" aria-label="linkedin" className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:linkedin-box-fill" width="21" height="21" className={styles.iconStyle} /></a></Link>
                    <Link href="mailto: tunnelvzn.uw@gmail.com"><a tabIndex="0" aria-label="email" className={styles.footerLink}><Icon icon="clarity:email-line" width="24" height="24" className={styles.iconStyle} /></a></Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;