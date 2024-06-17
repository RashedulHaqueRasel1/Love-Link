import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/Provider/AuthProvider";

const EditBiodata = () => {

    const { user } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const userInfo = {
            email: user?.email,
            age: data.age,
            dateOfBirth: data.dateOfBirth,
            fathersName: data.fathersName,
            hight: data.hight,
            mobileNumber: data.mobileNumber,
            mothersName: data.mothersName,
            name: data.name,
            occupation: data.occupation,
            partnerAge: data.partnerAge,
            partnerHeight: data.partnerHeight,
            permanentDiv: data.permanentDiv,
            photo: data.photo,
            presentDiv: data.presentDiv,
            race: data.race,
            type: data.type,
            weight: data.weight
        }
        console.log(userInfo)


    }



    return (
        <div>
            <div className="  mx-auto container   " style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}    >

                <div className="  items-center  shadow-2xl bg-base-100   p-10 space-y-6 rounded-xl container mx-auto   border-red-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >

                    <label className="label  ">
                        <span className="label-text text-2xl font-bold text-center md:ml-48 lg:ml-[650px]">Biodata From</span>
                    </label>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                        <div className="lg:flex justify-center">

                            {/* Biodata Type*/}

                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:mr-4">Biodata Type</span>
                                </label>
                                <select className="select select-primary w-full lg:mr-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("type", { required: true })}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                {errors.type && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                            {/* Name */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <div>
                                    <input type="text" name="name" id="name" placeholder="Name" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("name", { required: true })} />
                                </div>
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>
                        </div>

                        <div className="lg:flex justify-center">


                            {/* img */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Profile Image Link or Image input</span>
                                </label>
                                <div>
                                    <input type="text" name="photo" id="photo" placeholder="Photo Url..." className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("photo", { required: true })} />
                                </div>
                                {errors.photo && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>


                            {/* Date of Birth */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label lg:ml-4">
                                    <span className="label-text font-bold">Date of Birth</span>
                                </label>
                                <div>
                                    <input type="date" name="dateOfBirth" id="dateOfBirth" placeholder="dateOfBirth" className="input input-bordered lg:w-[600px] w-full lg:ml-4   border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("dateOfBirth", { required: true })} />
                                </div>
                                {errors.dateOfBirth && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                        </div>


                        <div className="lg:flex justify-center">

                            {/* Hight */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold">Hight</span>
                                </label>
                                <select className="select select-primary w-full   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("hight", { required: true })}>
                                    <option>4.5 inches</option>
                                    <option>4.6 inches</option>
                                    <option>4.7 inches</option>
                                    <option>4.8 inches</option>
                                    <option>4.9 inches</option>
                                    <option>5.0 inches</option>
                                    <option>5.1 inches</option>
                                    <option>5.2 inches</option>
                                    <option>5.3 inches</option>
                                    <option>5.4 inches</option>
                                    <option>5.5 inches</option>
                                    <option>5.6 inches</option>
                                    <option>5.7 inches</option>
                                    <option>5.8 inches</option>
                                    <option>5.9 inches</option>
                                    <option>6.0 inches</option>
                                    <option>6.1 inches</option>
                                    <option>6.2 inches</option>
                                </select>
                                {errors.hight && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>



                            {/* Weight */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:ml-4">Weight</span>
                                </label>
                                <select className="select select-primary w-full lg:ml-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("weight", { required: true })}>
                                    <option>40 kg</option>
                                    <option>41 kg</option>
                                    <option>42 kg</option>
                                    <option>43 kg</option>
                                    <option>44 kg</option>
                                    <option>45 kg</option>
                                    <option>46 kg</option>
                                    <option>47 kg</option>
                                    <option>48 kg</option>
                                    <option>49 kg</option>
                                    <option>50 kg</option>
                                    <option>51 kg</option>
                                    <option>52 kg</option>
                                    <option>53 kg</option>
                                    <option>54 kg</option>
                                    <option>55 kg</option>
                                    <option>56 kg</option>
                                    <option>57 kg</option>
                                    <option>58 kg</option>
                                    <option>59 kg</option>
                                    <option>60 kg</option>
                                    <option>61 kg</option>
                                    <option>62 kg</option>
                                    <option>63 kg</option>
                                    <option>64 kg</option>
                                    <option>65 kg</option>
                                    <option>66 kg</option>
                                    <option>67 kg</option>
                                    <option>68 kg</option>
                                    <option>69 kg</option>
                                    <option>70 kg</option>
                                </select>
                                {errors.weight && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                        </div>



                        <div className="lg:flex justify-center">

                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Age</span>
                                </label>
                                <div>
                                    <input type="number" name="age" id="age" placeholder="Enter Your age" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("age", { required: true })} />
                                </div>
                                {errors.age && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>



                            {/* Occupation */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:ml-4">Occupation</span>
                                </label>
                                <select className="select select-primary w-full lg:ml-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("occupation", { required: true })}>
                                    <option>Writer</option>
                                    <option>Graphic Designer</option>
                                    <option>Photographer</option>
                                    <option>Musician</option>
                                    <option>Data Scientist</option>
                                    <option>Web Developer</option>
                                    <option>Cybersecurity Analyst</option>
                                    <option>IT Support Specialist</option>
                                    <option>Database Administrator</option>
                                    <option>Network Administrator</option>
                                    <option>Software Engineer</option>
                                    <option>Software Developer</option>
                                    <option>Civil Engineer</option>
                                    <option>Principal</option>
                                    <option>Professor</option>
                                    <option>Teacher</option>
                                    <option>Psychiatrist</option>
                                    <option>Nurse</option>
                                    <option>Doctor</option>
                                    <option>others</option>
                                </select>
                                {errors.occupation && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                        </div>


                        <div className="lg:flex justify-center">

                            {/* Race */}

                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:mr-4">Race</span>
                                </label>
                                <select className="select select-primary w-full lg:mr-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("race", { required: true })}>
                                    <option>Asian</option>
                                    <option>Black or African American</option>
                                    <option>White or Caucasian</option>
                                    <option>Latino or Hispanic</option>
                                    <option>Native American or Alaska Native</option>
                                    <option>Pacific Islander</option>
                                    <option>Multiracial or Mixed</option>
                                </select>
                                {errors.race && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                            {/* Fathers name */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Fathers name</span>
                                </label>
                                <div>
                                    <input type="text" name="fathersName" id="fathersName" placeholder="Father's Name" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("fathersName", { required: true })} />
                                </div>
                                {errors.fathersName && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>
                        </div>


                        <div className="lg:flex justify-center">

                            {/* Mothers name */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold">Mothers name</span>
                                </label>
                                <div>
                                    <input type="text" name="mothersName" id="mothersName" placeholder="Mother's Name" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("mothersName", { required: true })} />
                                </div>
                                {errors.mothersName && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                            {/* Permanent Division */}

                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:ml-4">Permanent Division</span>
                                </label>
                                <select className="select select-primary w-full lg:ml-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("permanentDiv", { required: true })}>
                                    <option>Dhaka</option>
                                    <option>Chottogram</option>
                                    <option>Rangpur</option>
                                    <option>Barisal</option>
                                    <option>Khulna</option>
                                    <option>Maymansign</option>
                                    <option>Sylhet</option>
                                </select>
                                {errors.permanentDiv && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>
                        </div>



                        <div className="lg:flex justify-center">

                            {/* Present Division */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold">Present Division</span>
                                </label>
                                <select className="select select-primary w-full   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("presentDiv", { required: true })}>
                                    <option>Dhaka</option>
                                    <option>Chottogram</option>
                                    <option>Rangpur</option>
                                    <option>Barisal</option>
                                    <option>Khulna</option>
                                    <option>Maymansign</option>
                                    <option>Sylhet</option>
                                </select>
                                {errors.presentDiv && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                            {/* Expected Partner Age */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold ml-4">Expected Partner Age</span>
                                </label>
                                <div>
                                    <input type="number" name="partnerAge" id="partnerAge" placeholder="Partner Age..." className="input input-bordered lg:w-[600px] w-full    border-blue-300 ml-4  focus:dark:border-blue-500   dark:bg-gray-400" {...register("partnerAge", { required: true })} />
                                </div>
                                {errors.partnerAge && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>

                        </div>



                        <div className="lg:flex justify-center">

                            {/* Expected Partner Height */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold">Expected Partner Height</span>
                                </label>
                                <select className="select select-primary w-full   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("partnerHeight", { required: true })}>
                                    <option>4.5 inches</option>
                                    <option>4.6 inches</option>
                                    <option>4.7 inches</option>
                                    <option>4.8 inches</option>
                                    <option>4.9 inches</option>
                                    <option>5.0 inches</option>
                                    <option>5.1 inches</option>
                                    <option>5.2 inches</option>
                                    <option>5.3 inches</option>
                                    <option>5.4 inches</option>
                                    <option>5.5 inches</option>
                                    <option>5.6 inches</option>
                                    <option>5.7 inches</option>
                                    <option>5.8 inches</option>
                                    <option>5.9 inches</option>
                                    <option>6.0 inches</option>
                                    <option>6.1 inches</option>
                                    <option>6.2 inches</option>
                                </select>
                                {errors.partnerHeight && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>



                            {/* Expected Partner Weight */}
                            <div className="space-y-1 flex flex-col text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className=" ">
                                    <span className=" font-bold lg:ml-4">Expected Partner Weight</span>
                                </label>
                                <select className="select select-primary w-full lg:ml-4   lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" placeholder="Select..." name="country" id="country" {...register("partnerWeight", { required: true })}>
                                    <option>40 kg</option>
                                    <option>41 kg</option>
                                    <option>42 kg</option>
                                    <option>43 kg</option>
                                    <option>44 kg</option>
                                    <option>45 kg</option>
                                    <option>46 kg</option>
                                    <option>47 kg</option>
                                    <option>48 kg</option>
                                    <option>49 kg</option>
                                    <option>50 kg</option>
                                    <option>51 kg</option>
                                    <option>52 kg</option>
                                    <option>53 kg</option>
                                    <option>54 kg</option>
                                    <option>55 kg</option>
                                    <option>56 kg</option>
                                    <option>57 kg</option>
                                    <option>58 kg</option>
                                    <option>59 kg</option>
                                    <option>60 kg</option>
                                    <option>61 kg</option>
                                    <option>62 kg</option>
                                    <option>63 kg</option>
                                    <option>64 kg</option>
                                    <option>65 kg</option>
                                    <option>66 kg</option>
                                    <option>67 kg</option>
                                    <option>68 kg</option>
                                    <option>69 kg</option>
                                    <option>70 kg</option>
                                </select>
                                {errors.partnerWeight && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>

                        </div>


                        <div className="lg:flex justify-center">

                            {/* Contact Email */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text  font-bold">Contact Email</span>
                                </label>
                                <div className="   focus:dark:border-blue-500  ">
                                    <input type="email" name="email" id="email" defaultValue={user?.email} className="  lg:w-[600px]   w-full  border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />

                                </div>
                            </div>



                            {/* mobileNumber */}
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold lg:ml-4">Mobile Numbers</span>
                                </label>
                                <div>
                                    <input type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number..." className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500  lg:ml-4 dark:bg-gray-400" {...register("mobileNumber", { required: true })} />
                                </div>
                                {errors.mobileNumber && <span className="text-red-600 font-bold">This field is required</span>}

                            </div>
                        </div>




                        <div className="lg:flex justify-center">
                            <button className=" justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto bg-slate-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Save</button>
                        </div>


                    </form>






                </div >





            </div >

        </div>
    );
};

export default EditBiodata;