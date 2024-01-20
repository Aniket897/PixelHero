import { BeatLoader } from 'react-spinners'


const ResultLoading = () => {
    return (
        <div className="flex flex-col w-full min-h-[40vh] items-center justify-center gap-y-3 text-black">
            <BeatLoader color="#36d7b7" />
            <p>searching...</p>
        </div>
    )
}

export default ResultLoading;