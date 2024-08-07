import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import Loading from "../../Layout/Loading/Loading";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    // Data Loading
    if (loading) {
        return <Loading></Loading>
    }

    // User  Check
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;