import React from 'react'
import styles from "./Nopage.module.css"
import { Link } from 'react-router-dom'
import { TfiFaceSad } from "react-icons/tfi";

function Nopage() {
    return (
        
        <div className={styles.container}>
            <div className={styles.header}><span className={styles.error}>4</span><TfiFaceSad className={styles.sad}/><span className={styles.error}>4</span>   Page Not Found.</div>
            <div className={styles.description}>Oops! The page you're looking for cannot be found.</div>
            <div className={styles.goHome}><Link to="/" className={styles.goHomeLink}>Go to Home</Link></div>
            
        </div>
        
    )
}

export default Nopage