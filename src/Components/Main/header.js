import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './header.module.css';
import { ReactComponent as CallIcon } from '../Images/call-icon.svg';
import { ReactComponent as MenuIcon } from '../Images/menu-icon.svg';
import { ReactComponent as CrossIcon } from '../Images/cross-icon.svg';
import Nav from "./navbar.js";

export default function Header(props) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("mainContainer").style.top = "0";
            } else {
                document.getElementById("mainContainer").style.top = "-10rem";
            }
            setPrevScrollPos(currentScrollPos);

            if (window.scrollY > 50) {
                document.getElementById("headerContainer").style.marginTop= "0.1rem";
                document.getElementById("headerContainer").style.paddingBottom= "0.1rem";
                document.getElementById("headerContainer").style.borderBottom= "none";
                document.getElementById("header").style.borderBottom= "1.5pt solid rgba(255, 255, 255, 0.5)";
                document.getElementById("header").style.backdropFilter= "blur(15px) brightness(0.5)";
            }
            else {
                document.getElementById("headerContainer").style.marginTop= "1.5rem";
                document.getElementById("headerContainer").style.paddingBottom= "1.5rem";
                document.getElementById("header").style.borderBottom= "none";
                document.getElementById("headerContainer").style.borderBottom= "1.5pt solid rgba(255, 255, 255, 0.5)";
                document.getElementById("header").style.backdropFilter= "none";
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            {<Nav isOpen={menuClicked} />}
            <div id="mainContainer" className={styles.mainContainer}>
                <nav id="header" className={styles.header}>
                    <div id="headerContainer" className={styles.headerContainer}>
                        <Link data-cursor-type="pointer" onClick={handleMenuClick} className={styles.menuLink}>
                            <MenuIcon className={`${styles.menuIcon} ${!menuClicked ? styles.clicked : ''}`} />
                            <CrossIcon className={`${styles.crossIcon} ${!menuClicked ? '' : styles.clicked}`} />
                            <p className={styles.menuText}>{menuClicked ? 'Close' : 'Menu'}</p>
                        </Link>
                        <Link data-cursor-type="pointer" className={styles.navLink} to="">
                            <img src="./logo.png" />
                        </Link>
                        <Link data-cursor-type="pointer" className={styles.navLink}>
                            <CallIcon className={styles.callIcon} />
                            <p>02 2709 0352</p>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
