import './Loading.css';

const Loading = () => {
    return (
        <div className='mx-auto container'>

            {/* <span className="loader mx-auto container   mt-40"></span> */}
            <div className="w-32 h-32 border-4 lg:ml-[650px]  lg:mt-40 border-dashed rounded-full bg-indigo-600 animate-spin "></div>
            {/* <span className="loader"></span> */}
        </div>
    );
};

export default Loading;