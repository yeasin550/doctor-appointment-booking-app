/* eslint-disable no-unused-vars */
import { FaStethoscope } from "react-icons/fa";
import { RiMicroscopeFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";


const AppointmentForm = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 my-20">

            <div className="md:flex items-center gap-8">
                {/* Left side - Features */}
                <div className="space-y-6 md:w-1/2">

                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Book Your Appointment</h1>
                    <p className="text-gray-600 mb-8">
                        Great doctor if you need your family member to get effective immediate
                        assistance, emergency treatment or a simple consultation.
                    </p>
                    <div className="flex items-center gap-4 border border-gray-300 rounded-md p-5 hover:bg-[#4373F1] duration-500 hover:text-white">
                        <FaStethoscope className="text-5xl"/>

                           <div className="space-y-3">

                            <h1 className="font-bold text-lg">Success Of Treatment</h1>
                            <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.</p>
                           </div>
                    </div>
                    <div className="flex items-center gap-4 border border-gray-300 rounded-md p-5 hover:bg-[#4373F1] duration-500 hover:text-white">
                        <RiMicroscopeFill className="text-5xl"/>

                           <div className="space-y-3">

                            <h1 className="font-bold text-lg">Modern Technology</h1>
                            <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.</p>
                           </div>
                    </div>
                    <div className="flex items-center gap-4 border border-gray-300 rounded-md p-5 hover:bg-[#4373F1] duration-500 hover:text-white">
                        <FaUserDoctor className="text-5xl"/>

                           <div className="space-y-3">

                            <h1 className="font-bold text-lg">Certified Doctors</h1>
                            <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.</p>
                           </div>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm md:w-1/2 border border-gray-400">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Patient Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Patient Name :"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Departments
                                </label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option>Eye Care</option>
                                    <option>Dentist</option>
                                    <option>Dental Care</option>
                                    <option>General Surgery</option>
                                    <option>Neurologist</option>
                                    <option>Urologist</option>
                                    <option>Gastrologist</option>
                                    <option>Orthopedic</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Doctor
                                </label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option>Dr. Calvin Carlo</option>
                                    <option>Dr. John Smith</option>
                                    <option>Dr. Sarah Wilson</option>
                                    <option>Dr. Sarah Bennett</option>
                                    <option>Dr. Michael Carter</option>
                                    <option>Dr. David Lin</option>
                                    <option>Dr. Priya Patel</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email :"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Phone :"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Time <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="time"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Comments <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Your Message :"
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-colors duration-200"
                        >
                            Book An Appointment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Feature Card Component
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default AppointmentForm;