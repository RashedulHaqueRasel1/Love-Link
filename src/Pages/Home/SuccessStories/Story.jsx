import LogoImg from "../../../assets/noImg.jpg"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// SuccessStorys page to story
const Story = ({ story }) => {

    return (
        <div className="mx-auto container">
            <div className="w-full max-w-sm overflow-hidden hover:bg-blue-300 bg-blue-200 border-2 border-blue-400 rounded-lg shadow-lg dark:bg-gray-800">
                <img src={story.photo || LogoImg} alt="" className="w-full lg:h-[300px] rounded-2xl p-4" />



                <div className="px-6 py-2">

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={story.rating}
                                readOnly
                            />
                        </h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm font-bold">Marriage Date : {story.marriageDate}</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className="px-2 text-sm ">{story.story}</h1>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Story;