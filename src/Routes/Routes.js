import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement:<DisplayError/>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])
export default router;