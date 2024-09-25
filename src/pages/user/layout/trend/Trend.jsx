import React,{useState, useEffect} from 'react'
import styles from "./Trend.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/Card';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { testimonials } from '../../../../data/Data';
import {getAllproducts} from "../../../../middleware/products"

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


function Trend() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllproducts().then(res => {
            setProducts(res)
            // console.log(res);
        })
        
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: true, 
    };

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
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} pauseOnHover={true} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
                    {products && products.map((item) => (
                        <Card
                            key={item.id}
                            id= {item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            withoutDiscount={item.withoutDiscount}
                            products ={products}
                        />
                    ))}
                </Carousel>
            </div>
            <div className={styles.testimonial}>
                <Slider {...settings}>
                    {testimonials && testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.innerContainer}>
                        <h1>Customer Testimonial</h1>
                        <p>{testimonial.text}</p>
                        <div className={styles.author}>
                        <div className={styles.profile}>
                            <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.authorName}>{testimonial.name}</span>
                            <p className={styles.specialty}>{testimonial.specialty}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Trend