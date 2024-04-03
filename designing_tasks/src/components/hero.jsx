const Hero = () => {
  return (
    <div className=" xl:pl-28 mt-2 flex flex-wrap justify-between h-[500px] bg-neutral-50 ">
      <div className="flex flex-wrap flex-col justify-center gap-9">
        <p className="text-7xl xl:w-[40rem] lg:w-96">
          Next generation digital banking
        </p>
        <p className=" text-xl xl:w-[34rem] lg:w-96">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button
          className="border text-white rounded-3xl w-40 h-12 
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-300 hover:duration-500"
        >
          Request Invite
        </button>
      </div>
      <img
        src="https://tailwindpractice-easybank.netlify.app/images/image-mockups.png"
        alt="hero"
        className="h-full object-none xl:w-[40rem] lg:w-[35%]"
      />
    </div>
  );
};

export default Hero;
