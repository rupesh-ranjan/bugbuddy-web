import axios from "axios";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

function Requests() {
    const [requests, setRequests] = useState([]);
    async function fetchRequests() {
        await axios
            .get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            })
            .then((res) => setRequests(res.data.data));
    }
    useEffect(() => {
        fetchRequests();
    }, []);

    function handleRequest(status, toUserId) {
        axios
            .patch(
                `${BASE_URL}/request/review/${status}/${toUserId}`,
                {},
                { withCredentials: true },
            )
            .then((res) =>
                setRequests((requests) =>
                    requests.filter(
                        (request) => request.id !== res.data.data.id,
                    ),
                ),
            )
            .catch((err) => console.error(err));
    }

    console.log(requests);
    return requests.length === 0 ? (
        <p className="text-center">No Requests</p>
    ) : (
        <>
            <div className="flex flex-wrap justify-center gap-16">
                {requests.map((request) => (
                    <UserCard
                        key={request._id}
                        user={request.fromUserId}
                        onClick1={() => handleRequest("rejected", request._id)}
                        onClick2={() => handleRequest("accepted", request._id)}
                        btn1={{ text: "Reject", style: "btn btn-error" }}
                        btn2={{ text: "Accept", style: "btn btn-success" }}
                    />
                ))}
            </div>
        </>
    );
}

export default Requests;
