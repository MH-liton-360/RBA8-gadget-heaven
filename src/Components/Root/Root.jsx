import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto py-5">
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="py-5">
                <Footer></Footer>

            </div>

        </div>
    );
};

export default Root;