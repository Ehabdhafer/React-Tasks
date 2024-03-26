
const Right = () => {
    return (
        <div className="border-4 border-teal-600 w-72 h-[30rem] ml-10 flex flex-wrap justify-evenly items-center">
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
    )
}

function Tag () {
    return (
        <div>
            <button className="bg-fuchsia-800 rounded-md text-white w-24 h-8 hover:bg-fuchsia-900 shadow-lg shadow-slate-400">
                Tag Button
            </button>
        </div>
    )
}

export default Right;