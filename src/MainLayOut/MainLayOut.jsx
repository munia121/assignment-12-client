import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/NamBar/NavBar";
import Footer from "../Component/HomePageComponent/Footer";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-44">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;