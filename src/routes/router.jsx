import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages.jsx/ErrorPage";
import Home from "../components/main/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
])

export default router;