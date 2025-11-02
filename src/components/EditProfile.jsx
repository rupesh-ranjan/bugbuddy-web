import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

function EditProfile({ user }) {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName || "");
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    async function saveProfifle() {
        try {
            const response = await axios.patch(
                BASE_URL + "/profile/update",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    about,
                    photoUrl,
                },
                { withCredentials: true },
            );
            dispatch(addUser(response.data.data));
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (error) {
            setError(error.response.data.errors);
            console.error("Error updating profile:", error);
        }
    }

    useEffect(() => {
        document.title = "Edit Profile 🐞";
    }, []);

    return (
        <div className="grid grid-cols-2 gap-10 md:grid-cols-2">
            {showToast && (
                <div className="toast toast-center toast-top">
                    <div className="alert alert-info">
                        <span>Profile updated successfully</span>
                    </div>
                </div>
            )}
            <div className="card min-w-full bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title">Edit Profile</h2>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Email:</span>
                        <input
                            type="text"
                            className="input input-bordered"
                            value={user.emailId}
                            disabled
                        />
                    </label>

                    <label className="label justify-start">
                        <span className="w-28 text-left">First Name:</span>
                        <input
                            type="text"
                            className="input input-bordered flex-1"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Last Name:</span>
                        <input
                            type="text"
                            className="input input-bordered flex-1"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Age:</span>
                        <input
                            type="number"
                            className="input input-bordered flex-1"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Gender:</span>
                        <select
                            className="select select-bordered w-52 flex-1"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="" disabled>
                                Select the gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Photo URL:</span>
                        <input
                            type="text"
                            className="input input-bordered flex-1"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </label>
                    <label className="label items-center justify-start">
                        <span className="w-28 pt-2 text-left">About:</span>
                        <textarea
                            className="textarea textarea-bordered flex-1"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </label>

                    <button
                        className="btn btn-primary px-9"
                        onClick={saveProfifle}
                    >
                        Save Profile
                    </button>
                </div>

                {error && (
                    <div className="alert alert-error shadow-lg">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 flex-shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                {error.map((err, index) => (
                                    <div key={index}>{err}</div>
                                ))}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <UserCard
                user={{ firstName, lastName, photoUrl, age, gender, about }}
            />
        </div>
    );
}

export default EditProfile;
