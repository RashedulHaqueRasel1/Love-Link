import Lottie from "lottie-react";
import aboutImg from "../../assets/about.json"


const About = () => {
    return (
        <div className="mx-auto container">

            <div>
                <h1 className="text-center font-bold text-5xl mt-8">About Us</h1>
            </div>

            <div>
                <p className="text-center font-medium mt-4 text-[18px]">
                    Welcome to Love Link, your trusted companion in finding a life partner. Our platform is designed to help you connect with like-minded individuals, <br /> ensuring you find someone who shares your values, interests, and dreams.
                </p>

                <h1 className="text-center font-bold text-xl mt-8">Our Mission</h1>
                <p className="  font-medium mt-4 text-[18px]">
                    At Love Link, our mission is to bring people together for meaningful and lasting relationships. We believe that everyone deserves to find love and companionship, <br /> and we are committed to making that journey as smooth and enjoyable as possible.
                </p>

                <h1 className="text-center font-bold text-xl mt-8">--- What We Offer ---</h1>
                <p className="  font-medium mt-4 text-[18px]">
                    <ul className="list-disc">
                        <li><span className="font-semibold"> Personalized Matches :</span> Our advanced algorithms take into account your preferences, lifestyle, and values to suggest potential partners who truly complement you.</li>

                        <li><span className="font-semibold">Extensive Profiles :</span> Detailed profiles help you get to know potential matches better, with comprehensive information about their background, interests, and expectations.</li>

                        <li><span className="font-semibold">Privacy and Security :</span> Your safety is our top priority. We employ robust security measures to protect your personal information and ensure a safe online experience.</li>

                        <li><span className="font-semibold">Community Support :</span> Join our vibrant community and engage in discussions, share experiences, and seek advice from fellow members.</li>
                    </ul>
                </p>


                <h1 className="text-center font-bold text-xl mt-8">--- Why Choose Us? ---</h1>
                <p className="  font-medium mt-4 text-[18px]">
                    <ul className="list-disc">
                        <li><span className="font-semibold">Trusted by Millions :</span> With a vast user base, Love Link is a trusted platform for individuals seeking serious relationships and marriage.</li>

                        <li><span className="font-semibold">Success Stories :</span> Countless couples have found their perfect match through our platform. Read their heartwarming stories and get inspired.</li>

                        <li><span className="font-semibold">User-Friendly Interface : </span> Our easy-to-use website and app make the search for a life partner convenient and hassle-free.</li>
                    </ul>
                </p>


                <div className="flex justify-center items-center">
                    <div className="items-center justify-center">
                        <h1 className=" font-bold text-xl mt-8">Join Us Today</h1>
                        <p className="  font-medium mt-4 text-[18px]">
                            Start your journey towards a happy and fulfilling marriage with Love Link. Register now, create your profile, and begin exploring a world of possibilities. Love is just a click away!
                        </p>
                    </div>
                    <div>
                        {/* Lottie img added */}
                        <Lottie animationData={aboutImg} loop={true} className="object-contain  lg:ml-10 h-96 " />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;