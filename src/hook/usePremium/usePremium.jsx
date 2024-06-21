import { useContext } from "react";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePremium = () => {
	const { user } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure();


    const {data: isPremium} = useQuery({
        queryKey: [user?.email , 'isPremium'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/allContact/premium/${user?.email}`)
            console.log(res.data)
             return res.data?.premium;
        },
        enabled: !!user?.email

        

    })
    
    return [isPremium]
};

export default usePremium;