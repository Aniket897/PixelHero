import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import { useSearchParams } from "react-router-dom";
import axios from '../utils/axios';
import ResultLoading from "../components/loadings/ResultLoading";
import Result from "../components/Result";
import NoResult from "../components/NoResult";

let page = 1;
let total = 0
const Search = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [totalhits, setTotalHits] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        fetchResult();
        page = 1;
    }, [searchParams.get("q")]);


    const handleSetSearchParams = (text) => {
        setSearchParams({ "q": text })
    }



    const fetchResult = async () => {
        setLoading(true)
        setNoResult(false)
        try {
            const response = await axios.get(`?key=${import.meta.env.VITE_API_KEY}&q=${searchParams.get("q")}&per_page=50&page=${page}`);
            console.log(response)
            setResult(response.data.hits);
            setTotalHits(response.data.totalHits)
            total += response.data.hits.length;
            if (response.data.hits.length == 0) {
                setNoResult(true);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const NextPageButton = () => {
        return (
            <div className="flex items-center py-[100px]">
                <button
                    onClick={() => {
                        page++;
                        window.scroll(0, 0)
                        fetchResult();
                    }}
                    className="rounded-md mx-auto bg-[#4BC34B] text-white w-[150px] p-2">
                    Next Page
                </button>
            </div>
        )
    }


    return (
        <div className="search_page">
            <div className="min-h-[40vh] flex flex-col items-center gap-y-5 justify-center">
                <SearchBox onclick={handleSetSearchParams} />
                <p className="font-bold text-3xl">Result :  {searchParams.get("q")}</p>
            </div>
            <div className="bg-white min-h-[60vh]">
                {loading && <ResultLoading />}
                {result.length && !loading && <Result images={result} />}
                {noResult && !loading && <NoResult />}
                {result.length && totalhits > total && <NextPageButton />}
            </div>
        </div>
    )
}

export default Search;