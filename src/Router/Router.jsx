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
      
    }


    






])