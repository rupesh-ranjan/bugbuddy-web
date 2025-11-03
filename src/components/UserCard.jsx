import React from "react";

function UserCard({ user, btn1, btn2, onClick1, onClick2 }) {
    const { firstName, lastName, photoUrl, age, gender, about } = user;
    return (
        <div className="card w-64 bg-base-200 shadow-xl sm:w-72 md:w-80">
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
                        <button className={btn1.style} onClick={onClick1}>
                            {btn1.text}
                        </button>
                    )}
                    {btn2 && (
                        <button className={btn2.style} onClick={onClick2}>
                            {btn2.text}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
