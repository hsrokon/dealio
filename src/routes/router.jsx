import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages.jsx/ErrorPage";
import Home from "../components/main/Home";
import Coupons from "../components/main/Coupons";

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
            }
        ]
    },
])

export default router;