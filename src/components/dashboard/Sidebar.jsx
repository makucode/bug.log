import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import DashboardIcon from "../icons/DashboardIcon";
import styles from "../../styles/dashboard/Sidebar.module.scss";
import UserCircleIcon from "../icons/UserCircleIcon";
import ProjectIcon from "../icons/ProjectIcon";
import UsersIcon from "../icons/UsersIcon";
import TicketIcon from "../icons/TicketIcon";

const Sidebar = () => {
    const auth = { user: { role: "admin" } }; //useSelector((state) => state.auth); <----- !!!
    const location = useLocation();

    return (
        <nav className={styles.Sidebar}>
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
                        location.pathname.includes("projects")
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
                        location.pathname.includes("tickets")
                            ? styles.NavActive
                            : ""
                    }
                >
                    <Link to="/dashboard/tickets">
                        <div className={styles.SidebarIcon}>
                            <TicketIcon />
                        </div>
                        Tickets
                    </Link>
                </li>
                <li
                    className={
                        location.pathname.includes("profile")
                            ? styles.NavActive
                            : ""
                    }
                >
                    <Link to="/dashboard/profile">
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
                            Users
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Sidebar;
