import { createBrowserRouter } from "react-router";
import Home from "../page/Home";


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
                path: 'User',
                element: <User></User>

            }
        ]
      
    }


    






])