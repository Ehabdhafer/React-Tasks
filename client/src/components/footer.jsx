import { Link } from "react-router-dom";

const Footer = () => {

return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://www.pikpng.com/pngl/m/395-3954429_city-bus-logo-hong-kong-citybus-logo-clipart.png"
          className="h-8"
          alt=" Logo"
        />
        
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
        <Link to={'/'}>
          <button className="hover:underline me-4 md:me-6">
            Home
          </button>
          </Link>
        </li>
        <li>
        <Link to={'/about'}>
          <button className="hover:underline me-4 md:me-6">
            About
          </button>
          </Link>
        </li>
        <li>
        <Link to={'/cities'}>
          <button className="hover:underline me-4 md:me-6">
            Cities
          </button>
          </Link>
        </li>
        <li>
        <Link to={'/contact'}>
          <button className="hover:underline me-4 md:me-6">
            Contact Us
          </button>
          </Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    © 2024{" "}
    CityBus™
    ... All Rights Reserved.
    </span>
  </div>
</footer>

)
}


export default Footer;