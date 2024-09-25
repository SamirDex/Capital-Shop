import React from 'react'
import Navbar from '../../user/layout/navbar/Navbar'
import Header from '../../user/layout/header/header'
import Footer from '../../user/layout/footer/Footer'
import { Outlet } from 'react-router-dom'

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