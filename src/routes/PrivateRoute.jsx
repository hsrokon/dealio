import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages.jsx/Loading";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return (<Navigate state={location.pathname} to={'/auth/login'}></Navigate>);
};

export default PrivateRoute;