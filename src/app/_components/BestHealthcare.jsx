import logo from "../../assets/doctor.png"
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";


const BestHealthcare = () => {
    return (
        <div className="my-12 md:flex items-center justify-between gap-5 md:px-0 px-5">
            <Image className="md:w-1/2" src={logo} alt="logo" width={600} height={500}/>
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-6xl font-bold">You Deserve The Best Healthcare</h1>
                <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition via workplace diversity empowerment.</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <FaPhoneAlt className="text-4xl text-[#0045CE]"/>
                        <div>
                            <h1>24/7 Emergency Line</h1>
                            <h1 className="text-2xl font-bold">0-800-433-5788</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <MdDateRange className="text-5xl text-[#0045CE]"/>
                        <div>
                            <h1>Online Booking</h1>
                            <h1 className="text-2xl font-bold">Book Appointment</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BestHealthcare;