import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const Hero = () => {

    const navigate = useNavigate();

    const search = (text) => {
        navigate(`/search?q=${text}`)
    }
    return (
        <div className='flex items-center justify-center gap-y-14 flex-col min-h-[80vh] text-center'>
            <p className="text-4xl sm:text-7xl font-bold">Discover over 2,000,000
                <br />
                free Stock Images
            </p>
            <SearchBox onclick={search} />
            <div className="glass py-3 px-5">
                <p>Trending:  flowers, love, forest, river</p>
            </div>
        </div>
    )
}

export default Hero;