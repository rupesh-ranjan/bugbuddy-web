import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

function Navbar() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout() {
        await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
        dispatch(removeUser());
        return navigate("/login");
    }

    return (
        <div className="navbar bg-base-300 px-10">
            <div className="flex-1">
                <Link to="/feed" className="btn btn-ghost text-xl normal-case">
                    🐞 BugBuddy 👫
                </Link>
            </div>
            {user ? (
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
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <Link onClick={handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <Link to="/login" className="btn btn-link">
                    Login
                </Link>
            )}
        </div>
    );
}

export default Navbar;
