import React from 'react'
import styles from "./MayLike.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/Card';
import { data } from "../../../../data/Data"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button className={styles.customLeftArrow} onClick={onClick}>
            <FaChevronLeft />
        </button>
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <button className={styles.customRightArrow} onClick={onClick}>
            <FaChevronRight />
        </button>
    );
};
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function MayLike( {products} ) {
    return (
        <div className={styles.cardContainer}>
            <h1 className={styles.header}>You May Like</h1>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} pauseOnHover={true} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                {products && products.map((item) => (
                    item.category === "accessory" && (
                        <Card
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            withoutDiscount={item.withoutDiscount}
                            products ={products}
                        />
                    )
                ))}
            </Carousel>
        </div>
    )
}

export default MayLike