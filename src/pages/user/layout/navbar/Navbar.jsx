import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Navbar() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <Link to="/user" className={styles.navLink}  >About Us</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/user"  className={styles.navLink} >Privacy</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/user" className={styles.navLink} >FAQ</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/user" className={styles.navLink}  >Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <div className={styles.wishlist}>
                        <Link className={styles.navLink} to='/wishlist'>My Wishlist</Link>
                    </div>
                    <div className={styles.order}>
                        <Link className={styles.navLink}>Track Your Order</Link>
                    </div>
                    <div className={styles.social}>
                        <FaFacebook className={styles.Social}/>
                        <IoLogoInstagram className={styles.Social}/>
                        <FaTwitter className={styles.Social}/>
                        <FaLinkedinIn className={styles.Social}/>
                        <FaYoutube className={styles.Social}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar