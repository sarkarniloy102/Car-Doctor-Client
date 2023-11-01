import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div >
            <div className="mb-10">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;