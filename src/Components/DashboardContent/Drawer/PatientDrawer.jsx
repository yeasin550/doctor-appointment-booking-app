

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const PatientDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);


        const { logOut } = useContext(AuthContext);
    
        const handleLogOut = () => {
            logOut()
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => console.log(error));
        };
    // Navigation items stored in a constant
    const navItems = [
        { id: 1, name: "Profile", path: "/dashboard/doctorProfile" },
        // { id: 2, name: "Patients Profile", path: "/dashboard/patientsProfile" },
        { id: 2, name: "View Appointments", path: "/dashboard/view-appointments" },
        { id: 2, name: "Appointment Status", path: "/dashboard/appointment-status" },
        { id: 2, name: "Patient Records", path: "/dashboard/patient-records" },
        { id: 2, name: "Availability Settings", path: "/dashboard/availability" },
        // { id: 3, name: "Home", path: "/" },
        // { id: 4, name: "Logout", path: "/dashboard/logout" },
    ];

    return (
        <div className="w-64 fixed top-0 left-0 h-full">
            {/* Mobile Menu Button */}
            <button
                className="absolute top-4 left-4 z-30 md:hidden text-white bg-gray-800 p-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    // Cross (X) icon when menu is open
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger menu icon when menu is closed
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-20 w-64 h-full bg-gray-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform md:translate-x-0 md:relative md:flex-shrink-0`}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    Patient Dashboard
                </div>
                <div className="flex flex-col justify-between">
                    <ul className="p-4 space-y-2">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `p-2 rounded block ${isActive ? "font-bold bg-gray-600" : "hover:bg-gray-500"}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </ul>
                    <div className="p-4 space-y-2 mt-36">

                        <NavLink to="/"
                            className={({ isActive }) =>
                                `p-2 rounded block ${isActive ? "font-bold bg-gray-600" : "hover:bg-gray-500"}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            // to="/logout"
                            className={({ isActive }) =>
                                `p-2 rounded block ${isActive ? "font-bold bg-gray-600" : "hover:bg-gray-500"}`
                            }
                            onClick={handleLogOut}
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Overlay for small screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default PatientDrawer;
