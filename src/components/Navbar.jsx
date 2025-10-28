import { useSelector } from "react-redux";

function Navbar() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
        <div className="navbar bg-base-300 px-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl normal-case">
                    🐞 BugBuddy 👫
                </a>
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
