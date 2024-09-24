import styles from "./Card.module.css"
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Card({ name, price, withoutDiscount, img,id }) {

    // console.log(id);
    const navigate = useNavigate(); 


    return (
        <div className={styles.Card}>
            <Link className={styles.DetailLink} onClick={() => navigate("/detail/" +id )}>
                <div className={styles.tools}>
                    <div className={styles.tool}>
                        <PiShoppingCartLight />
                    </div>
                    <div className={styles.tool}>
                        <IoIosHeartEmpty />
                    </div>
                    <div className={styles.tool}>
                        <IoIosSearch />
                    </div>
                </div>
                <div className={styles.cardName}>
                    <img src={img} alt=""  className={styles.cardImage}/>
                </div>
                <div className={styles.CardBody}>
                    <a href='' className={styles.CardLink}>{name}</a>
                    <div className={styles.price}>
                        <div className={styles.with}>${price} </div>
                        <div className={styles.without}>${withoutDiscount}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card