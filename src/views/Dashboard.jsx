import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import styles from "../styles/dashboard/Dashboard.module.scss";

const Dashboard = () => {
    return (
        <main className={styles.Dashboard}>
            <Sidebar />
            <div className={styles.DashboardContent}>
                <DashboardHeader />
                <Outlet />
            </div>
        </main>
    );
};

export default Dashboard;
