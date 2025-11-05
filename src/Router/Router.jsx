import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import DashboardPage from "../dashboard/DashboardPage";
import DashboardLayout from "../dashboard/DashboardLayout";
import UserPage from "../dashboard/UserPage";
import ProfilePage from "../dashboard/ProfilePage";


export const router = createBrowserRouter([

    {
        path:"/",
        element:<Home></Home>
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
            }
            
        ]
      
    }


    






])