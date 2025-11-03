import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

function Body() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user);

    useEffect(() => {
        document.title = "BugBuddy 🐞";
        async function fetchUserData() {
            if (userData) return;
            try {
                const response = await axios.get(BASE_URL + "/profile/view", {
                    withCredentials: true,
                });
                dispatch(addUser(response.data));
            } catch (error) {
                if (error.status === 401) navigate("/login");
            }
        }
        fetchUserData();
    }, [dispatch, navigate, userData]);

    return (
        <div className="flex flex-grow items-center justify-center p-8">
            <Outlet />
        </div>
    );
}

export default Body;
