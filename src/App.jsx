import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { Toaster } from 'react-hot-toast'
import History from "./pages/History";
import { useAuth } from "./contexts/AuthContext";
import PageNotFound from "./pages/PageNotFound";


const App = () => {
    const authContext = useAuth();
    return (
        <BrowserRouter>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/search"
                    element={<Search />}
                />
                <Route
                    path="/history"
                    element={authContext.token ? <History /> : <Navigate to={'/'} />}
                />
                <Route
                    path="*"
                    element={<PageNotFound/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;