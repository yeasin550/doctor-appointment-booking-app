/* eslint-disable react/no-unknown-property */
import FAQSIMG from "../../assets/FAQS.png";
import Image from "next/image";

const FAQS = () => {
    return (
        <div className="py-14 px-8">

            <div className="mb-2 space-y-3">
                <p className="text-[#257EFD] font-bold">Get Your Answer</p>
                <h2 className="text-4xl font-bold ">Frequently Asked Questions</h2>
            </div>
            <div className="w-full mx-auto gap-10 py-12 flex flex-col-reverse md:flex-row items-center md:items-start mb-10">
                
                <div className="flex flex-col mt-5 md:w-1/2 space-y-4" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">


                    <div className="mx-auto w-full">
                        <div className="divide-y divide-gray-100">
                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    How do I book an appointment with a doctor?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Can I request a specific doctor when booking my appointment?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500"> Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule..</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    What should I do if I need to cancel or reschedule my appointment?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    If you need to cancel or reschedule your appointment, contact the doctor as soon as possible to inform them and to reschedule for another available time slot.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    What if I'm running late for my appointment?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    If you know you will be late, it's courteous to call the doctor's office and inform them. Depending on their policy and schedule, they may be able to accommodate you or reschedule your appointment.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Can I book appointments for family members or dependents?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so.
                                </div>
                            </details>
                        </div>
                    </div>


                </div>
                <div className="w-full md:w-1/2">
                    <Image src={FAQSIMG} alt="logo" width={500} height={500} />
                </div>
               

            </div>
        </div>
    );
};

export default FAQS;