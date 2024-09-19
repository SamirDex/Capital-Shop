import React from 'react'
import styles from "./Products.module.css"
import { Link } from 'react-router-dom'
import { base_url } from '../../data/Data'
import Card from '../user/components/Card'
import axios from 'axios';
import { useState, useEffect } from 'react'; 


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(base_url + "products").then(res => setProducts(res.data)); 
    }, [])
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Contact</h1>
                <div className={styles.links}><Link to='/' className={styles.link}>Home</Link> <hr className={styles.hr} /><Link to="/products" className={styles.link}>Products</Link></div>
            </div>
            <div className={styles.products}>
                <div className={styles.left}>
                    
                </div>
                <div className={styles.right}>
                {
                        products.length > 0 ? (
                            products.map((prod) => (
                                <Card key={prod.id}
                                name={prod.name}
                                img={prod.img}
                                price={prod.price}
                                withoutDiscount={prod.withoutDiscount}></Card>
                            ))
                        ):<p>Loading products...</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products