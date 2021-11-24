import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import DashboardIcon from "../icons/DashboardIcon";
import styles from "../../styles/dashboard/Sidebar.module.scss";
import UserCircleIcon from "../icons/UserCircleIcon";
import ProjectIcon from "../icons/ProjectIcon";
import UsersIcon from "../icons/UsersIcon";

const Sidebar = () => {
    const auth = { user: { role: "admin" } }; //useSelector((state) => state.auth); <----- !!!
    return (
        <nav className={styles.Sidebar}>
            <div className={styles.SidebarLogo}>
                <Logo />
            </div>
            <ul className={styles.SidebarLinks}>
                <li>
                    <div className={styles.SidebarIcon}>
                        <DashboardIcon />
                    </div>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <div className={styles.SidebarIcon}>
                        <ProjectIcon />
                    </div>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <div className={styles.SidebarIcon}>
                        <UserCircleIcon />
                    </div>
                    <Link to="/me">My Account</Link>
                </li>
                {auth.user && auth.user.role === "admin" && (
                    <li>
                        <div className={styles.SidebarIcon}>
                            <UsersIcon />
                        </div>
                        <Link to="/me">Users</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Sidebar;
