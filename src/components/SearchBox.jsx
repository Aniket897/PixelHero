import { useState } from "react";

const SearchBox = ({ onclick }) => {
    const [text, setText] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (text) {
            onclick(text);
        }
    }


    return (
        <form onSubmit={handleClick} className='glass h-14 md:w-[50vw] w-[90vw] flex items-center gap-4 overflow-hidden'>
            <input
                className="outline-none bg-transparent flex-1 p-4 placeholder:text-gray-100"
                onChange={(e) => setText(e.target.value)}
                placeholder='start new search'
                spellCheck={false}
                type="text"
            />
            <button
                type="submit"
                className='primaryBtn mr-3'>
                GO!
            </button>
        </form>
    )
}

export default SearchBox;