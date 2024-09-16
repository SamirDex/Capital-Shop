import AdminRoot from "../admin/adminRoot";
import Contact from "../user/pages/contact/Contact";
import Home from "../user/pages/home/Home"; 
import UserRoot from "../user/pages/userRoot";

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