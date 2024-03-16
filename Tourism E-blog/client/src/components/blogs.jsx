import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/getblog');
                setBlogs(response.data);
            }catch(e){
                console.error('error fetching data',e);
            };
        };
        fetchData();
    },[]);

    if(!blogs){
        return <div>Loading ...</div>;
    }

    return (
        <div className="mx-auto flex flex-wrap justify-evenly">
            {blogs.map((blog) => (
                <div 
                className="mt-3" 
                key={blog.blog_id}
                >
                    <Link to={`/${blog.blog_id}`}>
                    <img src={blog.image} alt="blog image"
                    className="size-80" />
                    </Link>
                    <div className="flex flex-wrap flex-col items-start">
                        <div>Author : {blog.author.charAt(0).toUpperCase()+ blog.author.slice(1)}</div>
                        <div>Title : {blog.title}</div>
                        <div>City : {blog.city}</div>
                    </div>
                </div>
            ))
            }
        </div>
    )
};

export default Blogs;