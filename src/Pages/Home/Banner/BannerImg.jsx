

const BannerImg = ({ img, title, text }) => {
    return (


        <div
            className='w-full bg-center bg-cover h-[53rem]'
            style={{
                backgroundImage: `url("${img}")`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {title}
                    </h1>
                    <br />
                    <p className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform   rounded-md lg:w-auto   focus:outline-none  '>
                        {text}
                    </p>
                </div>
                
            </div>
            
        </div>


    );
};

export default BannerImg;