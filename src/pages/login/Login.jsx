import React from 'react'
import styles from "./Login.module.css" 
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
    const [submitCount, setSubmitCount] = useState(0); 

    const handleSubmitCount = () => {
        setSubmitCount(submitCount + 1); 
    }
    const validate = values => {
        const errors = {};
        if (!values.firstInput) {
            errors.firstInput = 'Required!';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.firstInput)) {
            errors.firstInput = 'Please enter a valid email address!';
        }

        if (!values.password) {
            errors.password = "Required!";
        } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(values.password)) {
            errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters long!";
        }

        return errors
    };
    const formik = useFormik({
        initialValues: {
            firstInput: '',
            password: '',
        },
        validate, 
        onSubmit: values => {
            JSON.stringify(values, null, 2);
        },
    });
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Login</h1>
                    <p>Enter Login details to get access</p>
                </div>
                <div className={styles.form}>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className={styles.row}>
                            <label htmlFor="firstInput">Username or Email Address</label>
                            <input
                                placeholder='Username / Email address'
                                className={styles.LoginInput}
                                type="text"
                                id='firstInput'
                                name='firstInput'
                                onChange={formik.handleChange} 
                                value={formik.values.firstInput} 
                                style={formik.errors.firstInput && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.firstInput ? <div style={{color: "red", fontSize: "14px"}}>{formik.errors.firstInput}</div> : null}
                            </div>
                        </div>   
                        <div className={styles.row}>
                            <label htmlFor="firstName">Password</label>
                            <input 
                                placeholder='Password'
                                className={styles.LoginInput}
                                type="password" 
                                id='password' 
                                name='password'
                                onChange={formik.handleChange} 
                                value={formik.values.password} 
                                style={formik.errors.password && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.password ? <div style={{color: "red", fontSize: "14px"}}>{formik.errors.password}</div> : null}
                            </div>
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
                            <button className={styles.account} onClick={handleSubmitCount}type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login