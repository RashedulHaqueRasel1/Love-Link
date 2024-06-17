import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Auth/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLink = () => {

    const { googleLogin } = useContext(AuthContext);
    // console.log(googleLogin)
    const navigate = useNavigate();

    // // Google Sing in
    const handleGoogleSignIn = () => {

        googleLogin()

            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Google login Success!",
                    text: "congratulations! Well Come Your Website.",
                    icon: "success"
                });

                // const userInfo = {
                //     email: result.user?.email,
                //     name: result.user?.displayName
                // }
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data)
                //         Swal.fire({
                //             title: "LogIn Success!",
                //             text: "You clicked the button!",
                //             icon: "success"
                //         });

                //         navigate('/')
                //     })


                // Page Change
                navigate('/')

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.log(error.code)
            })


    }



    return (
        <div>
            <div>

                <div className="">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-4 w-full bg-blue-300  rounded-3xl bg-primary hover:bg-transparent hover:outline text-black hover:text-black mr-3 mt-4" >

                        <div className="flex justify-center">
                            <FcGoogle className="text-2xl"></FcGoogle>
                            <h1 className="text-center mt-1 font-semibold ml-2">Continue With Google</h1>
                        </div>

                    </button>


                </div>

            </div>

        </div>
    );
};

export default SocialLink;