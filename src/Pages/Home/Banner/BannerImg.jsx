

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
                    <p className=' w-3/4 ml-32  text-xl font-medium text-white '>
                        {text}
                    </p>
                </div>
                
            </div>
            
        </div>


    );
};

export default BannerImg;