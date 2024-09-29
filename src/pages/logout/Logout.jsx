import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from "./Logout.module.css"
import { LoginContext } from "../../App";

function Logout() {
    const { isLogin, setIsLogin } = useContext(LoginContext);

    const handleLogout = () => {
        setIsLogin(false)
    }


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Logout</h1>
                    <p>You are already logged in.</p>
                </div>
                <div className={styles.logout}>
                    <Link to="/" className={styles.logoutLink}>Home</Link>
                    <Link to="/products" className={styles.logoutLink}>Products</Link>
                    <Link className={styles.logoutLink} onClick={handleLogout} to="/login">Logout</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Logout