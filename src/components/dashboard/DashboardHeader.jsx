import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/auth";
import styles from "../../styles/dashboard/DashboardHeader.module.scss";
import HomeIcon from "../icons/HomeIcon";

const DashboardHeader = () => {
    const auth = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutUser());
        navigate("/auth");
    };

    const pathParts = location.pathname.split("/").splice(1);

    return (
        <header className={styles.DashboardHeader}>
            <div className={styles.HeaderPath}>
                <Link to="/">
                    <HomeIcon />
                </Link>
                <span className={styles.HeaderPathSlash}>/</span>
                {pathParts.map((part, idx) => (
                    <React.Fragment key={idx}>
                        <Link
                            to={
                                idx === 0
                                    ? ""
                                    : pathParts
                                          .map((part, currIdx) =>
                                              currIdx <= idx ? "/" + part : ""
                                          )
                                          .join("")
                            }
                        >
                            <span className={styles.HeaderPathPart}>
                                {part}
                            </span>
                        </Link>
                        <span className={styles.HeaderPathSlash}>/</span>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.HeaderProfileLink}>
                <Link to="/dashboard/profile">
                    {auth.user.firstName + " " + auth.user.lastName}
                </Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
};

export default DashboardHeader;
