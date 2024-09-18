import React from 'react'
import styles from "./Register.module.css" 
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
    const [submitCount, setSubmitCount] = useState(0); 

    const handleSubmitCount = () => {
        setSubmitCount(submitCount + 1); 
    }
    const validate = values => {
        const errors = {};
        if (!values.fullname) {
            errors.fullname = 'Required!';
        }
        else if (values.fullname.length < 3 && /^[A-Z]/i.test(values.fullname)) {
            errors.fullname = 'Full name must be at least 3 characters long!';
        }
        else if (/^[0-9._*,%+-]{2,4}$/i.test(values.fullname)) {
            errors.fullname = 'Numbers and symbols like +, -, _, %, * are not allowed!';
        }


        if (!values.email) {
            errors.email = 'Required!';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email address!';
        }

        if (!values.password) {
            errors.password = "Required!";
        } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(values.password)) {
            errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters long!";
        }

        if(!values.confirmPassword){
            errors.confirmPassword = "Required!"
        }
        else if(values.password!= values.confirmPassword){
            errors.confirmPassword = "Passwords do not match!";
        }

        return errors
    };
    const formik = useFormik({
        initialValues: {
            fullname:'',
            email: '',
            password: '',
            confirmPassword: '',
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
                    <h1>Sign Up</h1>
                    <p>Create your account to get full access</p>
                </div>
                <div className={styles.form}>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className={styles.row}>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                placeholder='Enter full name'
                                className={styles.LoginInput}
                                type="text"
                                id='fullname'
                                name='fullname'
                                onChange={formik.handleChange} 
                                value={formik.values.fullname} 
                                style={formik.errors.fullname && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.fullname ? <div style={{color: "red", fontSize: "14px"}}>{formik.errors.fullname}</div> : null}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <label htmlFor="firstInput">Email Address</label>
                            <input
                                placeholder='Enter email address'
                                className={styles.LoginInput}
                                type="text"
                                id='email'
                                name='email'
                                onChange={formik.handleChange} 
                                value={formik.values.email} 
                                style={formik.errors.email && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.email ? <div style={{color: "red", fontSize: "14px"}}>{formik.errors.email}</div> : null}
                            </div>
                        </div>   
                        <div className={styles.row}>
                            <label htmlFor="firstName">Password</label>
                            <input 
                                placeholder='Enter Password'
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
                        <div className={styles.row}>
                            <label htmlFor="firstName">Confirm Password</label>
                            <input 
                                placeholder='Confirm Password'
                                className={styles.LoginInput}
                                type="password" 
                                id='confirmPassword' 
                                name='confirmPassword'
                                onChange={formik.handleChange} 
                                value={formik.values.confirmPassword} 
                                style={formik.errors.confirmPassword && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.confirmPassword ? <div style={{color: "red", fontSize: "14px"}}>{formik.errors.confirmPassword}</div> : null}
                            </div>
                        </div> 
                        <div className={styles.formFooter}>
                            <p>Already have an account?<Link to='/login' className={styles.Link}> Login</Link> here</p>
                            <button className={styles.account} onClick={handleSubmitCount}type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register