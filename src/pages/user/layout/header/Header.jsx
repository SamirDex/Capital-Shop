import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import logo from "../../../../images/logo.png"
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";

function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.middle}>
                    <ul className={styles.header}>
                        <li className={styles.headerItem}>  
                            <Link to="/" className={styles.headerLink}>Home</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/user" className={styles.headerLink}>Men</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/user" className={styles.headerLink}>Women</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/user" className={styles.headerLink}>Baby Collection</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/contact" className={styles.headerLink}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <CiSearch className={styles.icon}/>
                    <LuUser2 className={styles.icon}/>
                    <SlBasket className={styles.icon}/>
                </div>
            </div>
            <div className={styles.discount}>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link className={styles.shop}>Shop Now</Link>
            </div>

        </>
    )
}

export default Header