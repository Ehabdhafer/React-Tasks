import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
    const [blogs,setBlogs] = useState(null);
    const {blogId} = useParams();

    useEffect(() => {
        const fetchData = async (e) => {
            try{
                const response = await axios.get(`http://localhost:8000/getblogid/${blogId}`);
                setBlogs(response.data);
            }catch(e){
                console.error('error fetching data',e);
            }
        };
        fetchData();
    },[]);
    

    return (
        blogs ? (
        // <div className="flex flex-wrap mx-auto ">
        //     <img src={blogs.image} alt="Blog Image" />
        //     <div className="text-left">
        //         <div>Title : {blogs.title.charAt(0).toUpperCase()+ blogs.title.slice(1)}</div>
        //         <div>Author : {blogs.author}</div>
        //         <div>Name : {blogs.username}</div>
        //         <div>City : {blogs.city}</div>
        //         <div>Description : {blogs.description}</div>
        //         <div>Created At : {blogs.created_at.split("T")[0]}</div>
        //     </div>
        // </div> 

        <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blogs.image}
                  alt="Blog Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Blog Title : {blogs.title.charAt(0).toUpperCase()+ blogs.title.slice(1)}
              </h2>
              <div className="mb-4 mt-6">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                Author : {" "}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                {blogs.author.charAt(0).toUpperCase()+ blogs.author.slice(1)}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                User Name : {" "}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                { blogs.username.charAt(0).toUpperCase()+ blogs.username.slice(1)}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  City : {" "}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {blogs.city}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Created At : {" "}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {blogs.created_at.split("T")[0]}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blogs.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        ):(
        <div className="text-2xl">Loading ...</div>
        )
    )
}

export default BlogDetails;