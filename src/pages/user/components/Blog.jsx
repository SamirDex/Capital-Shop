import React from 'react'
import styles from "./Blog.module.css"

function Blog({ name, description, img}) {
    return (
        <div className={styles.BlogCard}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className={styles.upheader}>Fashion Tips</p>
                <h1>{name}</h1>
                <p className={styles.description}>{description}</p>
                <a href="" className={styles.blogLink}>Read More</a>
            </div>
        </div>
    )
}

export default Blog