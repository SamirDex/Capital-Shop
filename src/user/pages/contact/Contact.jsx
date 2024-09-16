import React from 'react'
import styles from "./Contact.module.css" 
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoIosTabletPortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Contact</h1>
                <div className={styles.links}><Link to='/' className={styles.link}>Home</Link> <hr className={styles.hr} /><Link to="/contact" className={styles.link}>Contact</Link></div>
                
            </div>
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202070.14578583458!2d49.690151611573064!3d40.394475512847436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e1!3m2!1str!2saz!4v1726509429462!5m2!1str!2saz" loading="lazy" className={styles.iframe}></iframe>
            </div>
            <div className={styles.form}>
                <div className={styles.left}>
                    <h1>Get in Touch</h1>
                    <form action="">
                        <textarea name="" id="" onFocus="this.placeholder =''" placeholder='Enter Message'></textarea>
                        <div className={styles.col}>
                            <input type="text" placeholder='Enter your name' className={styles.data}/>
                            <input type="text" placeholder='Enter your email address' className={styles.data}/>
                        </div>
                        <input type="text" placeholder='Enter your subject' className={styles.data}/>
                        <button>Send</button>
                    </form>
                </div>
                <div className={styles.right}>
                    <div className={styles.contacts}>
                        <GoHome className={styles.icon}/>
                        <div  className={styles.content}>
                            <h4>Buttonwood, California.</h4>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <IoIosTabletPortrait className={styles.icon}/>
                        <div className={styles.content}>
                            <h4>+1 253 565 2365</h4>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <CiMail className={styles.icon}/>
                        <div  className={styles.content}>
                            <h4>support@colorlib.com</h4>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact