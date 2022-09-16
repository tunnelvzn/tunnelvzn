import styles from './NavBar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Subnav from './Subnav'
import { useState } from 'react'

// content at the top of the page
const Navbar = () => {
    const [nav, setNav] = useState(false)
    function toggleMenu() {
        console.log('toggle menu', nav)
        setNav(!nav)
        document.getElementById('openMenu').classList.toggle('d-none')
        document.getElementById('closeMenu').classList.toggle('d-none')
    }
    return (
        <>
            <div className='w-100 d-flex text-center justify-content-between ms-1 me-1'>
                <Image src='/icons/volumeYes.svg' height={30} width={30} className={styles.topButtons}/>
                <h5 className={`${styles.logoFont} m-2`}><Link href="/"><a>Tunnel_vzn</a></Link></h5>
                <div className={styles.topButtons}>
                    <Image className="btn" id="openMenu" src='/icons/hambermenu.svg' height={30} width={30} onClick={()=> {toggleMenu()}}/>
                    <Image className="btn d-none" id="closeMenu" src='/icons/xmenu.svg' height={30} width={30} onClick={()=> {toggleMenu()}}/>
                </div>
            </div>
            <Subnav show={nav}/>
        </>
    );
}

export default Navbar;