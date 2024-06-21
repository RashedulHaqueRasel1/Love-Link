import { GiSelfLove } from "react-icons/gi";
import img2 from "../../../assets/noImg.jpg"
import { Link, useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import useAllBioData from "../../../hook/useAllBioData/useAllBioData";
import SimilarBioData from "../SimilarBioData/SimilarBioData";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/Provider/AuthProvider";
import usePremium from "../../../hook/usePremium/usePremium";
import { FaChessQueen } from "react-icons/fa6";



const ViewDetails = () => {

    const bio = useLoaderData();
    const { user } = useContext(AuthContext)
    const [AllData, refetch] = useAllBioData();
    const axiosSecure = useAxiosSecure();



    // Add to Faviouret mongoDB Faviouret collection
    const handleAddFavourite = async (bio) => {
        // console.log(bio)

        const userInfo = {
            name: bio?.name,
            email: user?.email,
            id: bio?.id,
            permanent: bio?.permanentDiv,
            occupation: bio?.occupation
        }
        const favourite = await axiosSecure.post(`/favourite`, userInfo)
        // console.log(favourite.data)
        if (favourite.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-right",
                icon: "success",
                title: `Favourite Added`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        refetch()
    }

    refetch()

    // Premium Member Check
    const [isPremium] = usePremium();
    // const isPremium = true;



    const similarBiodata = AllData.filter(b => b.type === bio.type && b.id !== bio._id).slice(0, 3);


    return (
        <div>
            <section className="mx-auto container">
                <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-2 border-blue-400 bg-blue-200 rounded-2xl mt-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">


                        <div className="">
                            <div>
                                <img
                                    className="w-full lg:h-[600px] rounded-2xl"
                                    alt=""
                                    src={bio.photo || img2}
                                />
                            </div>

                            <div className=" mt-6">
                                <p onClick={() => handleAddFavourite(bio)} className="inline-flex items-center lg:ml-60 justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer ">
                                    <GiSelfLove></GiSelfLove> <span className="ml-3">Add to Favourite</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <p className=" text-gray-600 font-semibold text-xl">Biodata Id : <span className="text-gray-900 font-bold sm:col-span-2">{bio.id}</span></p>


                                    <p className=" text-gray-600 font-semibold  text-xl mt-2">Name : <span className="text-gray-900 font-bold sm:col-span-2">{bio.name}</span></p>

                                    <p className=" text-gray-600 font-semibold text-[18px] mt-2">Biodata Type : <span className="text-gray-900 font-bold sm:col-span-2">{bio.type}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Date of birth : <span className="text-gray-900 font-bold sm:col-span-2">{bio.dateOfBirth}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Height : <span className="text-gray-900 font-bold sm:col-span-2">{bio.hight}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Weight : <span className="text-gray-900 font-bold sm:col-span-2">{bio.weight}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Age : <span className="text-gray-900 font-bold sm:col-span-2">{bio.age}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Occupation : <span className="text-gray-900 font-bold sm:col-span-2">{bio.occupation}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Race : <span className="text-gray-900 font-bold sm:col-span-2">{bio.race}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Fathers Name : <span className="text-gray-900 font-bold sm:col-span-2">{bio.fathersName}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Mothers Name : <span className="text-gray-900 font-bold sm:col-span-2">{bio.mothersName}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Present Division : <span className="text-gray-900 font-bold sm:col-span-2">{bio.presentDiv}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Permanent Division : <span className="text-gray-900 font-bold sm:col-span-2">{bio.permanentDiv}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Partner Height : <span className="text-gray-900 font-bold sm:col-span-2">{bio.partnerHeight}</span></p>

                                    <p className=" text-gray-600 font-semibold  text-[16px] mt-2">Partner Weight : <span className="text-gray-900 font-bold sm:col-span-2">{bio.partnerWeight}</span></p>

                                </div>

                            </div>

                            {
                                isPremium ? <>

                                    <div className="my-4 mx-2">

                                        <p className=" text-gray-600 font-semibold  text-[16px] ">Contact Email : <span className="text-gray-900 font-bold sm:col-span-2">{bio.email}</span></p>

                                        <p className=" text-gray-600 font-semibold  text-[16px]  ">Mobile Number : <span className="text-gray-900 font-bold sm:col-span-2">{bio.mobileNumber}</span></p>

                                    </div>

                                </> :

                                    <>
                                        <div className=" lg:flex items-center mt-4 border-2 border-blue-400 rounded-3xl">
                                            <div className="my-4 mx-2">

                                                <p className=" text-gray-600 font-semibold  text-[16px] ">Contact Email : <span className="text-gray-900 font-bold sm:col-span-2">***********</span></p>

                                                <p className=" text-gray-600 font-semibold  text-[16px]  ">Mobile Number : <span className="text-gray-900 font-bold sm:col-span-2">**********</span></p>

                                            </div>
                                            <div className="items-center">
                                                <Link to={`/Checkout/${bio.id}`} className="inline-flex items-center   lg:ml-24 justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer" target="_blank" >
                                                    <FaChessQueen className="mr-2 mb-1"></FaChessQueen>  Request Contact Information
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>




                </div>



                {/* SimiLar Bio Data Map to SimilarBioData Page */}
                <h1 className="text-2xl font-semibold text-center mt-8 text-gray-800 capitalize lg:text-3xl dark:text-white">
                    --- Similar Biodata ---
                </h1>
                <div className='grid grid-cols-1 justify-center items-center p-4   gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        similarBiodata.map(data => <SimilarBioData key={data._id} data={data}></SimilarBioData>)
                    }

                </div>

            </section>

        </div>
    );
};

export default ViewDetails;