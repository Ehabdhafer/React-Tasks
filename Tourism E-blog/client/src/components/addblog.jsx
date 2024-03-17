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
        <>
  <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-xl ">            
            Ready to make your mark in the blogosphere? Join us in shaping conversations, 
            sparking inspiration, and building connections. 
            Submit your blog post now and be part of our vibrant community!
          </p>
          <div className="mt-8">
            <a href="#" className="text-2xl font-bold text-pink-600">
              {" "}
              079 475 4457{" "}
            </a>
            <address className="mt-2 not-italic">
              787 Amman, Jordan, BG 777-300
            </address>
          </div>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                type="text"
                id="name"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="title">
                  Title
                </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                    id="title"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  City
                </label>
                <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                id="phone"
                />
              </div>
            </div>
            <div>
                <label className="sr-only" htmlFor="phone">
                  Image
                </label>
                <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                id="phone"
                c
                />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border w-full rounded-lg border-gray-200 p-3 text-sm"
                rows={8}
              />
            </div>
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Post your Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>


    )
}

export default AddBlog;