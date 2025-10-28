import { Outlet } from "react-router";

function Body() {
    return (
        <div className="flex flex-grow items-center justify-center">
            <Outlet />
        </div>
    );
}

export default Body;
