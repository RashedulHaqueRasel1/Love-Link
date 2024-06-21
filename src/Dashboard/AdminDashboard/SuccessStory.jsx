import LogoImg from "../../assets/noImg.jpg"
import { useState } from "react";
import useAllStory from "../../hook/useAllStory/useAllStory";
import Modal from 'react-modal';
import { Rating } from '@smastrom/react-rating'
import { IoMdArrowRoundBack } from "react-icons/io";



const SuccessStory = () => {
    const [story] = useAllStory();
    const [showModal, setShowModal] = useState(false);


    console.log(story)
    return (
        <div>

            <div className="mt-10 mb-16">

                <h3 className="text-slate-700 text-center text-3xl font-semibold mt-3 ">Success Story</h3>
                <p className="text-slate-700 text-center text-xl font-semibold mt-5 ">Total Success Story : {story.length}</p>
            </div>


            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Male Biodata Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Female Biodata Id

                        </th>
                        <th scope="col" className="px-6 py-3">
                            View Story
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        story?.map(data => <tr key={data._id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                            <td>
                                {data.partnerId || 'Undefined'}
                            </td>

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.selfId || 'Undefined'}
                            </th>

                            <td className="px-6 py-4">
                                <button onClick={() => setShowModal(true)} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-500 hover:bg-transparent hover:outline hover:text-black cursor-pointer">View Story</button>
                                <Modal isOpen={showModal}>
                                    <div>
                                        <div className="flex flex-col justify-center lg:ml-[650px] lg:w-[500px] p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 border-2 border-blue-200 bg-blue-300">

                                            <img src={data.photo || LogoImg} alt="" />
                                            <div className="  text-center divide-y dark:divide-gray-300">
                                                <div className=" ">
                                                    <p className="ml-32 mt-4">
                                                        <Rating
                                                            style={{ maxWidth: 150 }}
                                                            value={data.rating}
                                                            readOnly
                                                            className=""
                                                        />
                                                    </p>
                                                    <h2 className="text-xl mt-4 font-semibold sm:text-2xl">Marriage Date : {data.marriageDate}</h2>
                                                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                        <h1 className="px-2 text-sm ">{data.story}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={() => setShowModal(false)} className="inline-flex items-center mt-24  justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-500 hover:bg-transparent hover:outline hover:text-black cursor-pointer"><IoMdArrowRoundBack className="mr-4"></IoMdArrowRoundBack>Back</button>
                                        </div>

                                    </div>
                                </Modal>

                            </td>




                        </tr>)


                    }


                </tbody>
            </table>


        </div>
    );
};

export default SuccessStory;