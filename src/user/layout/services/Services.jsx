import React from 'react'
import styles from "./Services.module.css"; 

function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.service}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg" alt="" />
                <h1>Fast & Free Delivery</h1>
                <p>Free delivery on all orders</p>
            </div>
            <div className={styles.service}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg" alt="" />
                <h1>Secure Payment</h1>
                <p>Free delivery on all orders</p>
            </div>
            <div className={styles.service}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg" alt="" />
                <h1>Money Back Guarantee</h1>
                <p>Free delivery on all orders</p>
            </div>
            <div className={styles.service}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg" alt="" />
                <h1>Online Support</h1>
                <p>Free delivery on all orders</p>
            </div>
        </div>
    )
}

export default Services