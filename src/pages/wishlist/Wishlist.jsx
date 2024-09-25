import React from 'react'
import styles from "./Wishlist.module.css"
import { Link } from 'react-router-dom'; 
import Card from "../user/components/Card"; 

function Wishlist() {
    let wishlistArr = JSON.parse(localStorage.getItem("wishlist"))
    let check = false; 
    return (
        <div>
            <div className={styles.header}>
                <h1>Wishlist</h1>
                <div className={styles.links}><Link to='/' className={styles.link}>Home</Link> <hr className={styles.hr} /><Link to="/wishlist" className={styles.link}>Wishlist</Link></div>
            </div>
            <div className={styles.products}>
                {
                    wishlistArr && wishlistArr.map(elem => {
                        check = wishlistArr.find(prod => prod.id == elem.id); 

                        console.log(check);
                        return (
                            <Card
                                check = {check} 
                                key={elem.id}
                                id= {elem.id}
                                name={elem.name}
                                img={elem.img}
                                price={elem.price}
                                withoutDiscount={elem.withoutDiscount}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wishlist