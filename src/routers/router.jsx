// import AdminRoot from "../admin/adminRoot";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home"; 
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
            }
        ]
    },
]