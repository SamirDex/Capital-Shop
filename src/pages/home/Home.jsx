import React,  {useState, useEffect, useContext} from 'react'
import Slider from '../user/layout/slider/Slider'
import Trend from '../user/layout/trend/Trend'
import MayLike from '../user/layout/mayLike/MayLike'
import News from '../user/layout/News/News'
import Services from '../user/layout/services/Services'
import {getAllproducts} from "../../middleware/products"
import { LoginContext } from "../../App";

function Home() {

    const [products, setProducts] = useState([]);
    const {isAdmin, setIsAdmin } = useContext(LoginContext); 

    useEffect(() => {
        getAllproducts().then(res => {
            setProducts(res)
            // console.log(res);
        })
        
    }, []);

    return (
        <div>
            <Slider />
            <Trend />
            <MayLike products={products}/>
            <News />
            <Services />
        </div>
    )
}

export default Home