import { Button } from "@/components/ui/button";
import logo from "../../assets/footerlogo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="md:flex items-center md:justify-between py-12 md:text-left text-center">
            <div className="">
                <Image src={logo} alt="logo" width={180} height={80} />
                <p>Effortlessly schedule your medical <br /> appointments with Doccure. Connect <br /> with healthcare professionals.</p>
                    {/* , manage <br /> appointments & prioritize your well being */}
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-bold">Company</h1>
                <p>Home</p>
                <p>Specialities</p>
                <p>Video Consult</p>
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-bold">Specialities</h1>
                <p>Neurology</p>
                <p>Cardiologist</p>
                <p>Dentist</p>
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-bold">Contact Us</h1>
                <p>3556 Beech Street, USA</p>
                <p>+1 315 369 5943</p>
                <p>doccure@example.com</p>
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-bold">Join Our Newsletter</h1>
                <input type="email" name="" id="" placeholder="Enter Email" className="py-[7px] px-3 rounded-md border border-black"/>
                <Button type="submit">Submit</Button>
                <div className="space-x-3 flex items-center gap-5">
                 <p>f</p>
                <p>i</p>
                <p>w</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;