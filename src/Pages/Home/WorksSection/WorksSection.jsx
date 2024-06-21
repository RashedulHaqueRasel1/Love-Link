/* eslint-disable react/no-unescaped-entities */
import { BsSearchHeart } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";

const WorksSection = () => {
    return (
        <div>

            <section className="bg-white dark:bg-gray-900 mt-8">

                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        How It Works</h1>

                    <p className="max-w-2xl mx-auto mt-6  text-[17px] text-center text-gray-500 dark:text-gray-300">
                        A matrimony or online matrimonial platform works as a digital marketplace where individuals seek potential life partners. Here's how such platforms typically operate
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400 bg-blue-200  rounded-lg">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <IoCreateOutline className="text-5xl"></IoCreateOutline>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Sign Up & Create Your Profile</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                <ul>
                                    <li>
                                        Join our community by filling out a simple registration form.

                                    </li>
                                    <li>
                                        Provide basic information such as Name, Email, Photo, and Password.
                                    </li>
                                </ul>
                            </p>
                        </div>


                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400 bg-blue-200  rounded-lg">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <BsSearchHeart className="text-5xl"></BsSearchHeart>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Explore and Search</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Use our advanced search filters to find matches based on criteria such as age, education, profession, and more.
                                Customize your search to meet your specific preferences.
                            </p>
                        </div>


                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400 bg-blue-200  rounded-lg">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <RiMessage2Line className="text-5xl"></RiMessage2Line >
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Connect and Communicate</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Express interest in profiles that you find appealing.
                                Receive interests from others who are interested in you.
                            </p>
                        </div>



                    </div>
                </div>
            </section>

        </div>
    );
};

export default WorksSection;