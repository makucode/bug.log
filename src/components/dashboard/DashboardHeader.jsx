import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/dashboard/DashboardHeader.module.scss";
import HomeIcon from "../icons/HomeIcon";

const DashboardHeader = () => {
    const auth = useSelector((state) => state.auth);
    const location = useLocation();

    return (
        <header className={styles.DashboardHeader}>
            <div className={styles.HeaderPath}>
                <Link to="/">
                    <HomeIcon />
                </Link>
                {location.pathname.split("/").map((part, idx) => (
                    <React.Fragment key={idx}>
                        <Link to={"" + location.pathname}>
                            <span className={styles.HeaderPathPart}>
                                {part}
                            </span>
                        </Link>
                        <span className={styles.HeaderPathSlash}>/</span>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.HeaderProfileLink}>
                <Link to="/dashboard/profile">Cooler Tüpp</Link>
                <div>
                    <img
                        //src={`https://eu.ui-avatars.com/api/?name=${auth.user.firstName}+${auth.user.lastName}&background=random`}
                        alt="User Icon"
                    />
                </div>
                <button>Logout</button>
            </div>
        </header>
    );
};

export default DashboardHeader;
