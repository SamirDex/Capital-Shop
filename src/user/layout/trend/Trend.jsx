import React from 'react'
import styles from "./Trend.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/Card';
import { data } from "../../../data/Data"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const CustomLeftArrow = ({ onClick }) => {
    return (
        <button className={styles.customLeftArrow} onClick={onClick}>
            <FaChevronLeft />
        </button>
    );
};

// Özel Sağ Ok
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


function Trend() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>Trending This Week</h1>
                </div>
                <div>
                    <ul className={styles.nav}>
                        <li className={styles.headerItem}>
                            <a href="" className={styles.headerLink} >Men</a>
                        </li>
                        <li className={styles.headerItem}>
                            <a href="" className={styles.headerLink}>Women</a>
                        </li>
                        <li className={styles.headerItem}>
                            <a href="" className={styles.headerLink}>Baby</a>
                        </li>
                        <li className={styles.headerItem}>
                            <a href="" className={styles.headerLink}>Fashion</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.cardContainer}>
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} pauseOnHover={true} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                    {data && data.map((item, i) => (
                        item.category === "clothes" && (
                            <Card
                                key={i}
                                name={item.name}
                                img={item.img}
                                price={item.price}
                                withoutDiscount={item.withoutDiscount}
                            />
                        )
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Trend