import { useState } from "react";

const Header = () => {
  const [menuopen, SetisMenuOpen] = useState(false);

  const handleMenu = () => {
    SetisMenuOpen(!menuopen);
  };

  return (
    <nav className="px-28 h-24 items-center flex flex-wrap justify-between m-auto">
      <img
        src="https://tailwindpractice-easybank.netlify.app/images/logo.svg"
        alt="logo"
        className="w-40 h-6"
      />
      <button
        onClick={handleMenu}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={menuopen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`w-full md:block md:w-auto ${menuopen ? "block" : "hidden"}`}
        id="navbar-default"
      >
        <ul className="flex flex-wrap gap-4 lg:gap-8 h-full items-center">
          <li className="hover:border-b-4 hover:border-green-400">
            <a href="#">Home</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-400">
            <a href="#">About</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-400">
            <a href="#">Contact</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-400">
            <a href="#">Blog</a>
          </li>
          <li className="hover:border-b-4 hover:border-green-400">
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className={`md:flex ${menuopen ? "block" : "hidden"}`}>
        <button
          className="border text-white rounded-3xl w-40 h-12 
            bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-300 hover:duration-500"
        >
          Request Invite
        </button>
      </div>
    </nav>
  );
};

export default Header;
