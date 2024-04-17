import { useState } from "react";

const Header2 = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="bg-sky-400 text-white flex justify-between h-16 items-center px-8">
      <h2 className=" font-extrabold text-2xl">SunnySide</h2>
      <button
        onClick={handleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded={menu ? "true" : "false"}
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
      className={`w-full md:block md:w-auto ${
        menu ? 'block' : 'hidden'
      }`}
      >
      <ul className=" flex flex-wrap gap-8 text-lg font-semibold ">
        <li>
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <button className=" bg-white text-black rounded-xl font-bold w-20 hover:text-white hover:bg-blue-300">
            Contact
          </button>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Header2;
