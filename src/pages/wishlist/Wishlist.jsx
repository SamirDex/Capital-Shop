import React, { useEffect, useState } from 'react';
import styles from "./Wishlist.module.css";
import { Link } from 'react-router-dom'; 
import Card from "../user/components/Card"; 

function Wishlist() {
    const [wishlistArr, setWishlistArr] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistArr(storedWishlist);
    }, []); 

    return (
        <div>
            <div className={styles.header}>
                <h1>Wishlist</h1>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>Home</Link> 
                    <hr className={styles.hr} />
                    <Link to="/wishlist" className={styles.link}>Wishlist</Link>
                </div>
            </div>
            <div className={styles.products}>
                {
                    wishlistArr.length > 0 ? (
                        wishlistArr.map(elem => (
                            <Card
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                img={elem.img}
                                price={elem.price}
                                withoutDiscount={elem.withoutDiscount}
                                products={wishlistArr} 
                            />
                        ))
                    ) : (
                        <p>Your wishlist is empty.</p> 
                    )
                }
            </div>
        </div>
    );
}

export default Wishlist;
