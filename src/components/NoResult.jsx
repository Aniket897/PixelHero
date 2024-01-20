
const NoResult = () => {
    return (
        <div className="h-full w-full flex items-center justify-center flex-col gap-y-5 text-black font-bold text-2xl">
            <img
                className="w-[300px]"
                src="/noresult.svg"
                alt=""
            />
            <p>No result found</p>
        </div>
    )
}

export default NoResult;