import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const GotMarried = () => {

    const axiosSecure = useAxiosSecure();

    // React Hook From
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = async (data) => {
        // console.log(data)

        const story = await axiosSecure.post(`/story`, data)
        console.log(story.data)
        if (story.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Submit Success`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }



    return (
        <div>

            <div>
                <h1 className="text-slate-700 text-center text-4xl font-bold mt-10">Share Your Success Story</h1>


                <div className="lg:mt-20">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="lg:flex justify-center ">

                            {/* Self Biodata ID*/}


                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Self Biodata ID</span>
                                </label>
                                <div>
                                    <input type="number" name="selfId" id="selfId" placeholder="Self Id" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("selfId", { required: true })} />
                                </div>
                                {errors.age && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                            {/* Partner Biodata ID */}
                            <div className="space-y-1 text-sm lg:ml-4" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Partner Biodata ID</span>
                                </label>
                                <div>
                                    <input type="number" name="partnerId" id="partnerId" placeholder="Partner Id" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("partnerId", { required: true })} />
                                </div>
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>


                        </div>


                        <div className="lg:flex justify-center mt-4">

                            {/* marriageDate*/}

                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label  ">
                                    <span className="label-text font-bold">Marriage Date</span>
                                </label>
                                <div>
                                    <input type="date" name="marriageDate" id="marriageDate" placeholder="Marriage Date" className="input input-bordered lg:w-[600px] w-full   border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("marriageDate", { required: true })} />
                                </div>
                                {errors.dateOfBirth && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>



                            {/* Rating Star*/}
                            <div className="space-y-1 flex flex-col text-sm lg:ml-4" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold">Rating Star</span>
                                </label>
                                <select className="select select-primary w-full   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("rating", { required: true })} >
                                    <option disabled>Select Rating Star</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {errors.presentDiv && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>


                        </div>


                        <div className="lg:flex justify-center mt-4">

                            {/* Couple Image*/}

                            <div className="space-y-1 text-sm " data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Couple Image</span>
                                </label>
                                <div>
                                    <input type="text" name="photo" id="photo" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("photo", { required: true })} />
                                </div>
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                        </div>

                        <div className="lg:flex justify-center mt-4">

                            {/* Success Story */}
                            <div className="space-y-1 text-sm lg:ml-4" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Success Story</span>
                                </label>
                                <div>

                                    <textarea id="text" name="story" placeholder="Success Story" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("story", { required: true })} ></textarea>
                                </div>
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                        </div>

                        <div className="lg:flex justify-center">
                            <button className=" justify-center w-full px-7 py-4 mt-8 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto bg-slate-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default GotMarried;