import { createBrowserRouter } from "react-router-dom";
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
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Reservation from "../Pages/Dashboard/Reservation";
import PrivateRoute from "./PrivetRoute";
import TestResult from "../Pages/TestResut/TestResult";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import StatisticPage from "../Pages/Dashboard/StatisticPage";
import ContactUs from "../Pages/ExtraPage/ContactUs";
import AboutUs from "../Pages/ExtraPage/AboutUs";
import Blog from "../Pages/ExtraPage/Blog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/alltest',
        element: <PrivateRoute><AllTest></AllTest></PrivateRoute>
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
        // element: <TestDetails></TestDetails>
      },
      {
        path: '/payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      }, 
      {
        path:'/about-us',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: 'upcomingAppoint',
        element: <PrivateRoute><UpcomingAppoint></UpcomingAppoint></PrivateRoute>
      },
      
      {
        path: 'updateProfile/:email',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'testresult',
        element: <PrivateRoute><TestResult></TestResult></PrivateRoute>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      // admin
      {
        path: 'allUser',
        element: <AllUser></AllUser>
      },
      {
        path: 'addBanner',
        element: <AddBanner></AddBanner>
      },
      {
        path: 'allBanner',
        element: <AllBanner></AllBanner>
      },
      {
        path: 'addTest',
        element: <AddTest></AddTest>
      },
      {
        path: 'all-test',
        element: <AllTestTable></AllTestTable>
      },
      {
        path: 'updateTest/:id',
        element: <UpdatePage></UpdatePage>
      },
      {
        path: 'reservation',
        element: <Reservation></Reservation>
      },
      {
        path: 'dashboard',
        element: <StatisticPage></StatisticPage>
      }
    ]
  }
]);