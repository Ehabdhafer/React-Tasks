import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";


const AddBlog = () => {
    const token = Cookies.get("token");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const [formData,SetFormData] = useState({
        title:'',
        author:'',
        description:'',
        city:'',
        image:'',
    });

    const handleChange = (e) => {
        SetFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/postblog',
            formData);
        }catch(e){
            console.error('error posting data',e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
                />
                <input 
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
                />
                <input 
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                />
                <input 
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                />
                <input 
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
                />
            </form>
            <button onClick={handleSubmit}>Add Blog</button>
        </div>
    )
}

export default AddBlog;