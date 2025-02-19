import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import contact_page_image from "../../../assets/contact1.png";

const ContactUs = () => {
    return (
        <div className="my-12 w-11/12 mx-auto">
            <div className="text-center space-y-2 md:w-1/2 mx-auto my-12">
                <h1 className="text-4xl font-bold">Have a Question? Get In Touch</h1>
                <p>Have a question? Want to book an appointment for yourself or your children? Give us a call or send an email to contact the MedService.</p>
            </div>

            <div className="md:flex items-center justify-around gap-4 text-center">
                {/* Card 1 */}
                <div className="flex flex-col items-center p-4 rounded-lg w-full md:w-96 space-y-3">
                    <FaPhoneAlt className="bg-gray-200 hover:bg-gray-100 hover:border border-black text-[#305CCC] p-4 rounded-full text-6xl" />
                    <h2 className="text-xl font-semibold">Phone</h2>
                    <p className="">Great doctor if you need your family member to get effective assistance</p>
                    <p className="">+8801234567890</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center p-4 rounded-lg w-full md:w-96 space-y-3">
                    <MdEmail className="bg-gray-200 hover:bg-gray-100 hover:border border-black text-[#305CCC] p-4 rounded-full text-6xl" />
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="">Great doctor if you need your family member to get effective assistance</p>
                    <p className="">health@doctor.com</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center p-4 rounded-lg w-full md:w-96 space-y-3">
                    <FaLocationDot className="bg-gray-200 hover:bg-gray-100 hover:border border-black text-[#305CCC] p-4 rounded-full text-6xl" />
                    <h2 className="text-xl font-semibold">Location</h2>
                    <p className="">Great doctor if you need your family member to get effective assistance</p>
                    <p className="">Dhaka Bangladesh</p>
                </div>
            </div>

            <div className="my-6">
                <div className="md:flex justify-between items-center px-8">
                    <div className="md:w-1/2">
                        <img src={contact_page_image} alt="logo" width={550} height={400} />

                    </div>
                    <form
                        action="https://fabform.io/f/xxxxx"
                        method="post"
                        className="space-y-4 md:w-1/2"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-sm py-2.5 px-4 border border-gray-500 text-sm outline-[#007bff]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-sm py-2.5 px-4 border border-gray-500 text-sm outline-[#007bff]"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                placeholder="Number"
                                name="subject"
                                className="w-full rounded-sm py-2.5 px-4 border border-gray-500 text-sm outline-[#007bff]"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                className="w-full rounded-sm py-2.5 px-4 border border-gray-500 text-sm outline-[#007bff]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Survices"
                            name="subject"
                            className="w-full rounded-sm py-2.5 px-4 border border-gray-500 text-sm outline-[#007bff]"
                        />
                        <textarea
                            placeholder="Message"
                            rows={6}
                            name="message"
                            className="w-full rounded-sm px-4 border border-gray-500 text-sm pt-2.5 outline-[#007bff]"
                            defaultValue={""}
                        />
                        <button
                            type="button"
                            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;