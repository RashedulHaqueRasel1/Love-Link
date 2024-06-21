import { useContext } from "react";
import { AuthContext } from "../../Auth/Provider/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const FavouriteBioDatas = () => {

    const { user } = useContext(AuthContext);


    const axiosSecure = useAxiosSecure();


    const { data: favourite = [], refetch } = useQuery({
        queryKey: ['bio', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favourite/${user?.email}`)
            return res.data;

        },
        enabled: !!user?.email

    })





    // Delete favourite Data
    const handleDelete = (id) => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure Favourite Data deleted ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/favourite/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Favourite Data has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
            refetch()
        });
    }

    refetch()
    // console.log(favourite)


    return (
        <div>
            <div className="max-w-80 container lg:max-w-[950px] ">



                <div className="relative overflow-x-auto">

                    <div className="mt-10 mb-16">

                        <h3 className="text-slate-700 text-center text-3xl font-semibold mt-3 ">Favourite Data</h3>
                        <p className="text-slate-700 text-center text-xl font-semibold mt-5 ">Total Favourite Data : {favourite?.length}</p>
                    </div>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Permanent Address
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Occupation
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                favourite?.map(favourite => <tr key={favourite._id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                    <td>
                                        {favourite?.id || 'Undefined'}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {favourite?.name || 'Undefined'}
                                    </th>
                                    <td className="px-6 py-4">
                                        {favourite?.permanent}
                                    </td>
                                    <td className="px-6 py-4">
                                        {favourite?.occupation}
                                    </td>

 

                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(favourite?._id)} className="inline-flex items-center   justify-center w-full px-4 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer"><MdDeleteForever /></button>
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default FavouriteBioDatas;