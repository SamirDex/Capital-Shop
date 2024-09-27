import React, { useState, useEffect } from 'react';
import styles from "./Basket.module.css";
import { Link } from 'react-router-dom'; 
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
                const updatedBasket = basketArr.filter(product => product.id !== id);
                setBasketArr(updatedBasket);
                localStorage.setItem("basket", JSON.stringify(updatedBasket));
                delete prev[id];
                return { ...prev };
            }

            updateBasketInLocalStorage(id, newQty);
            return { ...prev, [id]: newQty };
        });
    };
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
                                        <Td><div className={styles.productName}>{product.name}</div></Td>
                                        <Td>{product.size}</Td>
                                        <Td>{product.color}</Td>
                                        <Td>${product.price}</Td>
                                        <Td isNumeric className={styles.quantity}>
                                            <input type="text" value={quantities[product.id] || product.count} readOnly />
                                            <div className={styles.buttons}>
                                                <div onClick={() => handleDecrement(product.id)}>
                                                    <FaMinus />
                                                </div>
                                                <div onClick={() => handleIncrement(product.id)}>
                                                    <FaPlus />
                                                </div>
                                            </div> 
                                        </Td>
                                        <Td isNumeric>
                                            <div style={{width: "5rem", textAlign:"center"}}>
                                                ${((quantities[product.id] || product.count) * product.price).toFixed(2)}
                                            </div>
                                        </Td>
                                        <Td>< MdDelete className={styles.delete}/></Td>
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
                    <Link>Continue Shopping</Link>
                    <Link></Link>
                </div>
            </div> 

        </div>
    );
}

export default Basket;
