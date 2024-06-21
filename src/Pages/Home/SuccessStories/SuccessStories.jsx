import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useAllStory from "../../../hook/useAllStory/useAllStory";
import Story from "./Story";
import { useState } from "react";

const SuccessStories = () => {

    const [storys , refetch] = useAllStory();

    const [success, setSpots] = useState(storys);

    const handleOne = () => {
        const a = [...success].sort(function (a, b) {
            if (a.marriageDate < b.marriageDate) {
                return -1
            }
            return 0
        });
        setSpots(a)
        refetch()
    }

    const handleTwo = () => {
        const b = [...success].sort(function (a, b) {
            if (a.marriageDate > b.marriageDate) {
                // console.log(a.cost)
                return -1
            }
            return 0
        });
        setSpots(b)
        refetch()
    }
    refetch()


    return (
        <div className="mx-auto container">

            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    --- Our <span className="text-blue-500 ">Success</span> Stories ---
                </h1>
                <p className="max-w-2xl mx-auto mt-6  text-[17px] text-center text-gray-500 dark:text-gray-300">
                    Our success stories showcase the true magic of finding love online. Read about the amazing experiences of our members who discovered their partners and created beautiful lives together.
                </p>
            </div>

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



            <div className="grid grid-cols-1 justify-center items-center p-4   gap-5 md:grid-cols-2 lg:grid-cols-3">

                {
                    success?.map(story => <Story key={story._id} story={story}></Story>)
                }
            </div>

        </div>
    );
};

export default SuccessStories;