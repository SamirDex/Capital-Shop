import React, {useEffect, useState} from 'react'
import styles from "./Dashboard.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import { getAllproducts } from "./../../../middleware/products"; 
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


function Dashboard() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        getAllproducts().then(res => {
            setProducts(res)
            // console.log(res);
        })
        
    }, []);

    return (
        <ChakraProvider>
            <div className={styles.dashboardContainer}>
                <TableContainer style={{maxWidth:"100%"}}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr className={styles.dashboardTr}>
                                <Th width="5%">#</Th>
                                <Th width="10%">Image</Th>
                                <Th width="15%">Name</Th>
                                <Th width="10%">Category</Th>
                                <Th  width="10%">Price</Th>
                                <Th  width="10%">Regular Price</Th>
                                <Th  width="5%">Discount</Th>
                                <Th  width="2%">Delete</Th>
                                <Th  width="2%">Edit</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                products && products.map((product) => {
                                    return (
                                        <Tr key={product.id}>
                                            <Td>{product.id}</Td>
                                            <Td><Link onClick={() => navigate("/detail/" + product.id)}><img src={product.img} alt="" /></Link></Td>
                                            <Td>{product.name}</Td>
                                            <Td>{product.category}</Td>
                                            <Td >${product.price}</Td>
                                            <Td >${product.withoutDiscount}</Td>
                                            <Td >-{((product.withoutDiscount - product.price) / product.withoutDiscount * 100).toFixed(0)}%</Td>
                                            <Td ><MdDelete className={`${styles.dashboardIcon} ${styles.delete}`}/></Td>
                                            <Td><FaRegEdit className={`${styles.dashboardIcon} ${styles.edit}`} /></Td>
                                        </Tr>
                                    )
                                })
                            }
                           
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </ChakraProvider>
    )
}

export default Dashboard