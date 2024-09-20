import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import { base_url } from '../../data/Data';
import Card from '../user/components/Card';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Baby's Clothing",
    "Accessory"
];
const size = [
    "Small",
    "Medium",
    "Large"
];
const color = [
    "Multi-colored",
    "Black",
    "Green",
    "Red",
    "White",
    "Blue",
    "Gray",
    "Brown"
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
                            <div className={styles.category}>
                                <div className={styles.dropdown} onClick={() => handleOpenCategory("category")}>
                                    <div className={styles.selected}>
                                        <span>{selectedCategory.category || "Select Category"}</span>
                                        <span className={`${styles.arrow} ${openCategory === 'category' ? styles.open : ''}`}>
                                            {openCategory === 'category' ? <FaChevronUp style={{ color: "#bab9b5" }} /> : <FaChevronDown style={{ color: "#bab9b5" }} />}
                                        </span>
                                    </div>
                                    <ul className={`${styles.list} ${openCategory === 'category' ? styles.open : ''}`}>
                                        {categories.map((cat, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    handleCategoryClick(cat, "category");
                                                    handleOpenCategory("category");
                                                }}
                                                className={selectedCategory.category === cat ? "active" : ""}
                                            >
                                                {cat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.category}>
                                <div className={styles.dropdown} onClick={() => handleOpenCategory("size")}>
                                    <div className={styles.selected}>
                                        <span>{selectedCategory.size || "Select Size"}</span>
                                        <span className={`${styles.arrow} ${openCategory === 'size' ? styles.open : ''}`}>
                                            {openCategory === 'size' ? <FaChevronUp style={{ color: "#bab9b5" }} /> : <FaChevronDown style={{ color: "#bab9b5" }} />}
                                        </span>
                                    </div>
                                    <ul className={`${styles.list} ${openCategory === 'size' ? styles.open : ''}`}>
                                        {size.map((s, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    handleCategoryClick(s, "size");
                                                    handleOpenCategory("size");
                                                }}
                                                className={selectedCategory.size === s ? "active" : ""}
                                            >
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.category}>
                                <div className={styles.dropdown} onClick={() => handleOpenCategory("color")}>
                                    <div className={styles.selected}>
                                        <span>{selectedCategory.color || "Select Color"}</span>
                                        <span className={`${styles.arrow} ${openCategory === 'color' ? styles.open : ''}`}>
                                            {openCategory === 'color' ? <FaChevronUp style={{ color: "#bab9b5" }} /> : <FaChevronDown style={{ color: "#bab9b5" }} />}
                                        </span>
                                    </div>
                                    <ul className={`${styles.list} ${openCategory === 'color' ? styles.open : ''}`}>
                                        {color.map((col, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    handleCategoryClick(col, "color");
                                                    handleOpenCategory("color"); 
                                                }}
                                                className={selectedCategory.color === col ? "active" : ""}
                                            >
                                                {col}
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
                    {products.length > 0 ? (
                        products.map((prod) => (
                            <Card
                                key={prod.id}
                                name={prod.name}
                                img={prod.img}
                                price={prod.price}
                                withoutDiscount={prod.withoutDiscount}
                            />
                        ))
                    ) : <p>Loading products...</p>}
                </div>
            </div>
        </div>
    );
}

export default Products;
