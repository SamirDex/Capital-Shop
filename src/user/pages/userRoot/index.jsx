import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../home/Home'
function UserRoot() {
    return (
        <div>
            <Home />
            <Outlet />
        </div>
    )
}

export default UserRoot