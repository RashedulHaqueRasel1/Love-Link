import { Link } from "react-router-dom";
import LogoImg from "../../assets/Logo.png"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";



const Footer = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return (
        <div className="mt-24">

            <footer className="bg-slate-700 dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
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


                                <div className="flex mt-6 -mx-2">
                                    <a href="https://www.facebook.com/Rashedul.haque.Rase1/"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit" target="_blank">
                                        <FaFacebook className="text-2xl"></FaFacebook>
                                    </a>

                                    <a href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook" target="_blank">
                                        <FaInstagramSquare className="text-2xl"></FaInstagramSquare>
                                    </a>

                                    <a href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Github" target="_blank">
                                        <TfiWorld className="text-2xl"></TfiWorld>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Home</a>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Biodata</a>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">About Us</a>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Contact Us</a>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Help Center</a>
                                    <a href="#" className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Privacy Policy </a>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Phone : +8801772582460</span>
                                    <span className="block mt-2 text-sm text-black opacity-70 font-semibold dark:text-gray-400 hover:underline">Email : rasel01ahamed@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"></hr>

                    <div>
                        <p className="text-center text-black font-semibold dark:text-gray-400  ">Copyright © {year} - All right reserved by <Link to={`https://wikialpha.org/wiki/Rashedul_Haque_Rasel`} target="_blank" className="text-blue-950"> 
                            Rasel
                        </Link> Industries Ltd.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;