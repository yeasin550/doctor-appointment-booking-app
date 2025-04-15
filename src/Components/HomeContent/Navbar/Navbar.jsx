
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logos.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";




const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const toggleDropdown = () => {
        setOpen(!open);
    };


    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.log(error));
    };
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Dashboard",
            path: "/dashboard/profile",
        },
        {
            id: 3,
            name: "Appointment",
            path: "/appointment",
        },
        {
            id: 4,
            name: "Contact Us",
            path: "/contact",
        },
    ]
    return (
        <div className="flex items-center justify-between py-4 px-14 shadow-sm sticky top-0 z-50 bg-white">
            <div className="flex items-center">
                <img src={logo} alt="logo" width={40} height={40} />

            </div>
            <ul className="md:flex gap-4 hidden">
                {
                    Menu.map((item) => (
                        // <NavLink key={item.id} to={item.path}>
                        //     <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out text-lg">{item.name}</li>
                        // </NavLink>
                        <NavLink key={item.id} to={item.path}
                            className={({ isActive }) => isActive ? "font-bold" : ""}
                        >
                            <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out text-[17px]">
                                {item.name}
                            </li>
                        </NavLink>

                    ))
                }
            </ul>
            {/* <Link to="/login">
                <button className="bg-[#257EFD] py-2 px-4 rounded-md text-white cursor-pointer">
                    Login
                </button>
            </Link> */}
            {/* logout and profile */}
            {/* logout and profile */}

            <div className="relative">
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Profile Image */}
                        <img
                            src={user.photoURL || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"}
                            alt="Profile"
                            onClick={toggleDropdown}
                            className="w-12 h-12 rounded-full cursor-pointer border-2 border-indigo-500 hover:border-pink-500 transition object-cover"
                        />

                        {/* Dropdown */}
                        {open && (
                            <div className="absolute -right-4 mt-40 w-44 bg-purple-700  text-white shadow-lg rounded-md z-50">
                                <Link
                                    to="/dashboard/profile"
                                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogOut}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black"
                                >
                                    Logout
                                </button>
                                <Link to="/dashboard/profile" >
                                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-black" >
                                        Profile
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">
                            <button className="bg-[#257EFD] py-2 px-4 rounded-md text-white cursor-pointer">

                            Login
                        </button>
                    </Link>
                )}
            </div>
            {/* <div className="">
                {user ? (
                    <button
                        onClick={handleLogOut}
                        className="py-2 px-4 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-md shadow-md transition-all hover:shadow-lg hover:from-pink-500 hover:to-red-500"
                    >
                        LogOut
                    </button>
                ) : (
                    <Link to="/login">
                            <button className="bg-[#257EFD] py-2 px-4 rounded-md text-white cursor-pointer">
                                Login
                            </button>
                    </Link>
                )}
            </div> */}
        </div>
    );
};

export default Navbar;