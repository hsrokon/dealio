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

    //Navigate - Used in JSX (return) to automatically redirect
    //useNavigate - Used in logic or event handlers (e.g., onClick)
    return (<Navigate state={location.pathname} to={'/auth/login'}></Navigate>);
};

export default PrivateRoute;