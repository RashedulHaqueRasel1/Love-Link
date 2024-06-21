import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import useBioData from "../../hook/useBioData/useBioData";


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const [bio] = useBioData();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })


    // // Admin Make in Admin

    const handleMakeAdmin = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Are You Sure This User is Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                Swal.fire({
                    title: "Success!",
                    text: "Now This Member is Admin !",
                    icon: "success"
                });
                refetch()
            }
        });
    }



    // Already Approved Notification
    const handleAlreadyAdmin = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Already Admin!",
            text: `This Member is Already Admin!`,
            showConfirmButton: false,
            timer: 1500
        });
        refetch()
    }



    // // Premium Make in Admin 
    const handleMakePremium = (bio) => {
        // console.log(bio,'aaaaaaa')

        axiosSecure.patch(`/bioData/premium/${bio?._id}`, { status: "Premium" })
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${bio.name} is an Premium Now`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            })
    }



    refetch()

    return (
        <div className="max-w-80 container lg:max-w-[950px] ">

            <div className="relative overflow-x-auto">

                <div className="mt-10 mb-16">

                    <h3 className="text-slate-700 text-center text-3xl font-semibold mt-3 animate-pulse">Manage All Users</h3>
                    <p className="text-slate-700 text-center text-xl font-semibold mt-5 ">Total Users : {users.length}</p>
                </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>

                                <td className="px-6 py-4">
                                    {user?.role === 'admin' ?
                                        <button onClick={() => handleAlreadyAdmin()} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-500 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{user?.status || "Admin"}</button>
                                        :
                                        <button onClick={() => handleMakeAdmin(user)} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{user?.status || "User"}</button>}
                                </td>

                                <td className="px-6 py-4">
                                    {bio?.role === 'premium' ? "Premium" : <button onClick={() => handleMakePremium(bio)} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-500 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{bio?.status || "Not Premium"}</button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageUsers;