
import { useState } from "react";
import useAllBioData from "../../../hook/useAllBioData/useAllBioData";
import PremiumCard from "./PremiumCard";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Loading from "../../../Layout/Loading/Loading";


const PremiumCards = () => {

    const [bio, refetch] = useAllBioData();
    const [spots, setSpots] = useState(bio);


    const handleOne = () => {
        const a = [...spots].sort(function (a, b) {
            if (a.age < b.age) {
                return -1
            }
            return 0
        });
        setSpots(a)
        refetch()
    }

    const handleTwo = () => {
        const b = [...spots].sort(function (a, b) {
            if (a.age > b.age) {
                // console.log(a.cost)
                return -1
            }
            return 0
        });
        setSpots(b)
        refetch()
    }


    refetch()
    // console.log(bio)

    if (spots > 0) {
        return <Loading></Loading>
    }



    return (
        <div>

            <section className="mx-auto container">

                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Our <span className="text-blue-500 ">Premium</span> Members
                    </h1>

                    <p className="max-w-2xl mx-auto mt-6 text-center text-[17px] text-gray-500 dark:text-gray-300">
                        At Matrimony, we offer a premium membership to provide you with an enhanced experience and exclusive benefits. Here s what you can expect as a Premium Member
                    </p>

                </div>

                {/* Sorting Ascending to Descending */}
                <div className="lg:ml-[650px]">
                    <FormControl className="w-40 bg-indigo-400">
                        <InputLabel id="demo-simple-select-label">ordering</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="ordering"
                        >
                            <MenuItem onClick={handleOne} value={10}>Ascending</MenuItem>
                            <MenuItem onClick={handleTwo} value={20}>Descending</MenuItem>
                        </Select>
                    </FormControl>
                </div>




                <div className='grid grid-cols-1 justify-center items-center p-4   gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        spots.filter(b => b?.status === "premium").slice(0, 6).map(data => <PremiumCard key={data._id} data={data}></PremiumCard>)
                    }
                </div>
            </section>

        </div>
    );
};

export default PremiumCards;