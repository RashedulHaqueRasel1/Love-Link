
import { useContext, useState } from "react";
import { IoEyeOutline, IoMenu } from "react-icons/io5";
import { MdClose, MdOutlineWorkspacePremium } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FcAssistant, FcEditImage, FcImport, FcLike, FcPositiveDynamic, FcProcess } from "react-icons/fc";
import LogoImg from "../assets/Logo.png"
import { AuthContext } from "../Auth/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaUsersGear } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import UseAdmin from "../hook/useAdmin/useAdmin";
import { FaRegSmileBeam } from "react-icons/fa";




const Dashboard = () => {

    const { logOut } = useContext(AuthContext);
    const navigation = useNavigate();

    // handle LogOut Btn
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout Success!",
                    text: "Logout !",
                    icon: "success"
                });
                navigation('/')
            })
            .catch(error => console.log(error))

    }


    const [open, setOpen] = useState(false);

    // Admin Check
    // const isAdmin = true;
    const [isAdmin] = UseAdmin();
    // console.log(isAdmin)




    return (
        <div>

            <div>
                <div className=" md:hidden bg-slate-700   p-6" onClick={() => setOpen(!open)}>
                    <div>
                        {
                            open === true ? <MdClose className="text-2xl" /> : <IoMenu className="text-2xl " />
                        }
                    </div>



                </div>
            </div>



            <div className="flex ">
                <div>
                    <ul className={`md:flex absolute md:static p-2   md:ml-0 w-64 lg:h-full h-[900px]  duration-1000 bg-slate-700  rounded-lg md:rounded-none ${open === true ? '-left-1' : '-left-[600px]'} z-50`}>
                        <ul className="menu ">
                            <Link to={'/'}>
                                <button>

                                    <h1 className='text-5xl text-rose-500 flex mt-5'>L<span className=''>
                                        <img
                                            // className='mb-3'
                                            src={LogoImg}
                                            width={70}
                                            height={40}
                                            alt=" logo"
                                        />
                                    </span>VE</h1>

                                </button>
                            </Link>
                            {
                                isAdmin ?



                                    <>
                                        <div className="divide-y  ">
                                            {/* Admin ++ user */}
                                            <div>

                                                <h1 className="text-center text-rose-400 font-bold border text-4xl">User</h1>
                                                <li>
                                                    <Link to={'/dashboard/EditBiodata'}>
                                                        <div className="flex mt-4  hover:bg-indigo-600  p-2 hover:rounded-3xl">
                                                            <FcEditImage className="text-2xl"></FcEditImage>
                                                            <span className="text-[16px] font-bold text-white ml-2">Edit Biodata</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/viewBioData'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <IoEyeOutline className="text-2xl"></IoEyeOutline >
                                                            <span className="text-[16px] font-bold text-white ml-2">View Biodata</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/MyContactRequest'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FcProcess className="text-2xl"></FcProcess>
                                                            <span className="text-[16px] font-bold text-white ml-2">My Contact Request</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/favourite'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FcLike className="text-2xl"></FcLike >
                                                            <span className="text-[16px] font-bold text-white ml-2">Favourite Biodata</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/gotMarried'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <GiLovers className="text-2xl"></GiLovers >
                                                            <span className="text-[16px] font-bold text-white ml-2">Got Married</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </div>



                                            {/* Admin Part*/}
                                            <div>
                                                <h1 className="text-center text-rose-400 font-bold border text-4xl mt-6">Admin</h1>
                                                <li>
                                                    <Link to={'/dashboard/admin'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FcPositiveDynamic className="text-2xl"></FcPositiveDynamic >
                                                            <span className="text-[16px] font-bold text-white ml-2">Admin Dashboard</span>
                                                        </div>
                                                    </Link>
                                                </li>


                                                <li>
                                                    <Link to={'/dashboard/manageUsers'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FaUsersGear className="text-2xl"></FaUsersGear >
                                                            <span className="text-[16px] font-bold text-white ml-2">Manage Users</span>
                                                        </div>
                                                    </Link>
                                                </li>


                                                <li>
                                                    <Link to={'/dashboard/ApprovedPremium'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <MdOutlineWorkspacePremium className="text-2xl"></MdOutlineWorkspacePremium  >
                                                            <span className="text-[16px] font-bold text-white ml-2">Approved Premium</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/ContactRequest'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FcAssistant className="text-2xl"></FcAssistant >
                                                            <span className="text-[16px] font-bold text-white ml-2">Approved Contact Request</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to={'/dashboard/successStory'}>
                                                        <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                            <FaRegSmileBeam className="text-2xl"></FaRegSmileBeam >
                                                            <span className="text-[16px] font-bold text-white ml-2">Success Story</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </div>


                                        </div>


                                    </>

                                    :


                                    <>

                                        {/* Normal User */}
                                        <li>
                                            <Link to={'/dashboard/EditBiodata'}>
                                                <div className="flex mt-4   hover:bg-indigo-600  p-2 hover:rounded-3xl">
                                                    <FcEditImage className="text-2xl"></FcEditImage>
                                                    <span className="text-[16px] font-bold text-white ml-2">Edit Biodata</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/dashboard/viewBioData'}>
                                                <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                    <IoEyeOutline className="text-2xl"></IoEyeOutline >
                                                    <span className="text-[16px] font-bold text-white ml-2">View Biodata</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/dashboard/MyContactRequest'}>
                                                <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                    <FcProcess className="text-2xl"></FcProcess>
                                                    <span className="text-[16px] font-bold text-white ml-2">My Contact Request</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/dashboard/favourite'}>
                                                <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                    <FcLike className="text-2xl"></FcLike >
                                                    <span className="text-[16px] font-bold text-white ml-2">Favourite Biodata</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to={'/dashboard/gotMarried'}>
                                                <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                    <GiLovers className="text-2xl"></GiLovers >
                                                    <span className="text-[16px] font-bold text-white ml-2">Got Married</span>
                                                </div>
                                            </Link>
                                        </li>



                                    </>
                            }

                            <li className='lg:mt-16'>
                                <Link onClick={handleLogOut} >
                                    <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                        <FcImport className="text-2xl"></FcImport >
                                        <span className="text-[16px] font-bold text-white ml-2">Logout</span>
                                    </div>
                                </Link>
                            </li>


                        </ul>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;