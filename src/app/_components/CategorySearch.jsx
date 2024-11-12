import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategorySearch = () => {
    return (
        <div className="my-12 items-center flex flex-col">
            <h1 className="font-bold text-3xl tracking-wide">Search <span className="text-sky-600">Doctor</span></h1>
            <h2 className="text-gray-500 text-lg">Search your doctor and book appointment in one client</h2>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
                <Input type="email" placeholder="Search......." />
                <Button type="submit"><Search className="h-4 mr-3"/> Subscribe</Button>
            </div>
        </div>
    );
};



export default CategorySearch;