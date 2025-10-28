import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./components/Profile.jsx";

function App() {
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Body />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
