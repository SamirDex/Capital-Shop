import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import { base_url } from '../../data/Data';
import Card from '../user/components/Card';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const categories = [
    "men's clothing",
    "women's clothing",
    "baby's clothing",
    "accessory"
];
const sizes = [
    "small",
    "medium",
    "large"
];
const colors = [
    "multi-colored",
    "black",
    "green",
    "red",
    "white",
    "blue",
    "gray",
    "brown"
];

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({
        category: '',
        color: '',
        size: '',
    });
    const [openCategory, setOpenCategory] = useState('');

    const handleOpenCategory = (type) => {
        setOpenCategory((prev) => (prev === type ? '' : type));
    };

    const handleCategoryClick = (category, type) => {
        setSelectedCategory((prev) => ({
            ...prev,
            [type]: category,
        }));
        setOpenCategory('');
    };

    useEffect(() => {
        axios(`${base_url}products`).then(res => setProducts(res.data));
    }, []);

    const filteredProducts = products.filter((prod) => {
        const matchesCategory = selectedCategory.category ? prod.category === selectedCategory.category : true;
        const matchesSize = selectedCategory.size ? prod.size === selectedCategory.size : true;
        const matchesColor = selectedCategory.color ? prod.color === selectedCategory.color : true;

        return matchesCategory && matchesSize && matchesColor;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Products</h1>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>Home</Link>
                    <hr className={styles.hr} />
                    <Link to="/products" className={styles.link}>Products</Link>
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.left}>
                    <div className={styles.content}>
                        <div className={styles.categories}>
                            {["category", "size", "color"].map((type, index) => (
                                <div className={styles.category} key={index}>
                                    <div className={styles.dropdown} onClick={() => handleOpenCategory(type)}>
                                        <div className={styles.selected}>
                                            <span>{selectedCategory[type] || `Select ${type.charAt(0).toUpperCase() + type.slice(1)}`}</span>
                                            <span className={`${styles.arrow} ${openCategory === type ? styles.open : ''}`}>
                                                {openCategory === type ? <FaChevronUp style={{ color: "#bab9b5" }} /> : <FaChevronDown style={{ color: "#bab9b5" }} />}
                                            </span>
                                        </div>
                                        <ul className={`${styles.list} ${openCategory === type ? styles.open : ''}`}>
                                            {(type === 'category' ? categories : type === 'size' ? sizes : colors).map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => {
                                                        handleCategoryClick(item, type);
                                                        handleOpenCategory(type);
                                                    }}
                                                    className={selectedCategory[type] === item ? "active" : ""}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className={styles.filter}>

                        </div>
                        <div className={styles.sort}></div>
                    </div>
                </div>
                <div className={styles.right}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((prod) => (
                            <Card
                                id={prod.id}
                                key={prod.id}
                                name={prod.name}
                                img={prod.img}
                                price={prod.price}
                                withoutDiscount={prod.withoutDiscount}
                            />
                        ))
                    ) : <p>No products found.</p>}
                </div>
            </div>
        </div>
    );
}

export default Products;
