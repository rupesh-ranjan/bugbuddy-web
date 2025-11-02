import React from "react";

function UserCard({ user }) {
    const { firstName, lastName, photoUrl, age, gender, about } = user;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={photoUrl} alt={firstName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{about}</p>
                <p>{age + " " + gender}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-error">Ignore</button>
                    <button className="btn btn-success">Interested</button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
