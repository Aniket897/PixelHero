import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-y-14 flex-col min-h-[80vh] text-center'>
                <p className="text-4xl sm:text-7xl font-bold">
                    404 Page Not Found
                </p>
                <Link className="glass p-4 uppercase" to={'/'}>go to homepage</Link>
            </div>
        </>
    )
}

export default PageNotFound;