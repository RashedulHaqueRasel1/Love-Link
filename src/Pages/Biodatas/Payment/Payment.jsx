import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Checkout/Checkout";
import Navbar from "../../../components/Common/Navbar";
import Footer from "../../../components/Common/Footer";



const stripPromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {


    return (
        <div>

            <Navbar></Navbar>

            <div className="lg:w-[650px] mx-auto container lg:mt-24">
                <Elements stripe={stripPromise}>
                    <Checkout ></Checkout>
                </Elements>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Payment;