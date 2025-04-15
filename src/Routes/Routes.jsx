import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Components/DashboardContent/Profile/Profile";
import Payment from "../Pages/Appointment/Payment";
import Dashboard from "../Layout/Dashboard";
import ManageDoctors from "../Components/DashboardContent/AdminContent/ManageDoctors/ManageDoctors";
import ManagePatients from "../Components/DashboardContent/AdminContent/ManagePatients/ManagePatients";
import AppointmentOverview from "../Components/DashboardContent/AdminContent/AppointmentOverview/AppointmentOverview";
import PaymentManagement from "../Components/DashboardContent/AdminContent/PaymentManagement/PaymentManagement";
import ViewAppointments from "../Components/DashboardContent/DoctorContent/ViewAppointments/ViewAppointments";
import AppointmentStatus from "../Components/DashboardContent/DoctorContent/AppointmentStatus/AppointmentStatus";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/appointment",
                element: <Appointment />
            },
            {
                path: "/payment",
                element: <Payment />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            // {
            //     path: "/dashboard",
            //     element: <Dashboard/>
            // }
        ]
    },
    {
        path: "/",
        element: <Dashboard />,
        children: [
            // {
            //     path: "/dashboard",
            //     element: <Dashboard />
            // },
            { path: "/dashboard/profile", element: <Profile /> },
            { path: "/dashboard/manage-doctors", element: <ManageDoctors /> },
            { path: "/dashboard/manage-patients", element: <ManagePatients /> },
            { path: "/dashboard/appointment-overview", element: <AppointmentOverview /> },
            { path: "/dashboard/payment-management", element: <PaymentManagement /> },
            { path: "/dashboard/view-appointments", element: <ViewAppointments /> },
            { path: "/dashboard/appointment-status", element: <AppointmentStatus /> },
            {
                path: "/dashboard/home",
                element: <Home />
            }
        ]
    },
]);
export default router;