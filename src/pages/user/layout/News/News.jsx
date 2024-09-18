import React from 'react'
import styles from "./News.module.css"
import {news} from "../../../../data/Data"; 
import Blog from '../../components/Blog';


function News() {
    return (
        <div className={styles.container}>
            <h1 style={{textAlign:'center', marginTop:"8rem", lineHeight:1.4, fontSize:'30px', paddingTop:"5rem"}}>Latest News</h1>
            <div className={styles.CardContainer}>
                {news && news.map((blog, i) => (
                    <Blog name={blog.name} description={blog.description} key={i} img={blog.img}/>
                ))}
            </div>
        </div>
    )
}

export default News