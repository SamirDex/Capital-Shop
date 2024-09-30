import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { base_url } from "../../data/Data";
import styles from "./Detail.module.css";
import { LoginContext } from '../../App';
import { FaTrash } from "react-icons/fa";

function Detail() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const { isInWishlist, setIsInWishlist } = useContext(LoginContext);
    const { isInCart, setIsInCart } = useContext(LoginContext);

    useEffect(() => {
        axios(`${base_url}products/${id}`).then(res => {
            setProduct(res.data); 
        });
    }, [id]); 

    useEffect(() => {
        const wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
        const inWishlist = wishlistArr.some((elem) => elem.id == id);
        const cartArr = JSON.parse(localStorage.getItem("basket")) || [];
        const inCart = cartArr.some(elem => elem.id == id); 
        setIsInWishlist(inWishlist);
        setIsInCart(inCart); 
    }, [id]); 

    const handleWishlistClick = (e) => {
        e.stopPropagation();
        let wishlistArr = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (isInWishlist) {
            wishlistArr = wishlistArr.filter((item) => item.id != id);
        } else {
            wishlistArr.push(product); 
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        setIsInWishlist(!isInWishlist);
    };

    const handleCartClick = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        const cartArr = JSON.parse(localStorage.getItem("basket")) || []; 
        const existingProduct = cartArr.find(elem => elem.id == id);
        
        if (existingProduct) {
            existingProduct.count += 1;
        } else {
            cartArr.push({ ...product, count: 1 }); 
        }
        
        localStorage.setItem("basket", JSON.stringify(cartArr)); 
        setIsInCart(true); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Product Detail</h1>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>Home</Link> 
                    <hr className={styles.hr} />
                    <Link to="/contact" className={styles.link}>Product Detail</Link>
                </div>
            </div>
            {product ? (
                <div className={styles.detail}>
                    <div className={styles.product}>
                        <div className={styles.productImage}>
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}> 
                                <h3>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h3>
                                <p>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                            </div>
                            <div className={styles.color}>
                                <span>Color: {product.color.charAt(0).toUpperCase() + product.color.slice(1)}</span>
                            </div>
                            <div className={styles.price}> 
                                <h1>${product.price}</h1>
                                <span>${product.withoutDiscount}</span>
                            </div>
                            <div className={styles.detailFooter}>
                                <Link className={styles.addToCart} onClick={handleCartClick}><span>Add To Cart</span></Link>
                                <div className={styles.tool} onClick={handleWishlistClick}>
                                    {isInWishlist ? <IoIosHeart /> : <IoIosHeartEmpty />}
                                </div>
                                <Link className={styles.share}><FaShareAlt /></Link>
                            </div>
                        </div>
                    </div>     
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default Detail;
