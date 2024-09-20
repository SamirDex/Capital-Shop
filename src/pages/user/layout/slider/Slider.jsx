import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Slider.module.css"
import hero1 from "../../../../images/h1_hero1.jpg"
import hero2 from "../../../../images/h1_hero2.jpg"
import item1 from "../../../../images/items1.jpg"
import item2 from "../../../../images/items2.jpg"
import item3 from "../../../../images/items3.jpg"
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                
            >
                <SwiperSlide>
                    <div className={styles.slide1}>
                        <div className={styles.context1}>
                            <span>Fashion Sale</span>
                            <h1>Minimal Menz Style</h1>
                            <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                            <Link to="/products" className={styles.shop}>Shop Now</Link>

                        </div>
                        <img src={hero1} alt="" />
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide2}>
                        <div className={styles.context2}>
                            <span>Fashion Sale</span>
                            <h1>Minimal Menz Style</h1>
                            <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                            <Link to="/products">Shop Now</Link>
                        </div>
                        <img src={hero2} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.container}>
                <div className={styles.image}>
                    <h1>Men's Fashion</h1>
                    <Link to="/products">Shop Now</Link>
                    <img src={item1} alt="" />
                </div>
                <div className={styles.image}>
                    <h1>Women's Fashion</h1>
                    <Link to="/products">Shop Now</Link>
                    <img src={item2} alt="" />
                </div>
                <div className={styles.image}>
                    <h1>Baby Fashion</h1>
                    <Link to="/products">Shop Now</Link>
                    <img src={item3} alt="" />
                </div>
            </div>
        </>
    );    
}

export default Slider