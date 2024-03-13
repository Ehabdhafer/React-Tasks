import axios from "axios";
import {  useEffect, useState } from "react";


const Cities = () => {
    const [cities,setCities] = useState([]);
    const [formData,setFormData] = useState({
        name:'',
        country:'',
        info:'',
        image:'',
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(
                `http://localhost:8000/postcity` ,
                formData
            );
            fetchData();
        }catch(error){
            console.error('error posting data',error);
        }
    }

    const fetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/getcity`);
            setCities(response.data);
            console.log('ci',response.data);
        }catch (error){
            console.error('error fetching data',error);
        }
    }
    useEffect (() => {
        fetchData();
}, []);

    return (
        <div className=" mt-12">
            <h1>ADD CITY</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="name"
                    placeholder="city"
                    value={formData.name}
                    onChange={handleChange}
                />
                <select name="country" onChange={handleChange}>
                    <option value="">Select a country</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Qatar">Qatar</option>
                    <option value="UAE">UAE</option>
                </select>
                <input
                    type="text"
                    name="info"
                    placeholder="info"
                    value={formData.info}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="image"
                    value={formData.image}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>

            <div className="mt-16">
            {
                cities ? (
                    <ul className="flex flex-wrap justify-evenly">
                        {cities.map((item) => (
                            <div className="flex flex-wrap flex-col  mt-12">
                            <img src={item.image} alt={item.name} className="w-64 h-64" />
                            <div>
                            <li key={item.id}>City : {item.name}</li>
                            <li>Country : {item.country}</li>
                            <li>Info : {item.info}</li>
                            </div>
                        </div>
                        ))}
                    </ul>
                ) : (
                    <p>Loading ...</p>
                )
            }
            </div>
        </div>
    )
}


export default Cities;