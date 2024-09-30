import React, { useContext } from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
import logo from "../../../../images/logo.png"
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { LoginContext } from '../../../../App';
import { IoIosLogOut } from "react-icons/io";
import Tooltip from '../../components/Tooltip';
function Header() {
    const {isLogin, setIsLogin} = useContext(LoginContext); 
    const {isAdmin, setIsAdmin } = useContext(LoginContext);
     
    const handleLogin = () => {
        setIsLogin(true)
    }
    const handleLogout = () => {
        setIsLogin(false)
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    
                </div>
                <div className={styles.middle}>
                    <ul className={styles.header}>
                        <li className={styles.headerItem}>  
                            <Link to="/" className={styles.headerLink}>Home</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/products" className={styles.headerLink}>Products</Link>
                        </li>
                        <li className={styles.headerItem}>  
                            <Link to="/contact" className={styles.headerLink}>Contact</Link>
                        </li>
                        {isAdmin ? (
                            <li className={styles.headerItem}>  
                                <Link to="/admin/dashboard" className={styles.headerLink}>Table</Link>
                            </li>
                        ): null}
                    </ul>
                </div>
                <div className={styles.right}>
                    <Tooltip TooltipText="Search">
                        <CiSearch className={styles.icon}/>
                    </Tooltip>
                    <Link to={isLogin ? "/logout" : "login"} className={styles.Linkicon} >
                        <Tooltip TooltipText={isLogin ? "Logout" : "Login" }>
                        {
                            isLogin ? (<IoIosLogOut className={styles.icon}/> ) : <LuUser2 className={styles.icon}/>
                        }
                        </Tooltip>
                    </Link>
                    <Tooltip TooltipText="Basket">
                        <Link to="/basket" className={styles.Linkicon}><SlBasket className={styles.icon}/></Link>
                    </Tooltip>
                    
                </div>
            </div>
            <div className={styles.discount}>
                Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link className={styles.shop} to='/products'>Shop Now</Link>
            </div>

        </>
    )
}

export default Header