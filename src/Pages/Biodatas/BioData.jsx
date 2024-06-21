import { Link } from "react-router-dom";
import LogoImg from "../../assets/noImg.jpg"
 

// BioDatas page to bio

const BioData = ({ bio }) => {
    

    return (
        <div>

            <div className="w-full max-w-sm overflow-hidden hover:bg-blue-300 bg-blue-200 border-2 border-blue-400 rounded-lg shadow-lg dark:bg-gray-800">
                <img src={bio.photo || LogoImg} alt="" className="w-full lg:h-[300px] rounded-2xl p-4"/>

                <div className="ml-28 mt-3">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">BioData Id : {bio.id}</h1>
                </div>

                <div className="px-6 py-2">

                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{bio.name}</h1>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">Gender : {bio.type}</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">Division : {bio.presentDiv}</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">Age : {bio.age}</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">Occupation : {bio.occupation}</h1>
                    </div>

                    <Link to={`/bioData/${bio._id}`} className="inline-flex items-center mt-4 lg:ml-24 justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-indigo-600 hover:bg-transparent hover:outline hover:text-black    transition duration-500 ease-in-out">
                        View Profile
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BioData;