import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HomeIcon from "../icons/HomeIcon";
import { sidebarToggled } from "../../store/ui";
import styles from "../../styles/dashboard/DashboardHeader.module.scss";
import LogoutButton from "./LogoutButton";

const DashboardHeader = () => {
    const auth = useSelector((state) => state.auth);
    const location = useLocation();

    const { sidebarOpen } = useSelector((state) => state.ui);

    const { width } = useWindowDimensions();

    const dispatch = useDispatch();

    const pathParts = location.pathname.split("/").splice(1);

    return (
        <header className={styles.DashboardHeader}>
            {width > 1024 ? (
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
                                                  currIdx <= idx
                                                      ? "/" + part
                                                      : ""
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
            ) : (
                <div
                    className={`${styles.HeaderBurgerContainer} ${
                        sidebarOpen ? styles.BurgerNavOpen : ""
                    }`}
                    onClick={() => dispatch({ type: sidebarToggled.type })}
                >
                    <div className={styles.HeaderBurger}></div>
                </div>
            )}

            <div className={styles.HeaderProfileLink}>
                <Link to="/dashboard/account">
                    {auth.user.firstName + " " + auth.user.lastName}
                </Link>
                <LogoutButton />
            </div>
        </header>
    );
};

export default DashboardHeader;
