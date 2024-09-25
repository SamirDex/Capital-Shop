import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { Link } from 'react-router-dom';
import Card from '../user/components/Card';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { getAllproducts } from "./../../middleware/products"; 

const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "baby's clothing",
    "accessory"
];
const sizes = [
    "All",
    "small",
    "medium",
    "large"
];
const colors = [
    "All",
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
    const [filters, setFilters] = useState({
        category: 'All',
        color: 'All',
        size: 'All',
    });
    const [openFilter, setOpenFilter] = useState('');

    const toggleFilterDropdown = (filterType) => {
        setOpenFilter(prev => prev === filterType ? '' : filterType);
    };

    const handleFilterChange = (value, filterType) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value,
        }));
        setOpenFilter('');
    };

    useEffect(() => {
        getAllproducts().then(res => {
            setProducts(res);
        });
    }, []);

    const filteredProducts = products.filter((product) => {
        const categoryMatch = filters.category === 'All' || product.category === filters.category;
        const sizeMatch = filters.size === 'All' || product.size === filters.size;
        const colorMatch = filters.color === 'All' || product.color === filters.color;

        return categoryMatch && sizeMatch && colorMatch;
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
                            {["category", "size", "color"].map((filterType, index) => (
                                
                                <div className={styles.category} key={index}>
                                    <div className={styles.dropdown} onClick={() => toggleFilterDropdown(filterType)}>
                                        <div className={styles.selected}>
                                            <span>{filters[filterType] !== "All" ? filters[filterType] : `Select ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`}</span>
                                            <span className={`${styles.arrow} ${openFilter === filterType ? styles.open : ''}`}>
                                                {openFilter === filterType ? <FaChevronUp style={{ color: "#bab9b5" }} /> : <FaChevronDown style={{ color: "#bab9b5" }} />}
                                            </span>
                                        </div>
                                        <ul className={`${styles.list} ${openFilter === filterType ? styles.open : ''}`}>
                                            {(filterType === 'category' ? categories : filterType === 'size' ? sizes : colors).map((item, idx) => (
                                                <li
                                                key={idx}
                                                onClick={() => {
                                                    handleFilterChange(item, filterType);
                                                    toggleFilterDropdown(filterType); 
                                                }}
                                                className={filters[filterType] === item ? styles.active : ""}
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
                                products ={products}
                            />
                        ))
                    ) : <p>No products found.</p>}
                </div>
            </div>
        </div>
    );
}

export default Products;
