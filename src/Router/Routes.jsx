import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../MainLayOut/DashBoard";
import MyAppointments from "../Pages/Dashboard/MYyAppointments/MyAppointments";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddBanner from "../Pages/Dashboard/AddBanner/AddBanner";
import AllBanner from "../Pages/Dashboard/AllBanner/AllBanner";
import Home from "../Pages/HomePage/Home/Home";
import AllTest from "../Pages/AllTest/AllTest";
import AddTest from "../Pages/AllTest/AddTest";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/alltest',
          element:<AllTest></AllTest>
        },
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'myAppointments',
          element:<MyAppointments></MyAppointments>
        },
        {
          path:'allUser',
          element:<AllUser></AllUser>
        },
        {
          path:'addBanner',
          element:<AddBanner></AddBanner>
        },
        {
          path:'allBanner',
          element:<AllBanner></AllBanner>
        },
        {
          path:'addTest',
          element:<AddTest></AddTest>
        }
      ]
    }
  ]);