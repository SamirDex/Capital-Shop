import React from 'react'
import Navbar from '../../user/layout/navbar/Navbar'
import Footer from '../../user/layout/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../layout/header/Header'

function AdminRoot() {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
            <Footer /> 
        </div>
    )
}

export default AdminRoot