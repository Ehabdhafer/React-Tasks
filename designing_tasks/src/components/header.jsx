const Header = () => {
  return (
    <nav className="px-28 h-24 items-center flex flex-wrap justify-between m-auto">
      <img
        src="https://tailwindpractice-easybank.netlify.app/images/logo.svg"
        alt="logo"
        className="w-40 h-6"
      />
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
      <button
        className="border text-white rounded-3xl w-40 h-12 
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-300 hover:duration-500"
      >
        Request Invite
      </button>
    </nav>
  );
};

export default Header;
