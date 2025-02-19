
"use client"
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen md:px-0">
            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform md:translate-x-0 md:relative`}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    Doctor Dashboard
                </div>
                <ul className="p-4 space-y-2">
                    <li className="hover:bg-gray-500 p-2 rounded">Home</li>
                    <li className="hover:bg-gray-500 p-2 rounded">Profile</li>
                    <li className="hover:bg-gray-500 p-2 rounded">Settings</li>
                    <li className="hover:bg-gray-500 p-2 rounded">Logout</li>
                </ul>
            </div>

            {/* Overlay for small screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <h1 className="text-xl font-bold">Doctor Dashboard</h1>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h2 className="text-2xl font-bold">Welcome to your dashboard</h2>
                    <p className="mt-2 text-gray-600">Manage your tasks and settings.</p>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;