import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../contexts/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import ButtonLoading from '../loadings/ButtonLoading';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const authContext = useAuth();



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            return toast.error("both email and password are required")
        }
        setLoading(true)
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);
            const user = userCredentials.user;
            authContext.login(user.accessToken, user)
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            toast.success("signin success")
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit} className='w-[80%] mx-auto flex flex-col gap-y-4'>
            <div >
                <p>* email</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3 mt-2 rounded-md shadow-sm border border-gray-200 w-full'
                    type="email"
                />
            </div>
            <div>
                <p>* password</p>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 mt-2 rounded-md shadow-sm border border-gray-200 w-full'
                    type="password"
                />
            </div>
            <button
                disabled={loading}
                type='submit'
                className='bg-[#00AB6B] text-white p-3 rounded-md w-full mt-4'>
                {loading ? <ButtonLoading/> : "SignIn"}
            </button>
            <p className='text-[#00AB6B] hover:underline cursor-pointer'>forgot password?</p>
        </form>
    )
}

export default SignIn;