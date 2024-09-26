import styles from "./Card.module.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Card({ name, price, withoutDiscount, img, id, products }) {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false); 

    const navigate = useNavigate(); 

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
        const product = products.find((elem) => elem.id == id);

        if (isInWishlist) {
            wishlistArr = wishlistArr.filter((item) => item.id != id);
        } else {
            wishlistArr.push(product);
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        setIsInWishlist(!isInWishlist);
    };

    const handleCartClick = (e) => {
        e.stopPropagation(); 
        const cartArr = JSON.parse(localStorage.getItem("basket")) || []; 
        const product = products.find(elem => elem.id == id); 

        const existingProduct = cartArr.find(elem => elem.id == id);
        if (existingProduct) {
            existingProduct.count += 1;
        } else {
            cartArr.push({ ...product, count: 1 }); 
        }
        
        localStorage.setItem("basket", JSON.stringify(cartArr)); 
        setIsInCart(true); 
    }

    return (
        <div className={styles.Card}>
            <Link className={styles.DetailLink} onClick={() => navigate("/detail/" + id)}>
                <div className={styles.tools}>
                    <div className={styles.tool} onClick={handleCartClick}>
                        <PiShoppingCartLight />
                    </div>
                    <div className={styles.tool} onClick={handleWishlistClick}>
                        {isInWishlist ? <IoIosHeart /> : <IoIosHeartEmpty />}
                    </div>
                    <div className={styles.tool}>
                        <IoIosSearch />
                    </div>
                </div>
                <div className={styles.cardName}>
                    <img src={img} alt="" className={styles.cardImage} />
                </div>
                <div className={styles.CardBody}>
                    <a href="" className={styles.CardLink}>{name}</a>
                    <div className={styles.price}>
                        <div className={styles.with}>${price} </div>
                        <div className={styles.without}>${withoutDiscount}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
