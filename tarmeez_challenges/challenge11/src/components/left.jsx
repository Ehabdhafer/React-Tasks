

const Left = () => {
    return (
        <div>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
        </div>
    )
}

function Box () {
    return (
        <div className="lg:ml-80 border-4 border-teal-600 w-[484px] h-32 flex flex-col justify-center items-center mb-2 xl:ml-[25rem]">
            <h2 className=" text-2xl">
                This is the post title
            </h2>
            <hr className="w-[90%] border border-gray-500 my-2 "/>
            <p>
                This is the post body
            </p>
        </div>
    )
}

export default Left;