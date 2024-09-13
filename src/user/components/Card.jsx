import React from 'react'
import styles from "./Card.module.css"
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function Card({ name, price, withoutDiscount, img }) {
    return (
        <div className={styles.Card}>
            <div className={styles.tools}>
                <div className={styles.tool}>
                    <PiShoppingCartLight />
                </div>
                <div className={styles.tool}>
                    <IoIosHeartEmpty />
                </div>
                <div className={styles.tool}>
                    <IoIosSearch />
                </div>
            </div>
            <div className={styles.cardName}>
                <img src={img} alt=""  className={styles.cardImage}/>
            </div>
            <div className={styles.CardBody}>
                <a href='' className={styles.CardLink}>{name}</a>
                <div className={styles.price}>
                    <div className={styles.with}>${price}.00 </div>
                    <div className={styles.without}>${withoutDiscount}.00</div>
                </div>
            </div>
        </div>
    )
}

export default Card