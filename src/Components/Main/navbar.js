import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import DiamondIcon from '../Images/diamond.png';
import { ReactComponent as RingIcon } from '../Images/ring.svg';
import BraceletIcon from '../Images/bracelet.png';
import EarringIcon from '../Images/earrings.png';
import PendantIcon from '../Images/pendant.png';

export default function Navbar(props) {
    const isOpen = props.isOpen;
    const [collectionClick, setCollectionClick] = useState(false);
    const [gradingClick, setGradingClick] = useState(false);

    const handleCollectionClick = () => {
        setCollectionClick(!collectionClick);
    };

    const handleGradingClick = () => {
        setGradingClick(!gradingClick);
    };

    const handleNavReset = () => {
        setCollectionClick(false);
        setGradingClick(false);
    };

    useEffect(() => {
        if (collectionClick) {
            document.getElementById("collectionLinks").style.display = "flex";
            document.getElementById("collectionLinks").style.opacity = "1";
            document.getElementById("mainLinks").style.opacity = "0";
            document.getElementById("mainLinks").style.display = "none";
        } else {
            document.getElementById("collectionLinks").style.display = "none";
            document.getElementById("collectionLinks").style.opacity = "0";
            document.getElementById("mainLinks").style.opacity = "1";
            document.getElementById("mainLinks").style.display = "flex";
        }
    }, [collectionClick]);

    useEffect(() => {
        if (gradingClick) {
            document.getElementById("gradingLinks").style.display = "flex";
            document.getElementById("gradingLinks").style.opacity = "1";
            document.getElementById("mainLinks").style.opacity = "0";
            document.getElementById("mainLinks").style.display = "none";
        } else {
            document.getElementById("gradingLinks").style.display = "none";
            document.getElementById("gradingLinks").style.opacity = "0";
            document.getElementById("mainLinks").style.opacity = "1";
            document.getElementById("mainLinks").style.display = "flex";
        }
    }, [gradingClick]);

    useEffect(() => {
        if (isOpen) {
            handleNavReset();
            document.getElementById("navbar").style.top = `${window.scrollY}px`;
            document.body.style.overflow = "hidden";
            if (window.scrollY > 0) {
                document.getElementById("navbar").style.backdropFilter = "blur(20px) brightness(0.5)";
            }
            else {
                document.getElementById("navbar").style.backdropFilter = "blur(20px) brightness(1)";
            }
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <nav id="navbar" className={`${styles.navbar} ${!isOpen ? styles.closeAnimation : ''}`}>
                <ul id="mainLinks" className={styles.navContainer}>
                    <Link className={styles.navLink} to="/">
                        <p className={styles.navText}>Home</p>
                    </Link>
                    <Link onClick={handleCollectionClick} className={styles.navLink} to="">
                        <p className={styles.navText}>Collections</p>
                        <svg width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                            </defs>
                            <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                        </svg>
                    </Link>
                    <Link onClick={handleGradingClick} className={styles.navLink} to="">
                        <p className={styles.navText}>Grading System</p>
                        <svg width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                            </defs>
                            <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                        </svg>
                    </Link>
                    <Link className={styles.navLink} to="/test_page">
                        <p className={styles.navText}>Contact Us</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <p className={styles.navText}>About Us</p>
                    </Link>
                </ul>
                <ul id="collectionLinks" className={`${styles.collectionsContainer} ${!isOpen ? styles.closeAnimation : ''}`}>
                    <Link onClick={handleCollectionClick} className={`${styles.navLink} ${styles.heading}`} to="">
                        <svg width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                            </defs>
                            <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                        </svg>
                        <p className={styles.navText}>Collections</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <img src={DiamondIcon} className={styles.collectionIcon} />
                        <p className={styles.navText}>Natural diamonds</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <RingIcon className={styles.collectionIcon} />
                        <p className={styles.navText}>Rings</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <img src={BraceletIcon} className={styles.collectionIcon} />
                        <p className={styles.navText}>Bracelets</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <img src={EarringIcon} className={styles.collectionIcon} />
                        <p className={styles.navText}>Earrings</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <img src={PendantIcon} className={styles.collectionIcon} />
                        <p className={styles.navText}>Pendants</p>
                    </Link>
                </ul>
                <ul id="gradingLinks" className={`${styles.gradingContainer} ${!isOpen ? styles.closeAnimation : ''}`}>
                    <Link onClick={handleGradingClick} className={`${styles.navLink} ${styles.heading}`} to="">
                        <svg width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                            </defs>
                            <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                        </svg>
                        <p className={styles.navText}>Grading System</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <p className={styles.navText}>By Properties</p>
                    </Link>
                    <Link className={styles.navLink} to="">
                        <p className={styles.navText}>Grading Chart</p>
                    </Link>
                </ul>
            </nav>
        </>
    );
}
