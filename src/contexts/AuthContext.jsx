import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";


const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext)
}


export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


    const login = (token, user) => {
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.clear();
        toast.success("logout success");
    }


    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}