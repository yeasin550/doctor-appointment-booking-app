


import { FaSearch } from "react-icons/fa";

const CategorySearch = () => {
    return (
        <div className="my-12 items-center flex flex-col">
            <h1 className="font-bold text-3xl tracking-wide">Search <span className="text-sky-600">Doctor</span></h1>
            <h2 className="text-gray-500 text-lg text-center">Search your doctor and book appointment in one client</h2>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
                <input type="email" placeholder="Search......." className="py-[6px] px-3 border rounded-sm"/>
                <button type="submit" className="flex items-center bg-[#257EFD] py-2 px-3 text-white rounded-md cursor-pointer"><FaSearch className="h-4 mr-3"/> Subscribe</button>
            </div>
        </div>
    );
};



export default CategorySearch;