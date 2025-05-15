import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages.jsx/ErrorPage";
import Home from "../components/main/Home";
import Coupons from "../components/main/Coupons";
import Saved from "../components/main/Saved";
import Login from "../pages.jsx/Login";
import SignUp from "../pages.jsx/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/coupons',
                element: <Coupons></Coupons>
            },
            {
                path: '/saved',
                element:<Saved></Saved>
            }
        ]
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/signup',
        element: <SignUp></SignUp>
    }
])

export default router;