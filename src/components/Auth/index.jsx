import {
    useEffect,
    useRef,
    useState
} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Auth = ({ current, close }) => {
    const [currentTab, setCurrentTab] = useState(current);
    const ref = useRef();

    const toggleCurrentTab = () => {
        if (currentTab == "SignIn") {
            setCurrentTab("SignUp")
        } else {
            setCurrentTab("SignIn")
        }
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            close();
        }
    }


    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.body.style.overflow = 'unset';
        }
    }, [])


    return (
        <div className='w-screen h-screen bg-[#00000066] flex items-center justify-center absolute top-0 left-0 z-10'>
            <div ref={ref} className="w-[500px] max-w-screen bg-white text-black min-h-[80vh] flex flex-col pb-12">
                <div className='bg-black text-white font-bold p-4 text-center'>
                    <p>SignUp to download unlimited resource media</p>
                </div>
                <div className="flex items-center justify-between text-center p-5">
                    <span
                        onClick={toggleCurrentTab}
                        className={`w-[50%] cursor-pointer p-4 ${currentTab == "SignIn" ? "text-green-700 border-b-2 border-b-green-700" : "hover:text-green-700"}`}>
                        SignIn
                    </span>
                    <span
                        onClick={toggleCurrentTab}
                        className={`w-[50%] cursor-pointer p-4 ${currentTab == "SignUp" ? "text-green-700 border-b-2 border-b-green-700" : "hover:text-green-700"}`}>
                        SignUp
                    </span>
                </div>
                <div className="innerFormContainer">
                    {currentTab === "SignIn" ? <SignIn /> : <SignUp />}
                </div>
            </div>
        </div>
    )
}

export default Auth;