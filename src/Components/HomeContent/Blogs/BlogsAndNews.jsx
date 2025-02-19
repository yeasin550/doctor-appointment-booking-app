
import BlogCard from "./BlogCard";


const BlogsAndNews  = () => { 

        const posts = [
        {
            date: "13th Sep 2023",
                image: "https://img.freepik.com/free-photo/doctor-examines-patient-medicine-health-care-concept_1328-3130.jpg",
            readTime: "5 min",
            title: "Easily connect to doctor and make a treatment",
            likes: "33",
            comments: "08"
        },
        {
            date: "29th Nov 2023",
            image: "https://img.freepik.com/free-photo/medium-shot-doctor-taking-blood-pressure_23-2148816211.jpg",
            readTime: "15 min",
            title: "Lock downs lead to fewer people seeking medical care",
            likes: "33",
            comments: "08"
        },
        {
            date: "29th Aue 2023",
            image: "https://img.freepik.com/free-photo/thinking-young-male-doctor-with-medical-glasses-wearing-medical-robe-with-stethoscope-sitting-desk_141793-98657.jpg",
            readTime: "12 min",
            title: "Medicine research course for doctors",
            likes: "33",
            comments: "08"
        }
    ];
    return (           
        <div className="p-6 md:w-11/12 mx-auto">
                <h1 className="text-3xl font-bold my-12">Letest Blog</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        posts?.map((post, index) =>
                       <BlogCard key={index} post={post}/>              
                     )}
              </div>
        </div> 
    );
};

export default BlogsAndNews;
 



