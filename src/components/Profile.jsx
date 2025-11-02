import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

function Profile() {
    const user = useSelector((state) => state.user.user);
    return <div>{user && <EditProfile user={user} />}</div>;
}

export default Profile;
