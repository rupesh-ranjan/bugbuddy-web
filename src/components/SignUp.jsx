import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [about, setAbout] = useState("");
    const [showToast, setShowToast] = useState(false);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function handleSignUp() {
        await axios
            .post(
                BASE_URL + "/signup",
                {
                    emailId: email,
                    password,
                    rePassword,
                    firstName,
                    lastName,
                    age,
                    photoUrl,
                    about,
                },
                { withCredentials: true },
            )
            .then((res) => {
                console.log("Response", res);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
                navigate("/login");
                return res.data.user;
            })
            .catch((err) => {
                console.log("Error", err);
                setError(err.response?.data.errors || "Sign Up failed");
            });
    }
    return (
        <>
            {showToast && (
                <div className="toast toast-center toast-top">
                    <div className="alert alert-info">
                        <span>Profile updated successfully</span>
                    </div>
                </div>
            )}
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title">Edit Profile</h2>

                    <label className="label justify-start">
                        <span className="w-28 text-left">Email:</span>
                        <input
                            type="text"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <label className="label items-center justify-start">
                        <span className="w-28 pt-2 text-left">Password:</span>
                        <input
                            type="password"
                            className="textarea textarea-bordered flex-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label className="label items-center justify-start">
                        <span className="w-28 pt-2 text-left">
                            Verify Password:
                        </span>
                        <input
                            type="password"
                            className="textarea textarea-bordered flex-1"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </label>

                    <button
                        className="btn btn-primary px-9"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <Link to="/login" className="mt-2 text-sm hover:underline">
                        Already a member? Login
                    </Link>
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
                                    <div key={index}>
                                        {index + 1}. {err}
                                    </div>
                                ))}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SignUp;
