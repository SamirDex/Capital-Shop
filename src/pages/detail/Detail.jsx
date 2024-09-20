import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { base_url } from "../../data/Data"
import styles from "./Detail.module.css"
import { Link } from 'react-router-dom';

function Detail() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios(`${base_url}products/${id}`).then(res => {
            setProduct(res.data); 
        })
    }, [id])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Product Detail</h1>
                <div className={styles.links}><Link to='/' className={styles.link}>Home</Link> <hr className={styles.hr} /><Link to="/contact" className={styles.link}>Product Detail</Link></div>
            </div>
            {product ? (
                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <img src={product.img}/>
                    </div>
                    <div className={styles.content}>
                        <div>
                            <h1>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h1>
                            <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                        </div>
                        <div>
                            <h1>{product.price}</h1>
                            <span>{product.withoutDiscount}</span>
                        </div>
                        <div>
                            <span>Color: {product.color.charAt(0).toUpperCase() + product.color.slice(1)}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    )
}

export default Detail