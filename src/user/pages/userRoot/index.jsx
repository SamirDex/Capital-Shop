import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../layout/navbar/Navbar'
import Header from '../../layout/header/header'
function UserRoot() {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
        </div>
    )
}

export default UserRoot