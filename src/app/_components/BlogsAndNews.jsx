"use client"

import BlogCard from "./BlogCard";


const BlogsAndNews  = () => { 

        const posts = [
        {
            date: "13th Sep 2023",
            readTime: "5 min",
            title: "Easily connect to doctor and make a treatment",
            likes: "33",
            comments: "08"
        },
        {
            date: "29th Nov 2023",
            readTime: "5 min",
            title: "Lockdowns lead to fewer people seeking medical care",
            likes: "33",
            comments: "08"
        },
        {
            date: "29th Dec 2023",
            readTime: "5 min",
            title: "Medicine research course for doctors",
            likes: "33",
            comments: "08"
        }
    ];
    return (            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                posts?.map((post, index) =>
                    <BlogCard key={index} post={post}/>
                
            )}
        </div>
    );
};

export default BlogsAndNews;
 



