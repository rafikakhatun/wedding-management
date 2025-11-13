
import Home from "../page/Home";
import DashboardPage from "../dashboard/DashboardPage";
import DashboardLayout from "../dashboard/DashboardLayout";
import UserPage from "../dashboard/UserPage";
import ProfilePage from "../dashboard/ProfilePage";
import SettingsPage from "../dashboard/SettingsPage";
import Login from "../component/HomeComponent/Login";
import Register from "../component/HomeComponent/Register";
import { createBrowserRouter } from "react-router-dom";




export const router = createBrowserRouter([

    {
        path:"/",
        element:<Home></Home>
    },

    {
        path:"/login",
        element:<Login></Login>

    },

    {
        path:"/register",
        element:<Register></Register>
    },

     {
     path: '/admin/dashboard',
        element: <DashboardLayout />,

        children: [
          {
                index: true, // '/admin/dashboard' এর জন্য ডিফল্ট পেজ
                element: <DashboardPage />,
            },

            {
                path:'/admin/dashboard/User',
                element:<UserPage></UserPage>
            },

            {
                path:'/admin/dashboard/profile',
                element:<ProfilePage></ProfilePage>
            },

            {
                path:'/admin/dashboard/settings',
                element:<SettingsPage></SettingsPage>
            }
            
        ]
      
    }


    






])