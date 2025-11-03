import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import UserCard from "./UserCard";

function Connections() {
    const [connections, setConnections] = useState([]);
    async function fetchConnections() {
        await axios
            .get(BASE_URL + "/user/connections", {
                withCredentials: true,
            })
            .then((res) => setConnections(res.data.data));
    }
    useEffect(() => {
        fetchConnections();
    }, []);
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {connections.map((user) => (
                <UserCard key={user._id} user={user} />
            ))}
        </div>
    );
}

export default Connections;
