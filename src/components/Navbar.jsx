import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const [showAuth, setShowCurrentAuth] = useState("");
    const authContext = useAuth();


    const handleShowAuth = (event, value) => {
        event.stopPropagation();
        setShowCurrentAuth(value)
    }


    return (
        <>
            <div className="px-5 w-[90vw] flex items-center justify-between h-14 mx-auto mt-4 glass">
                <div className="font-bold text-2xl">
                    <Link to={'/'}>PixelHero</Link>
                </div>
                {!authContext.token ? (
                    <div>
                        <div className='hidden sm:flex items-center gap-3'>
                            <button
                                onClick={(e) => handleShowAuth(e, "SignIn")}
                                className='outlineBtn'>
                                Login
                            </button>
                            <button
                                onClick={(e) => handleShowAuth(e, "SignUp")}
                                className='primaryBtn'>
                                Create Account
                            </button>
                        </div>
                        <div className="sm:hidden">
                            <button
                                onClick={(e) => handleShowAuth(e, "SignUp")}
                                className='primaryBtn'>
                                Account
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-3'>
                        <Link to={'/history'}>History</Link>
                        <button
                            onClick={authContext.logout}
                            className='primaryBtn'>
                            Logout
                        </button>
                    </div>
                )}
            </div>
            {showAuth && !authContext.token && (
                <Auth
                    current={showAuth}
                    close={() => setShowCurrentAuth("")}
                />
            )}
        </>
    )
}

export default Navbar;