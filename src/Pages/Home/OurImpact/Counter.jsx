import useAllBioData from "../../../hook/useAllBioData/useAllBioData";
import useAllStory from "../../../hook/useAllStory/useAllStory";
import './Counter.css'



const Counter = () => {
    const [allData] = useAllBioData();
    const [story] = useAllStory();


    const MaleCount = allData.filter(person => person.type === 'Male').length;
    const FemaleCount = allData.filter(person => person.type === 'Female').length;



    return (
        <div className="">

            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                   --- Our <span className="text-blue-500 ">Success</span> Counter ---
                </h1>

                <p className="max-w-2xl mx-auto mt-6  text-[17px] text-center text-gray-500 dark:text-gray-300">
                    At Love Link, we take pride in the success stories that our platform has helped create. To give you a glimpse of our accomplishments and to showcase our dedication to fostering meaningful connections, we present our Success Counter.
                </p>

            </div>

            <section className="  dark:bg-gray-900 Featured-image bg-fixed">
                <div className="container px-2 mb-2 mx-auto">

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-4 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
                        
                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400 bg-white bg-opacity-30   rounded-lg">
                            <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">

                            </span>
                            <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Total Biodata</h1>
                            <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                {allData.length}
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                            <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">

                            </span>
                            <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Male Biodata</h1>
                            <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                {MaleCount}
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                            <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">

                            </span>
                            <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Female Biodata</h1>
                            <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                {FemaleCount}
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center p-6 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                            <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">

                            </span>
                            <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Total Marriages</h1>
                            <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                {story.length}
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Counter;