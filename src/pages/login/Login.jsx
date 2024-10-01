import React, { useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Login.module.css"; 
import axios from 'axios';
import { base_url } from "./../../data/Data";
import Swal from 'sweetalert2';
import { LoginContext } from "../../App";

function Login() {
    const { isLogin, setIsLogin } = useContext(LoginContext);
    const {isAdmin, setIsAdmin } = useContext(LoginContext); 

    const handleLogout = () => {
        setIsLogin(!isLogin)
    }

    const [submitCount, setSubmitCount] = useState(0); 
    const [users, setUsers] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(base_url + "users").then(res => setUsers(res.data)); 
    }, []);

    const handleSubmitCount = () => {
        setSubmitCount(prevCount => prevCount + 1); 
    };

    const validationSchema = Yup.object().shape({
        firstInput: Yup.string()
            .required('Required!')
            .email('Please enter a valid email address!'),
        password: Yup.string()
            .required('Required!')
            .min(6, 'Password must be at least 6 characters long!')
            .matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number!'),
    });

    const formik = useFormik({
        initialValues: {
            firstInput: '',
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            const { firstInput, password } = values;
            const user = users.find(user => 
                (user.email === firstInput) && user.password === password
            );

            if (user) {
                setIsLogin(true);
                if(user.isAdmin){
                    setIsAdmin(true);
                    navigate('/admin/dashboard'); 
                }
                else{
                    navigate('/');
                }
                // console.log(user);
                 
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email address or password"
                });
            }
        },
    });

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                    <div className={styles.header}>
                        <h1>Logout</h1>
                        <p>You are already logged in.</p>
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles.row}>
                                <label htmlFor="firstInput">Email Address</label>
                                <input
                                    placeholder='Email address'
                                    className={styles.LoginInput}
                                    type="text"
                                    id='firstInput'
                                    name='firstInput'
                                    onChange={formik.handleChange} 
                                    value={formik.values.firstInput} 
                                    style={formik.errors.firstInput && submitCount > 0 ? {border: "2px solid red"} : null}
                                />
                                {submitCount > 0 && formik.errors.firstInput && (
                                    <div style={{ color: "red", fontSize: "14px" }}>
                                        {formik.errors.firstInput}
                                    </div>
                                )}
                            </div>   
                            <div className={styles.row}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    placeholder='Password'
                                    className={styles.LoginInput}
                                    type="password" 
                                    id='password' 
                                    name='password'
                                    onChange={formik.handleChange} 
                                    value={formik.values.password} 
                                    style={formik.errors.password && submitCount > 0 ? {border: "2px solid red"} : null}
                                />
                                {submitCount > 0 && formik.errors.password && (
                                    <div style={{ color: "red", fontSize: "14px" }}>
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div> 
                            <div className={styles.checkbox}>
                                <div className={styles.checkboxGroup}>
                                    <input type="checkbox" />
                                    <label>Keep me logged in</label>
                                </div>
                                <Link className={styles.Link}>Forgot Password?</Link>
                            </div> 
                            <div className={styles.formFooter}>
                                <p>Don’t have an account? <Link to='/register' className={styles.Link}>Sign Up</Link> here</p>
                                <button className={styles.account} onClick={handleSubmitCount} type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default Login;
