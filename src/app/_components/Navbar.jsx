"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logos.png"

const Navbar = () => {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Doctors",
            path: "/doctors",
        },
        {
            id: 3,
            name: "Appointment",
            path: "/appointment",
        },
        {
            id: 4,
            name: "Explore",
            path: "/explore",
        },
        {
            id: 5,
            name: "Contact Us",
            path: "/contact",
        },
    ]
    return (
        <div className="flex items-center justify-between p-4 shadow-sm sticky top-0 z-50 bg-white">
            <div className="flex items-center">
                <Image src={logo} alt="logo" width={40} height={40}/>

            </div>
                <ul className="md:flex gap-4 hidden">
                    {
                        Menu.map((item, index) => (
                            <Link href={item.path}>
                            <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">{item.name}</li>
                            </Link>
                        ))
                    }

                </ul>
            <Button>Login</Button>

        </div>
    );
};

export default Navbar;