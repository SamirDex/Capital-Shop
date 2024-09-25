import React, {useEffect, useState} from 'react'
import styles from "./Dashboard.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import { getAllproducts } from "./../../../middleware/products"; 

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
                                <Th>#</Th>
                                <Th>Name</Th>
                                <Th>Category</Th>
                                <Th>Size</Th>
                                <Th>Color</Th>
                                <Th isNumeric>Price</Th>
                                <Th isNumeric>Regular Price</Th>
                                <Th isNumeric>Discount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                products && products.map((product) => {
                                    return (
                                        <Tr key={product.id}>
                                            <Td>{product.id}</Td>
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