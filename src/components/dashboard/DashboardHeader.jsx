import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/dashboard/DashboardHeader.module.scss";
import HomeIcon from "../icons/HomeIcon";

const DashboardHeader = () => {
    const location = useLocation();

    return (
        <header className={styles.DashboardHeader}>
            <div className={styles.HeaderPath}>
                <HomeIcon />
                {location.pathname.split("/").map((part) => (
                    <>
                        <span className={styles.HeaderPathPart}>{part}</span>
                        <span className={styles.HeaderPathPart}>/</span>
                    </>
                ))}
            </div>
            <div className={styles.HeaderProfileLink}>
                <Link to="/dashboard/me">Cooler Tüpp</Link>
            </div>
        </header>
    );
};

export default DashboardHeader;
