import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { AuthContext } from '../../Auth/Provider/AuthProvider';
import { useContext } from 'react';

const useAllStory = () => {

	const { user } = useContext(AuthContext)

    const axiosPublic = useAxiosPublic();

    const { data: story = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/story`)
            return res.data;
        },
        enabled: !!user?.email
    })



    return [story, refetch];
};

export default useAllStory;