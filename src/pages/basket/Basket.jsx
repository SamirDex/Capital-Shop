import React, { useState, useEffect } from 'react';
import styles from "./Basket.module.css";
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { style } from 'framer-motion/client';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';

function Basket() {
    const navigate = useNavigate();
    const [basketArr, setBasketArr] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [quantities, setQuantities] = useState({}); 

    const handleIncrement = (id) => {
        setQuantities(prev => {
            const newQty = (prev[id] || 1) + 1;
            updateBasketInLocalStorage(id, newQty);
            return { ...prev, [id]: newQty };
        });
    };

    const handleDecrement = (id) => {
        setQuantities(prev => {
            const newQty = (prev[id] || 1) - 1;
            if (newQty <= 0) {
                handleDelete(id);
                return prev;
            }

            updateBasketInLocalStorage(id, newQty);
            return { ...prev, [id]: newQty };
        });
    };

    const handleDelete = (id) => {
        const updatedBasket = basketArr.filter(item => item.id !== id); 
        setBasketArr(updatedBasket); 
        localStorage.setItem("basket", JSON.stringify(updatedBasket)); 

        setQuantities(prev => {
            const updatedQuantites = {...prev}; 
            delete updatedQuantites[id]; 
            return updatedQuantites; 
        }) 
    }

    const updateBasketInLocalStorage = (id, newQty) => {
        const updatedBasket = basketArr.map(product => 
            product.id === id ? { ...product, count: newQty } : product
        );
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
        setBasketArr(updatedBasket);
    };

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasketArr(storedBasket);

        const initialQuantities = {};
        storedBasket.forEach(product => {
            initialQuantities[product.id] = product.count || 1; 
        });
        setQuantities(initialQuantities);
    }, []); 

    useEffect(() => {
        const total = basketArr.reduce((acc, product) => {
            const qty = quantities[product.id] || product.count;
            return acc + (product.price * qty);
        }, 0);
        setTotalPrice(total);
    }, [basketArr, quantities]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Product Detail</h1>
                <div className={styles.links}>
                    <Link to='/' className={styles.link}>Home</Link>
                    <hr className={styles.hr} />
                    <Link to="/basket" className={styles.link}>Cart</Link>
                </div>
            </div>

            <div className={styles.basket}>
                <TableContainer className={styles.tableContainer}>
                    <Table variant='simple' className={styles.table}>
                        <Thead className={styles.thead}>
                            <Tr>
                                <Th>Image</Th>
                                <Th>Product</Th>
                                <Th>Size</Th>
                                <Th>Color</Th>
                                <Th>Price</Th>
                                <Th isNumeric>Quantity</Th>
                                <Th isNumeric>Total</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody className={styles.tbody}>
                            {basketArr && basketArr.map(product => {
                                return (
                                    <Tr className={styles.tr} key={product.id}>
                                        <Td className={styles.productImage}>
                                            <Link onClick={() => navigate("/detail/" + product.id)}><img src={product.img} alt="" /></Link>
                                        </Td>
                                        <Td><div className={styles.productName}>{product.name}</div></Td>
                                        <Td>{product.size}</Td>
                                        <Td>{product.color}</Td>
                                        <Td>${product.price}</Td>
                                        <Td isNumeric className={styles.quantity}>
                                            <div className={styles.count}>
                                                <input type="text" value={quantities[product.id] || product.count} readOnly />
                                                <div className={styles.buttons}>
                                                    <div className={`${styles.increment}`} onClick={() => handleIncrement(product.id)}>
                                                        <GoPlus />
                                                    </div>
                                                    <div className={`${styles.decrement}`} onClick={() => handleDecrement(product.id)}>
                                                        <FiMinus />
                                                    </div>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td isNumeric>
                                            <div style={{width: "5rem", textAlign:"center"}}>
                                                ${((quantities[product.id] || product.count) * product.price).toFixed(2)}
                                            </div>
                                        </Td>
                                        <Td>< MdDelete className={styles.delete} onClick={() => handleDelete(product.id)}/></Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>

                <div className={styles.subtotal}>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span> 
                </div>

                <div className={styles.Buttons}>
                    <Link className={styles.goToMenu} to="/products"><span>Continue Shopping</span></Link>
                    <Link className={styles.Checkout}><span>Proceed to checkout</span></Link>
                </div>
            </div> 

        </div>
    );
}

export default Basket;
