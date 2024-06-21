import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import LogoImg from "../../assets/Logo.png"
import { AuthContext } from '../../Auth/Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [state, setState] = useState(false)
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

    const navOption = <>
        <li>
            <NavLink to={'/'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6  text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ' >Home</NavLink>
        </li>

        <li>
            <NavLink to={'/bioDatas'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Biodatas</NavLink>
        </li>
        <li>
            <NavLink to={'/about'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>About Us</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Contact Us</NavLink>
        </li>

        {
            user && <li>
                <NavLink to={'/dashboard/EditBiodata'} className='inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>Dashboard</NavLink>
            </li>
        }
    </>


    return (
        <div>

            <nav className=" bg-slate-700 border-b w-full md:static md:text-sm md:border-none fixed z-50">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8  ">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={'/'}>
                            <button>

                                <h1 className='text-5xl text-rose-500 flex '>L<span className=''>
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
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (

                                        <ImCross></ImCross>


                                    ) : (

                                        <>
                                            <ImMenu className='text-2xl font-bold'></ImMenu>
                                        </>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-end items-center space-y-4 lg:text-xl md:text-[16px] md:flex md:space-x-4 md:space-y-0 ">

                            {navOption}


                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>

                                {
                                    user ?
                                        <>
                                            {/* Profile icon */}
                                            <div className="flex flex-col items-center justify-center" >
                                                <div className="flex space-x-5">
                                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-default-600 dark:ring-offset-gray-100" src={`${user.photoURL}`} />
                                                </div>
                                            </div>


                                            {/* Logout */}
                                            <li>
                                                <Link onClick={handleLogOut} to={'/login'} className="block py-3 px-4  font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                                    Logout
                                                </Link>
                                            </li>

                                        </>
                                        :
                                        <li>
                                            <Link to={'/login'} className="inline-flex items-center justify-center w-full px-7 py-4 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600  ">
                                                Login
                                            </Link>
                                        </li>


                                }


                            </div>

                        </ul>

                    </div>
                </div>


            </nav>
        </div>
    )
};

export default Navbar;