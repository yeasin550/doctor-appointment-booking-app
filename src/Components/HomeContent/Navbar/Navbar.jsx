
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logos.png"



const Navbar = () => {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Dashboard",
            path: "/dashboard",
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
                            <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out text-lg">
                                {item.name}
                            </li>
                        </NavLink>

                    ))
                }
            </ul>
            <Link href="/login">
                <button className="bg-[#257EFD] py-2 px-4 rounded-md text-white cursor-pointer">Appointment</button>
            </Link>
        </div>
    );
};

export default Navbar;