 
import useAllBioData from "../../hook/useAllBioData/useAllBioData";
import useAllPayments from "../../hook/useAllPayments/useAllPayments";
 

const Admin = () => {

    const [allData] = useAllBioData();
    const [payment] = useAllPayments();



    const MaleCount = allData.filter(person => person.type === 'Male').length;
    const FemaleCount = allData.filter(person => person.type === 'Female').length;
    const PremiumCount = allData.filter(person => person.status === 'premium').length;

    const TotalRevenue = payment.reduce((total, payment) => total + payment.revenue, 0);

    // console.log(TotalRevenue)
 
    return (
        <div>

            <div>

                <section className="  dark:bg-gray-900 ">
                    <div className="container lg:px-2 mb-2 mx-auto">

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-4 xl:gap-16 md:grid-cols-2 xl:grid-cols-5">

                            <div className="flex flex-col items-center px-20 lg:px-0  space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400 bg-white bg-opacity-30   rounded-lg">
                                <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {/* <IoCreateOutline className="text-5xl"></IoCreateOutline> */}
                                </span>
                                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Total Biodata</h1>
                                <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                    {allData.length}
                                </p>
                            </div>

                            <div className="flex flex-col items-center px-20 lg:px-0 space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                                <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {/* <IoCreateOutline className="text-5xl"></IoCreateOutline> */}
                                </span>
                                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Male Biodata</h1>
                                <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                    {MaleCount}
                                </p>
                            </div>

                            <div className="flex flex-col items-center px-20 lg:px-0  space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                                <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {/* <IoCreateOutline className="text-5xl"></IoCreateOutline> */}
                                </span>
                                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Female Biodata</h1>
                                <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                    {FemaleCount}
                                </p>
                            </div>

                            <div className="flex flex-col items-center px-20 lg:px-0  space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                                <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {/* <IoCreateOutline className="text-5xl"></IoCreateOutline> */}
                                </span>
                                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Total Premium</h1>
                                <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                    {PremiumCount}
                                </p>
                            </div>

                            <div className="flex flex-col items-center px-20 lg:px-0  space-y-3 text-center   dark:bg-gray-800 hover:bg-blue-400  border-2 border-sky-400   rounded-lg bg-white bg-opacity-30 ">
                                <span className="inline-block p-3 text-white bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    {/* <IoCreateOutline className="text-5xl"></IoCreateOutline> */}
                                </span>
                                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">Total Revenue</h1>
                                <p className="text-black font-bold text-6xl" data-aos="fade-up">
                                    {TotalRevenue}
                                </p>
                            </div>







                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Admin;