import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

function Feed() {
    const feed = useSelector((state) => state.feed.feed);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getFeed() {
            if (feed.length > 0) return;
            try {
                const feed = await axios
                    .get(BASE_URL + "/user/feed", {
                        withCredentials: true,
                    })
                    .then((response) => response.data)
                    .catch((error) => {
                        console.error("Error in feed response:", error);
                    });
                dispatch(setFeed(feed.data));
            } catch (error) {
                // TODO: Handle Errors
                console.error("Error fetching feed:", error);
            }
        }
        getFeed();
    }, [dispatch, feed.length]);
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {feed.map((user) => (
                <UserCard
                    key={user._id}
                    user={user}
                    btn1={{ text: "Ignore", style: "btn btn-error" }}
                    btn2={{ text: "Like", style: "btn btn-success px-8" }}
                />
            ))}
        </div>
    );
}

export default Feed;
