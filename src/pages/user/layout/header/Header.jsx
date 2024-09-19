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
                            <Link to="/products" className={styles.headerLink}>Products</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/contact" className={styles.headerLink}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <CiSearch className={styles.icon}/>
                    <Link to="/login" className={styles.Linkicon}>
                        <LuUser2 className={styles.icon}/>
                    </Link>
                    <SlBasket className={styles.icon}/>
                </div>
            </div>
            <div className={styles.discount}>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link className={styles.shop} to='/products'>Shop Now</Link>
            </div>

        </>
    )
}

export default Header