import axios from 'axios'
import { useState } from 'react';
import { Link } from "react-router-dom";

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
        // <div>
        //     <div className='flex flex-wrap flex-col'>
        //     <form onSubmit={handleSubmit} className='flex flex-wrap flex-col'>
        //         <input 
        //         type="text"
        //         name='email'
        //         placeholder='email'
        //         value={formData.email}
        //         onChange={handleChange}
        //         />
        //         <input
        //         type="password"
        //         name='password' 
        //         placeholder='password'
        //         value={formData.password}
        //         onChange={handleChange}
        //         />
        //     </form>
        //     <button type='submit' onClick={handleSubmit}>Submit</button>
        //     </div>
        // </div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://www.clipartmax.com/png/middle/159-1592697_staging-of-signature-business-tourism-events-and-exhibitions-icon-tourism-logo-png.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className='flex items-center justify-between'>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email 
                </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required=""
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button 
                onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member? 
              <Link to = {'/signup'}>
              <button
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              > 
                <pre> Register</pre>
              </button>
              </Link>
            </p>
          </div>
        </div>
    )
}

export default Login;