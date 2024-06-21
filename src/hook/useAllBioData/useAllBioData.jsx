import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAllBioData = () => {

    const axiosSecure = useAxiosSecure();

    const { data: bio = [], refetch } = useQuery({
        queryKey: ['bio'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bioData`)
            return res.data;

        }

    })

    return [bio, refetch];
};

export default useAllBioData;