import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routers/router'
import { createContext, useState } from 'react'

const router = createBrowserRouter(routes)

export const LoginContext = createContext(); 
function App() {
    const [isLogin, setIsLogin] = useState(false); 
    const [isAdmin, setIsAdmin] = useState(false); 

    return (
        <LoginContext.Provider value={{isLogin,setIsLogin, isAdmin, setIsAdmin }}> 
            <RouterProvider router={router}/>
            
        </LoginContext.Provider>
    )
}
export default App
