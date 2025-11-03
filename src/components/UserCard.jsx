import React from "react";

function UserCard({ user, btn1, btn2 }) {
    const { firstName, lastName, photoUrl, age, gender, about } = user;
    return (
        <div className="card bg-base-200 shadow-xl sm:w-20 md:w-96">
            <img
                src={photoUrl}
                alt={firstName}
                className="h-96 w-full rounded-t-xl object-cover"
            />

            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{about}</p>
                <p>{age + " " + gender}</p>
                <div className="card-actions justify-between">
                    {btn1 && (
                        <button className={btn1.style}>{btn1.text}</button>
                    )}
                    {btn2 && (
                        <button className={btn2.style}>{btn2.text}</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
