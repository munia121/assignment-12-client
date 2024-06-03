import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../MainLayOut/DashBoard";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddBanner from "../Pages/Dashboard/AddBanner/AddBanner";
import AllBanner from "../Pages/Dashboard/AllBanner/AllBanner";
import Home from "../Pages/HomePage/Home/Home";
import AllTest from "../Pages/AllTest/AllTest";
import AddTest from "../Pages/AllTest/AddTest";
import TestDetails from "../Component/All-TestDetails/TestDetails";
import AllTestTable from "../Component/All-TestDetails/AllTestTable";
import UpdatePage from "../Component/All-TestDetails/UpdatePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Payment/Payment";
import UpcomingAppoint from "../Pages/UpcomingAppoint/UpcomingAppoint";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
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
        {
          path:'/details/:id',
          element:<TestDetails></TestDetails>
        },
        {
          path:'/payment/:id',
          element:<Payment></Payment>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'upcomingAppoint',
          element:<UpcomingAppoint></UpcomingAppoint>
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
        },
        {
          path:'all-test',
          element:<AllTestTable></AllTestTable>
        },
        {
          path:'updateTest/:id',
          element:<UpdatePage></UpdatePage>
        }
      ]
    }
  ]);