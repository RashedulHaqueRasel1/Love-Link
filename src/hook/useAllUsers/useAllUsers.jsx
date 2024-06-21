import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import { useContext } from "react";

const useAllUsers = () => {

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }
    })





    return [users, refetch];
};

export default useAllUsers;