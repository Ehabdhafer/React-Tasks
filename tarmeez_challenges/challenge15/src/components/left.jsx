

const Left = () => {
    return (
        <div>
            <Box up = "20" mid="اكاديمية ترميز" down="اكاديمية"/>
            <Box up="hello world" down="this is hello world"/>
            <Box up="post 3" down="this is post 3"/>
        </div>
    )
}

function Box ({up,mid,down}) {
    return (
        <div className="lg:ml-80 border-4 border-teal-600 w-[484px] h-32 flex flex-col justify-center items-center mb-2 xl:ml-[25rem]">
            <h2 className=" text-2xl font-bold">
                {up}
            </h2>
            <p>
                {mid}
            </p>
            <hr className="w-[90%] border border-gray-500 my-2 "/>
            <p>
                {down}
            </p>
        </div>
    )
}

export default Left;