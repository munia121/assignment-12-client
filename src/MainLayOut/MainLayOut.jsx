import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/NamBar/NavBar";
import Footer from "../Component/HomePageComponent/Footer";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;