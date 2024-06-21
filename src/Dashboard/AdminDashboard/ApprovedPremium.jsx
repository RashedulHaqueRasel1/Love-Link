import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import useAllBioData from "../../hook/useAllBioData/useAllBioData";

const ApprovedPremium = () => {

    const axiosSecure = useAxiosSecure();
    const [bio, refetch] = useAllBioData();


    // // Premium Make Approved Premium Dashboard (Admin see Only)
    const handleMakePremium = (id) => {
        // console.log(id, 'aaaaaaa')
        axiosSecure.patch(`/bioData/premium/${id}`, { status: "Premium" })
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Premium Now`,
                    showConfirmButton: false,
                    timer: 1500
                });

            })
        refetch()
    }


    refetch()


    return (
        <div>

            <div className="max-w-80 container lg:max-w-[950px] ">

                <div className="relative overflow-x-auto">

                    <div className="mt-10 mb-16">

                        <h3 className="text-slate-700 text-center text-3xl font-semibold mt-3 ">Approved Premium</h3>
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
                                    Email
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bio?.map(payment => <tr key={payment._id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                    <td>
                                        {payment.id || 'Undefined'}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {payment.name || 'Undefined'}
                                    </th>
                                    <td className="px-6 py-4">
                                        {payment.email}
                                    </td>



                                    <td className="px-6 py-4">
                                        {payment?.status === 'premium' ?

                                            <button className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-500 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status || "Premium"}</button>

                                            :

                                            <button onClick={() => handleMakePremium(payment._id)} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status || "Not Premium"}</button>}
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

export default ApprovedPremium;