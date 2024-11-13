import { FaCalendarAlt, FaRegClock, FaRegHeart, FaMessage , FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { MdMessage } from "react-icons/md";

const BlogCard = ({ post }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative h-48 bg-gray-200">
                <Image src="/api/placeholder/400/200" alt="logo" width={500} height={500} className="w-full h-full object-cover" />
            </div>



            <div className="p-4">
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                    <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRegClock className="w-4 h-4" />
                        <span>{post.readTime} read</span>
                    </div>
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                    {post.title}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-600">
                            <FaRegHeart className="w-4 h-4 cursor-pointer" />
                            <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <MdMessage className="w-4 h-4 cursor-pointer" />
                            <span>{post.comments}</span>
                        </div>
                    </div>
                    <button className="text-blue-500 flex items-center hover:text-blue-600">
                        Read More
                        <FaAngleRight className="w-4 h-4 cursor-pointer ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
