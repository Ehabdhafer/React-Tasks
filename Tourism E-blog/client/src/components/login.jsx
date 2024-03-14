import axios from 'axios'
import { useState } from 'react';

const Login = () => {
    const [formData, SetFormData] = useState({
        email:'',
        password:'',
    });

    const handleChange = (e) => {
        SetFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:8000/login`,
            formData);
        }catch(e) {
            console.error(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                />
                <input
                type="password"
                name='password' 
                placeholder='password'
                value={formData.password}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Login;