import { Link } from "react-router-dom";


const Hero = () => {
    

    return (
        <section className=" dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            Uncover the Magic of Jordan: Where History Whispers and Adventure Awaits
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience a land where ancient wonders rise from the desert sands, and vibrant culture thrives in bustling cities.
            Jordan beckons the explorer within, offering a tapestry of experiences unlike any other.
            </p>
            <Link to={'/addblog'}>
            <button
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Add Blog
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="
              https://cloudfront-us-east-2.images.arcpublishing.com/reuters/GTTPD4SQDJJLRGK2FYLQIV344Y.jpg
              "
              alt="mockup"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
      
    )
}

export default Hero;