
const Right = () => {
    return (
        <div className="border-4 border-teal-600 w-72  ml-10 flex flex-wrap justify-evenly items-center">
            <Tag content="new"/>
            <Tag content="most used">
                <img src="https://publications.chitkara.edu.in/wp-content/uploads/2020/09/nmbr.jpg" alt="png" />
            </Tag>
            <Tag content="oldest">
                <span>
                    😊😊
                </span>
                <img src="https://vertex-academy.com/tutorials/wp-content/uploads/2016/10/Random-number-generation_Vertex-Academy.png" alt="jpg" />
            </Tag>
        </div>
    )
}

function Tag ({content,children}) {
    return (
        <div>
            <button className="bg-fuchsia-800 rounded-md text-white w-24 h-8 hover:bg-fuchsia-900 shadow-lg shadow-slate-400 flex flex-wrap  justify-center">
                {content}
                {children}
            </button>
        </div>
    )
}

export default Right;