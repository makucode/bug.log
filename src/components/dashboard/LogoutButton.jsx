import React from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/auth";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "auth/logout" });
        dispatch(logOutUser());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
