import { FaEnvelope, FaHome, FaList,  FaUsers } from 'react-icons/fa';
import { FaPersonRifle } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {

    // const [isAdmin] = useAdmin()
    const isAdmin = true


    return (
        <div>
             <div className="flex">
            {/*dashboard side bar */}
            <div className="w-[256px] min-h-screen bg-sky-600 text-white font-bold">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}>
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to={'/dashboard/users'}>
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/userHome'}>
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                               
                                <li>
                                    <NavLink to={'/dashboard/review'}>
                                       
                                    My Appointments</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        
                                        Test Result</NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav Links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                        <FaPersonRifle></FaPersonRifle>
                            My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/contact'}>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard contain */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default DashBoard;