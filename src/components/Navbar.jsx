import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

function Navbar() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserData() {
            if (user) return;
            try {
                const response = await axios.get(BASE_URL + "/profile/view", {
                    withCredentials: true,
                });
                dispatch(addUser(response.data));
            } catch (error) {
                // if (error.response.status === 401) navigate("/login");
            }
        }
        fetchUserData();
    }, [dispatch, navigate, user]);

    async function handleLogout() {
        await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
        dispatch(removeUser());
        return navigate("/login");
    }

    return (
        <div className="navbar bg-base-300 px-0 sm:px-10">
            <div className="flex-1">
                <Link to="/feed" className="btn btn-ghost text-xl normal-case">
                    🐞 BugBuddy 👫
                </Link>
            </div>
            {user && (
                <div className="flex-none gap-2">
                    <p>{`Welcome, ${user.firstName}`}</p>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="avatar btn btn-circle btn-ghost"
                        >
                            <div className="w-10 rounded-full">
                                <img src={user.photoUrl} alt="User photo" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/connections">See Connections</Link>
                            </li>
                            <li>
                                <Link to="/requests">Received Requests</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
