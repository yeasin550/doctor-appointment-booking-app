import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Appointment from "../Pages/Appointment/Appointment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/appointment",
                element: <Appointment/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    },
]);
export default router;