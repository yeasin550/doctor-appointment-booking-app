
import Image from "next/image";
import service1 from "../../assets/service-01.svg"
import service2 from "../../assets/service-02.svg"
import service3 from "../../assets/service-03.svg"
import service4 from "../../assets/service-04.svg"
import service5 from "../../assets/service-05.svg"
import service6 from "../../assets/service-06.svg"
import service7 from "../../assets/service-07.svg"



const Hero = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?w=740&t=st=1709917045~exp=1709917645~hmac=4ce6de62f5fc96f7b91329ed6bb47b19c9fc816c9b6656c9c9dfcfc6c4f5cdc4"
                                className="absolute inset-0 h-[350px] w-full object-cover mt-5 rounded-md"
                            />
                            {/* <img
                                alt=""
                                src="https://img.freepik.com/free-photo/camera-hospital-group-team-doctor-beard_1291-36.jpg?w=740&t=st=1709917018~exp=1709917618~hmac=b8d51e7d7e3633a0d0906447840e8ed9dc57b7fb5d5a4d452fd8db7c3fd0e48f"
                                className="absolute inset-0 h-full w-full object-cover"
                            /> */}
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className="text-sky-600">Appointment</span> Your Favourite Doctors!</h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                quidem quam repellat.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:flex flex-wrap justify-center gap-7">
                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#EAE9FF]">
                    <Image src={service1} alt="logo" width={70} height={70} className="bg-[#EAE9FF] p-3 rounded-full"/>
                    <h1>Book Appointment </h1> 
                </div>

                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#c6e593]">
                    <Image src={service2} alt="logo" width={70} height={70} className="bg-[#c6e593] p-3 rounded-full" />
                     <h1> Lab Testing Services</h1> 
                </div>

                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#C9F3FF]">
                    <Image src={service3} alt="logo" width={70} height={70} className="bg-[#C9F3FF] p-3 rounded-full"/>
                     <h1> Medicines & Supplies</h1> 
                </div>

                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#FFE5E4]">
                    <Image src={service4} alt="logo" width={70} height={70} className="bg-[#FFE5E4] p-3 rounded-full"/>
                    <h1> Hospitals / Clinics</h1> 
                </div>

                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#D8FFDA]">
                    <Image src={service5} alt="logo" width={70} height={70} className="bg-[#D8FFDA] p-3 rounded-full"/>
                    <h1> Health Care Services</h1> 
                </div>
        
                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#ddc3d3]">
                    <Image src={service6} alt="logo" width={70} height={70} className="bg-[#ddc3d3] p-3 rounded-full"/>
                    <h1>  Talk to Doctors</h1> 
                </div>
                <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-md border border-gray-300 text-center md:w-64 hover:bg-[#FFEADF]">
                    <Image src={service7} alt="logo" width={70} height={70} className="bg-[#FFEADF] p-3 rounded-full"/>
                    <h1> Home Care Services</h1> 
                </div>
            </section>
        </div>
    );
};

export default Hero;