import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo";
import DashboardIcon from "../icons/DashboardIcon";
import styles from "../../styles/dashboard/Sidebar.module.scss";
import UserCircleIcon from "../icons/UserCircleIcon";
import ProjectIcon from "../icons/ProjectIcon";
import UsersIcon from "../icons/UsersIcon";
import LogoutButton from "./LogoutButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { sidebarClosed } from "../../store/ui";

const Sidebar = () => {
    const auth = useSelector((state) => state.auth);
    const location = useLocation();
    const dispatch = useDispatch();
    const { sidebarOpen } = useSelector((state) => state.ui);

    const { width } = useWindowDimensions();

    useEffect(() => {
        dispatch({ type: sidebarClosed.type });
    }, [dispatch, location]);

    return (
        <nav
            className={`${styles.Sidebar} ${
                sidebarOpen ? styles.SidebarOpen : ""
            }`}
        >
            <div className={styles.SidebarLogo}>
                <Logo />
            </div>
            <ul className={styles.SidebarLinks}>
                <li
                    className={
                        location.pathname.toString() === "/dashboard"
                            ? styles.NavActive
                            : ""
                    }
                >
                    <Link to="/dashboard">
                        <div className={styles.SidebarIcon}>
                            <DashboardIcon />
                        </div>
                        Dashboard
                    </Link>
                </li>
                <li
                    className={
                        location.pathname.includes("projects") ||
                        location.pathname.includes("tickets")
                            ? styles.NavActive
                            : ""
                    }
                >
                    <Link to="/dashboard/projects">
                        <div className={styles.SidebarIcon}>
                            <ProjectIcon />
                        </div>
                        Projects
                    </Link>
                </li>
                <li
                    className={
                        location.pathname.includes("profile")
                            ? styles.NavActive
                            : ""
                    }
                >
                    <Link to="/dashboard/account">
                        <div className={styles.SidebarIcon}>
                            <UserCircleIcon />
                        </div>
                        My Account
                    </Link>
                </li>
                {auth.user && auth.user.role === "admin" && (
                    <li
                        className={
                            location.pathname.includes("admin")
                                ? styles.NavActive
                                : ""
                        }
                    >
                        <Link to="/dashboard/admin">
                            <div className={styles.SidebarIcon}>
                                <UsersIcon />
                            </div>
                            Admin
                        </Link>
                    </li>
                )}
            </ul>
            {width <= 1024 && (
                <div className={styles.SidebarLogout}>
                    <LogoutButton />
                </div>
            )}
        </nav>
    );
};

export default Sidebar;
