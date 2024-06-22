import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import BioData from "./BioData";



const BioDatas = () => {



    const axiosSecure = useAxiosSecure();


    const { data: bios = [] } = useQuery({
        queryKey: ['bios'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bioData`)
            return res.data;

        }

    })
    // console.log(bios)

    return (
        <div className="">
            <h1 className="text-center text-xl font-bold ">Total Bio Data :{bios.length}</h1>

            <div className="lg:flex lg:justify-center">
                <div className="bg-slate-100   mr-2">
                    <div className=" lg:mt-24 border-2 border-sky-400 rounded-3xl p-6">

                        <h1 className="text-center font-bold text-xl">Filter</h1>

                        {/* Age*/}
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Age</span>
                            </label>
                            <div>
                                <input type="number" name="name" id="name" placeholder="Min" className="input input-bordered lg:w-[300px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" />
                            </div>

                        </div>
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <div>
                                <input type="number" name="name" id="name" placeholder="Max" className="input input-bordered mt-3 lg:w-[300px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" />
                            </div>

                        </div>


                        <div className="space-y-1 flex flex-col text-sm mt-4" data-aos="fade-up" data-aos-duration="2200">
                            <label className=" ">
                                <span className=" font-bold lg:mr-4 ">Biodata Type</span>
                            </label>
                            <select className="select select-primary w-full lg:mr-4   lg:w-[300px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country"  >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div className="space-y-1 flex flex-col text-sm mt-4" data-aos="fade-up" data-aos-duration="2200">
                            <label className=" ">
                                <span className=" font-bold">Division</span>
                            </label>
                            <select className="select select-primary w-full   lg:w-[300px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country">
                                <option>Dhaka</option>
                                <option>Chottogram</option>
                                <option>Rangpur</option>
                                <option>Barisal</option>
                                <option>Khulna</option>
                                <option>Maymansign</option>
                                <option>Sylhet</option>
                            </select>
                        </div>



                        <button className="block py-3 px-4 lg:ml-20 mt-6  font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline hover:bg-transparent hover:outline hover:text-black ">
                            Search
                        </button>

                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center items-center p-4   gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        bios.map(bio => <BioData key={bio._id} bio={bio}></BioData>)
                    }
                </div>


            </div>


        </div>
    );
};

 

export default BioDatas;