import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../MainLayOut/DashBoard";
import MyAppointments from "../Pages/Dashboard/MYyAppointments/MyAppointments";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element: <div>hello</div>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'myAppointments',
          element:<MyAppointments></MyAppointments>
        }
      ]
    }
  ]);