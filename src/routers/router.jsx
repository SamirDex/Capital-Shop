// import AdminRoot from "../admin/adminRoot";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home"; 
import Login from "../pages/login/Login";
import Nopage from "../pages/nopage/Nopage";
import Products from "../pages/products/Products";
import Register from "../pages/register/Register";
import UserRoot from "../pages/user/userRoot";

export const routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/products",
                element: <Products />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />  
    },
    {
        path: "/register",
        element: <Register />  
    },
    {
        path: "*",
        element: <Nopage />  
    },
]