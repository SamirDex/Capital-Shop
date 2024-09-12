import AdminRoot from "../admin/adminRoot";
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
        ]
    },
]