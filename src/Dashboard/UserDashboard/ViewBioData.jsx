
import Swal from "sweetalert2";
import img2 from "../../assets/noImg.jpg"
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import useBioData from "../../hook/useBioData/useBioData";



const ViewBioData = () => {

    const [bio] = useBioData();
    const axiosSecure = useAxiosSecure();


    // Bio Data Premium Request
    const handleBioDataPremiumRequest = (bio) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Premium it!"
        }).then((result) => {

            if (result.isConfirmed) {

                const userInfo = {
                    status: 'pending'
                }
                axiosSecure.patch(`/bioData/${bio._id}`, userInfo)
                Swal.fire({
                    title: "Success!",
                    text: "Premium Request Success !",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="mx-auto container">


            <section  >
                <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-2 border-blue-400 hover:bg-blue-300 bg-blue-200 rounded-2xl mt-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                className="w-full lg:h-[600px]"
                                alt=""
                                src={bio.photo || img2}
                            />
                        </div>

                        <div className="">
                            <div className="flex flex-col rounded-lg border border-gray-100 py-3 shadow-sm">

                                <div>
                                    <dl className="-my-3 divide-y divide-gray-100 text-[16px] font-semibold">

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Biodata Id : </dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.id}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Biodata Type : </dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.type}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Name :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.name}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Date of birth :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.dateOfBirth}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Height :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.hight}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Weight :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.weight}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Age :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.age}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Occupation :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.occupation}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Race :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.race}</dd>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Fathers name :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.fathersName}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Mothers name :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.mothersName}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Permanent Division name :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.permanentDiv}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Present Division name :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.presentDiv}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Expected Partner Age :</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.partnerAge}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className=" text-gray-900">Expected Partner Weight:</dt>
                                            <dd className="text-gray-700 font-bold sm:col-span-2">{bio.partnerWeight}</dd>
                                        </div>

                                        <div className="lg:flex lg:justify-center lg:items-center">
                                            <div>
                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className=" text-gray-900">Contact Email :</dt>
                                                    <dd className="text-gray-700 font-bold sm:col-span-2">{bio.email}</dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className=" text-gray-900">Mobile Number :</dt>
                                                    <dd className="text-gray-700 font-bold sm:col-span-2">{bio.mobileNumber}</dd>
                                                </div>
                                            </div>

                                            <div>
                                                {/* BoiData Premium Request Button */}
                                                <div>
                                                    <button onClick={() => handleBioDataPremiumRequest(bio)} className="justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto bg-slate-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Boidata Premium Request</button>
                                                </div>
                                            </div>
                                        </div>

                                    </dl>
                                </div>




                            </div>
                        </div>
                    </div>




                </div>






            </section>


        </div>
    );
};

export default ViewBioData;