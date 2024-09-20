import React from 'react'
import styles from "./Products.module.css"
import { Link } from 'react-router-dom'
import { base_url } from '../../data/Data'
import Card from '../user/components/Card'
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const categories = [
    [
        "Men's Clothing",
        "Women's Clothing",
        "Baby's clothing",
        "Accessory"
    ],
];

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };
    useEffect(() => {
        axios(base_url + "products").then(res => setProducts(res.data)); 
    }, [])

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Products</h1>
                <div className={styles.links}><Link to='/' className={styles.link}>Home</Link> <hr className={styles.hr} /><Link to="/products" className={styles.link}>Products</Link></div>
            </div>
            <div className={styles.products}>
                <div className={styles.left}>
                    <div className={styles.content}>
                        <div className={styles.categories}>
                            <div className={styles.category}>
                                <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
                                <div className={styles.selected} onClick={toggleDropdown}>
                                        <span>{selectedCategory || "Select Category"}</span>
                                        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
                                            {isOpen ? <FaChevronUp style={{color:"#bab9b5"}}/> : <FaChevronDown style={{color:"#bab9b5"}}/>}
                                        </span>
                                    </div>
                                    <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
                                        {categories[0].map((category, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleCategoryClick(category)}
                                                className={selectedCategory === category ? "active" : ""}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.filter}></div>
                        <div className={styles.sort}></div>
                    </div>
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