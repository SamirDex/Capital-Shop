import React from 'react'
import styles from "./Footer.module.css" 
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.newsletter}>
                <div className={styles.header}>
                    <h1>Subscribe Newsletter</h1>
                    <p>Subscribe newsletter to get 5% on all products.</p>
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
                <div className={styles.social}>
                    <FaFacebook className={styles.icon}/>
                    <FaInstagram className={styles.icon}/>
                    <FaYoutube className={styles.icon}/>
                </div>

            </div>
            <div className={styles.links}></div>
            <div className={styles.copyright}></div>
        </div>
    )
}

export default Footer