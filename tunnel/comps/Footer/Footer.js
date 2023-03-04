import styles from './Footer.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';


// npm install --save-dev @iconify/react
const Footer = () => {
    return (
        <div className={styles.footerDiv}>
            <footer className={styles.footer}>
                <h6 className={styles.copyright}>© 2023 Tunnel_vzn</h6>
                {/* <p aria-label="is our contact email">Get In Touch! - <Link tabIndex="0" href="mailto: tunnelvzn.uw@gmail.com"><a className={styles.footerLink}>tunnelvzn.uw@gmail.com</a></Link></p> */}
                <p aria-label="Follow us on instagram">Follow us on <Link tabIndex="0" href="https://www.instagram.com/tunnel_vzn/"><a target="_blank" className={styles.footerLink}>Instagram</a></Link> for the latest updates!</p>
                <div className={styles.iconContainer}>
                    <Link href="https://www.instagram.com/tunnel_vzn/"><a tabIndex="0" aria-label="instagram" className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:instagram-fill" className={styles.iconStyle}/></a></Link>
                    <Link href="https://www.linkedin.com/company/tunnelvzn/"><a tabIndex="0" aria-label="linkedin" className={`${styles.footerLink} ${styles.extraPadding}`} target="_blank"><Icon icon="akar-icons:linkedin-box-fill" className={styles.iconStyle} /></a></Link>
                    <Link href="mailto: tunnelvzn.uw@gmail.com"><a tabIndex="0" aria-label="email" className={styles.footerLink}><Icon icon="clarity:email-line" width="24" height="24" className={styles.iconStyle} /></a></Link>
                    <Link href="https://ko-fi.com/tunnelvzn"><a tabIndex="0" aria-label="ko-fi donation page" className={styles.footerLink} target="_blank"><Icon icon="simple-icons:kofi" width="24" height="24" className={styles.iconStyle} /></a></Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;