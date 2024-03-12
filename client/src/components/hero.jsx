import axios from "axios";
import { useEffect, useState } from "react";


const Hero = () => {
    const [cities,setCities] = useState([]);
    const [country,setCountry] = useState("");

    useEffect (() => {
        const fetchData = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/getcity`);
            setCities(response.data);
            console.log('ci',response.data);
        }catch (error){
            console.error('error fetching data',error);
        }
    }
    fetchData();
}, []);

    const handleCountry = (e) => {
        setCountry(e.target.value);
    }

    return (
        <div>
            <div className="mt-16">
                <select name="country" onChange={handleCountry} className="border-2 border-blue-700 rounded-lg">
                    <option value="">Select a country</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Qatar">Qatar</option>
                    <option value="UAE">UAE</option>
                </select>
            { country &&
                cities ? (
                    <ul className="flex flex-wrap justify-between">
                        {cities.filter((item) => item.country === country) 
                        .map((item) => (
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
};


export default Hero;