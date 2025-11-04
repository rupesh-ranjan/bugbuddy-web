import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore.js";
import Feed from "./components/Feed.jsx";
import Connections from "./components/Connections.jsx";
import Requests from "./components/Requests.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
    return (
        <Provider store={appStore}>
            <div className="flex min-h-screen flex-col justify-between">
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        {/* Public Routes */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />

                        {/* Default route */}
                        <Route path="/" element={<Navigate to="/login" />} />

                        {/* Protected routes (Body wraps authenticated content) */}
                        <Route element={<Body />}>
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/connections"
                                element={<Connections />}
                            />
                            <Route path="/requests" element={<Requests />} />
                        </Route>
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
