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
                    <input type="text" placeholder='Enter your email' className={styles.email}/>
                    <button>Subscribe</button>
                </div>
                <div className={styles.social}>
                    <FaFacebook className={styles.icon}/>
                    <FaInstagram className={styles.icon}/>
                    <FaYoutube className={styles.icon}/>
                </div>

            </div>
            <div className={styles.links}>
                <div className={styles.logo}>
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png" alt="" />
                </div>
                <div className={styles.footerTitle}>
                    <h4>Shop Men</h4>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Clothing Fashion</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Winter</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Summer</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Formal</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Casual</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerTitle}>
                    <h4>Shop Women</h4>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Clothing Fashion</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Winter</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Summer</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Formal</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Casual</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerTitle}>
                    <h4>Baby Collection</h4>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Clothing Fashion</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Winter</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Summer</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Formal</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Casual</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerTitle}>
                    <h4>Quick Links</h4>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Track Your Order</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Support</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>FAQ</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Carrier</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>About</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLinks}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p className={styles.content}>Copyright ©2024 All rights reserved | This template is made with Samir Habibov by Colorlib</p>
            </div>
        </div>
    )
}

export default Footer