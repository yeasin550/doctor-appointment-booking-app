import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import AdminDashboard from "./Dashboard/AdminDashboard/AdminDashboard";
import DoctorDashboard from "./Dashboard/DoctorDashboard/DoctorDashboard";
import PatientDashboard from "./Dashboard/PatientDashboard/PatientDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    // console.log(role)
    const [isLoading, setIsLoading] = useState(true);
    // console.log(user)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users`) // Fetch all users
                .then((res) => res.json())
                .then((data) => {
                    // Find the user that matches the logged-in email
                    const foundUser = data.find((u) => u.email === user.email);

                    if (foundUser) {
                        // Destructure the role from the found user and normalize to lowercase
                        const { role } = foundUser;
                        setRole(role.toLowerCase()); // Convert role to lowercase to avoid case issues

                        setIsLoading(false);
                    } else {
                        console.warn("No user found with the current email");
                        setIsLoading(false);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [user]);

    if (loading || isLoading) {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    if (!user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen space-y-5">
                <h1 className="text-3xl font-bold text-red-500">No user is logged in.</h1>
                <div className="flex items-center gap-5">
                    <Link to="/" className="py-2 px-4 rounded-md bg-purple-700 text-white font-bold">
                        Back To Home
                    </Link>
                    <Link to="/login" className="py-2 px-4 rounded-md bg-green-700 text-white font-bold">
                        Go To Login
                    </Link>
               </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen md:px-0">
            {role === 'admin' && <AdminDashboard />}
            {role === 'doctor' && <DoctorDashboard />}
            {role === 'patient' && <PatientDashboard />}
            {/* {user?.role === 'patient' && <PatientDashboard />} */}
            {!role && <div className="flex flex-col justify-center items-center w-full space-y-5">
                <h1 className="text-3xl font-bold text-red-500"> No valid role found for this account. Check database user entry. </h1>
                <Link to="/" className="py-2 px-4 rounded-md bg-purple-700 text-white font-bold">Back To Home
                </Link>
            </div>}
        </div>

    );
};

export default Dashboard;
