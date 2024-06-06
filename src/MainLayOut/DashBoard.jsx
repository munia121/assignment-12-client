

import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';




const DashBoard = () => {

    const [isAdmin] = useAdmin()



    return (
        <div>
            <div className="flex ">
                {/*dashboard side bar */}
                <div className="w-[256px] flex flex-col justify-between min-h-screen bg-sky-600 text-white font-bold">
                    <ul className="menu p-4">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink end to={'/dashboard'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/statistic'}>
                                        <FaHome></FaHome>
                                        Statistic</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addBanner'}>

                                        Add Banner</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addTest'}>

                                        Add a Test</NavLink>
                                </li>
                                <div className='divider'></div>
                                <li>
                                    <NavLink to={'/dashboard/allUser'}>
                                        {/* <FaUsers></FaUsers> */}
                                        All Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allBanner'}>

                                        All Banner</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/all-test'}>

                                        All Test</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}>

                                        Reservation</NavLink>
                                </li>
                            </>
                                :
                                <>


                                    <li>
                                        <NavLink end to={'/dashboard'}>
                                            <FaHome></FaHome>
                                            User Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={'/dashboard/upcomingAppoint'}>

                                            Upcoming Appointments</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/testresult'}>

                                            Test Result</NavLink>
                                    </li>

                                </>
                        }

                        {/* shared nav Links */}
                        <div className="divider"></div>

                    </ul>
                    <div>
                        <ul className='menu p-4'>
                            <li>
                                <NavLink to={'/'}>
                                    <FaHome className='text-xl'></FaHome>
                                    Home</NavLink>
                            </li>
                            {/* <li>
                            <NavLink to={'profile'}>
                                <FaPersonRifle></FaPersonRifle>
                                My Profile</NavLink>
                        </li> */}
                            {!isAdmin ? <li>
                                <NavLink to={'profile'}>
                                    <CgProfile className='text-xl' />
                                    My Profile</NavLink>
                            </li> : ''}
                        </ul>
                    </div>
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