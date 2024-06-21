import { useContext } from "react";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBioData = () => {


    const { user } = useContext(AuthContext);


    const axiosSecure = useAxiosSecure();


    const { data: bio = [] , refetch} = useQuery({
        queryKey: ['bio',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bioData/${user?.email}`)
            return res.data;

        }

    })




    return  [bio, refetch];
};

export default useBioData;