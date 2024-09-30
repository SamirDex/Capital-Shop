import React, {useEffect, useState} from 'react'
import styles from "./Dashboard.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import { getAllproducts } from "./../../../middleware/products"; 
import { Link, useNavigate } from 'react-router-dom';
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
                            <Tr>
                                <Th width="10%">#</Th>
                                <Th width="100%">Image</Th>
                                <Th width="20%">Name</Th>
                                <Th width="15%">Category</Th>
                                <Th width="10%">Size</Th>
                                <Th width="10%">Color</Th>
                                <Th isNumeric width="10%">Price</Th>
                                <Th isNumeric width="15%">Regular Price</Th>
                                <Th isNumeric width="10%">Discount</Th>
                                <Th isNumeric width="10%">Discount</Th>
                                <Th isNumeric width="10%">Discount</Th>
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
                                            <Td>{product.size ? product.size : ""}</Td>
                                            <Td>{product.color}</Td>
                                            <Td isNumeric>${product.price}</Td>
                                            <Td isNumeric>${product.withoutDiscount}</Td>
                                            <Td isNumeric>-{((product.withoutDiscount - product.price) / product.withoutDiscount * 100).toFixed(0)}%</Td>
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