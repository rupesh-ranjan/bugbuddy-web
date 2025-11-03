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
    return connections.map((connection) => (
        <div key={connection._id} className="m-4">
            <UserCard user={connection} />
        </div>
    ));
}

export default Connections;
