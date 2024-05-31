import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/NamBar/NavBar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;