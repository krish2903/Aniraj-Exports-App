import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../../Components/Main/header.js";
import styles from "./landing_page.module.css";
import Slideshow from "../../Components/Slideshow/slideshow.js";

function MainHome() {
    document.title = "Landing Page";
    const [discoverClicked, setDiscoverClick] = useState(false);

    const handleDiscoverClick = () => {
        setDiscoverClick(true);
    };

    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.vidContainer}>
                    <video autoPlay loop muted className={styles.videoBg}>
                        <source src="bg1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.heading}>
                    <h1>Explore</h1>
                    <h2>Our Latest Collections</h2>
                    {!discoverClicked && (
                        <div className={styles.discoverButton} onClick={handleDiscoverClick}>
                            <p>Discover Now</p>
                            <span>
                                <svg width="15" height="15" viewBox="0 0 15 15">
                                    <defs>
                                        <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                                    </defs>
                                    <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                                </svg>
                            </span>
                        </div>
                    )}
                    <div className={`${styles.searchBar} ${discoverClicked ? styles.showSearchBar : ''}`}>
                        <input type="text" placeholder="What are you looking for today?" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path fill="none" d="M0 0h24v24H0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <Slideshow />
            </div>
            <div className={`${styles.mainContainer} ${styles.forText}`}>
                <img className={styles.textBg} alt="Designed By Freepik" src="./bg.jpg" />
                <div className={styles.imgContainer}>
                    <img className={styles.dmImprint} src="./dm.svg" />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <h2>Our</h2>
                        <h1>Commitment</h1>
                    </div>
                    <p>We are deeply committed to crafting exquisite pieces that capture the essence of elegance and timeless beauty.
                        Our mission is to offer meticulously designed jewelry that reflects the unique style and personality of each
                        individual. We pride ourselves on our unwavering dedication to quality craftsmanship, using only the finest
                        materials and ethically sourced diamonds. Beyond creating stunning pieces, we prioritize delivering exceptional
                        service and creating memorable experiences for our customers. With every creation, we aim to inspire confidence
                        and celebrate the moments that matter most in life.</p>
                    <div className={styles.joinButton} >
                        <p>Join Us</p>
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15">
                                <defs>
                                    <path id="c9ovtw" d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z" />
                                </defs>
                                <use fill="currentColor" fillRule="evenodd" transform="matrix(-1 0 0 1 15 0)" xlinkHref="#c9ovtw" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHome;
