import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import ResultLoading from "../components/loadings/ResultLoading";
import NoResult from "../components/NoResult";
import Result from "../components/Result";



const History = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const authContext = useAuth();



    useEffect(() => {
        fetchMyDownloads();
    }, [])

    const fetchMyDownloads = async () => {
        setLoading(true)
        try {
            const downloadsRef = collection(doc(firestore, 'users', authContext.user.uid), 'downloads');
            const querySnapshot = await getDocs(downloadsRef);
            const imageUrls = querySnapshot.docs.map((doc) => doc.data().image);
            console.log(imageUrls);
            if (imageUrls.length) {
                setResult(imageUrls)
            } else {
                setNoResult(true)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex flex-col items-center gap-y-5 justify-center mt-4">
            <div className="flex flex-col items-center justify-center gap-y-5 min-h-[40vh]">
                <p className="text-3xl">
                    👋 {authContext.user.email}
                </p>
                <p className="text-3xl">Your recent Downloads</p>
            </div>
            <div className="w-full min-h-screen bg-white p-4">
                {loading && <ResultLoading />}
                {result.length && !loading && <Result images={result} isHistory={true} />}
                {noResult && !loading && <NoResult />}
            </div>
        </div>
    )
}

export default History;