import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
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
                        <Route path="/" element={<Body />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/connections"
                                element={<Connections />}
                            />
                            <Route path="/requests" element={<Requests />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
