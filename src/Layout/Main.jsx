 
import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
 

const Main = () => {
    return (
        <div>
            {/* Navbar Section */}
            <Navbar></Navbar>

            {/* Outlet Section */}
            <Outlet></Outlet>

            {/* Footer Section */}
            <Footer></Footer>
            
        </div>
    );
};

export default Main;