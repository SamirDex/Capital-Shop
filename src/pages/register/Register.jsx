import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate} from 'react-router-dom';
import styles from "./Register.module.css";
import {base_url} from "../../data/Data" ; 
import axios from 'axios';
import Swal from 'sweetalert2'

function Register() {
    const [submitCount, setSubmitCount] = useState(0); 
    const navigate = useNavigate();
    const handleSubmitCount = () => {
        setSubmitCount(prevCount => prevCount + 1); 
    };

    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
            .required('Required!')
            .min(3, 'Full name must be at least 3 characters long!')
            .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed!'),
        email: Yup.string()
            .required('Required!')
            .email('Please enter a valid email address!'),
        password: Yup.string()
            .required('Required!')
            .min(6, 'Password must be at least 6 characters long!')
            .matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number!'),
        confirmPassword: Yup.string()
            .required('Required!')
            .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${base_url}users/`, {
                    fullname: values.fullname,
                    email: values.email,
                    password: values.password,
                    isAdmin: false
                });
                console.log(response.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account has been saved",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/login');
            } catch (error) {
                console.error(error);
            }
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
                    <form onSubmit={formik.handleSubmit}>
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
                                style={formik.errors.fullname && submitCount > 0 ? { border: "2px solid red" } : null}
                            />
                            {submitCount > 0 && formik.errors.fullname && (
                                <div style={{ color: "red", fontSize: "14px" }}>
                                    {formik.errors.fullname}
                                </div>
                            )}
                        </div>
                        <div className={styles.row}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                placeholder='Enter email address'
                                className={styles.LoginInput}
                                type="text"
                                id='email'
                                name='email'
                                onChange={formik.handleChange} 
                                value={formik.values.email} 
                                style={formik.errors.email && submitCount > 0 ? { border: "2px solid red" } : null}
                            />
                            {submitCount > 0 && formik.errors.email && (
                                <div style={{ color: "red", fontSize: "14px" }}>
                                    {formik.errors.email}
                                </div>
                            )}
                        </div>   
                        <div className={styles.row}>
                            <label htmlFor="password">Password</label>
                            <input 
                                placeholder='Enter Password'
                                className={styles.LoginInput}
                                type="password" 
                                id='password' 
                                name='password'
                                onChange={formik.handleChange} 
                                value={formik.values.password} 
                                style={formik.errors.password && submitCount > 0 ? { border: "2px solid red" } : null}
                            />
                            {submitCount > 0 && formik.errors.password && (
                                <div style={{ color: "red", fontSize: "14px" }}>
                                    {formik.errors.password}
                                </div>
                            )}
                        </div> 
                        <div className={styles.row}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                placeholder='Confirm Password'
                                className={styles.LoginInput}
                                type="password" 
                                id='confirmPassword' 
                                name='confirmPassword'
                                onChange={formik.handleChange} 
                                value={formik.values.confirmPassword} 
                                style={formik.errors.confirmPassword && submitCount > 0 ? { border: "2px solid red" } : null}
                            />
                            {submitCount > 0 && formik.errors.confirmPassword && (
                                <div style={{ color: "red", fontSize: "14px" }}>
                                    {formik.errors.confirmPassword}
                                </div>
                            )}
                        </div> 
                        <div className={styles.formFooter}>
                            <p>Already have an account? <Link to='/login' className={styles.Link}> Login</Link> here</p>
                            <button className={styles.account} onClick={handleSubmitCount} type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
