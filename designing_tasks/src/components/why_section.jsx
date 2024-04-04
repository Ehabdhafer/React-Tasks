const Why = () => {
  return (
    <div className="xl:px-28 bg-gray-100 min-h-[42rem]">
      <div className="pt-36">Why choose Easybank?</div>
      <div>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </div>
      <ul className="flex flex-wrap justify-between">
        <li className=" flex flex-col md:w-1/4 sm:w-1/2">
          <img
            className="size-20"
            src="https://tailwindpractice-easybank.netlify.app/images/icon-online.svg"
            alt="ico"
          />
          <span className=" text-2xl font-medium ">Online Banking</span>
          <span className=" text-gray-500">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </span>
        </li>
        <li className=" flex flex-col md:w-1/4 sm:w-1/2">
          <img
            className="size-20"
            src="https://tailwindpractice-easybank.netlify.app/images/icon-budgeting.svg"
            alt="ico"
          />
          <span className=" text-2xl font-medium ">Simple Budgeting</span>
          <span className=" text-gray-500">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </span>
        </li>
        <li className=" flex flex-col md:w-1/4 sm:w-1/2">
          <img
            className="size-20"
            src="https://tailwindpractice-easybank.netlify.app/images/icon-onboarding.svg"
            alt="ico"
          />
          <span className=" text-2xl font-medium ">Fast Onboarding</span>
          <span className=" text-gray-500">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </span>
        </li>
        <li className=" flex flex-col md:w-1/4 sm:w-1/2">
          <img
            className="size-20"
            src="https://tailwindpractice-easybank.netlify.app/images/icon-api.svg"
            alt="ico"
          />
          <span className=" text-2xl font-medium ">Open API</span>
          <span className=" text-gray-500">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Why;
