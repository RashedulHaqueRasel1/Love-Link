import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import Loading from "../../Layout/Loading/Loading";
import UseAdmin from "../../hook/useAdmin/useAdmin";



const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();

    const location = useLocation();

    if (loading  && isAdminLoading) {

        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate   state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;