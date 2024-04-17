const Header2 = () => {
  return (
    <nav className="bg-sky-400 text-white flex justify-between h-16 items-center px-8">
      <h2 className=" font-extrabold text-2xl">SunnySide</h2>
      <ul className=" flex flex-wrap gap-8 text-lg font-semibold ">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li className=" bg-white text-black rounded-xl font-bold">Contact</li>
      </ul>
    </nav>
  );
};

export default Header2;
