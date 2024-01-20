import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";
import { firestore } from "../../utils/firebase";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";
import ButtonLoading from "../loadings/ButtonLoading";



const DownloadBtn = ({ image, text = "Download for free!", isHistory }) => {
    const [loading, setLoading] = useState(false);
    const authContext = useAuth();


    const downloadFile = async () => {
        setLoading(true)
        try {
            const response = await axios.get(image.webformatURL, { responseType: 'arraybuffer' });
            console.log(response)
            const blob = new Blob([response.data], { type: 'image/png' })
            // creating a <a> tag
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'download';
            document.body.appendChild(link);
            link.click();
            // removing <a> tag afeter clicking on it
            document.body.removeChild(link);
            toast.success("image downloaded successfully");
            // if we have user and this image is not from history page
            if (!isHistory) updateDownload();
        } catch (error) {
            alert("Error while downloading")
            toast.success("failed to downloade image")
        } finally {
            setLoading(false)
        }
    };


    const updateDownload = async () => {
        if (!authContext.token) return;
        try {
            const userDocRef = doc(firestore, 'users', authContext.user.uid);
            const userDocSnapshot = await getDoc(userDocRef);
            // cheking if doc alredy exist or not
            if (userDocSnapshot.exists()) {
                // if exist
                const downloadsRef = collection(userDocRef, 'downloads');
                await addDoc(downloadsRef, { image });
                console.log('Image download data set successfully!');
            } else {
                // if not exist
                await setDoc(userDocRef, {});
                const downloadsRef = collection(userDocRef, 'downloads');
                await addDoc(downloadsRef, { image });
                console.log('User document created, and image download data set successfully!');
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <button
            onClick={downloadFile}
            disabled={loading}
            className="rounded-md bg-[#4BC34B] text-white w-full p-2">
            {loading ? <ButtonLoading text="downloading" /> : text}
        </button>
    )
}

export default DownloadBtn;