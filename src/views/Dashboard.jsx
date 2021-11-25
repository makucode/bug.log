import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import styles from "../styles/dashboard/Dashboard.module.scss";
import DashboardFooter from "../components/dashboard/DashboardFooter";

const Dashboard = () => {
    return (
        <main className={styles.Dashboard}>
            <Sidebar />
            <div className={styles.DashboardContent}>
                <DashboardHeader />
                <Outlet />
                <DashboardFooter />
            </div>
        </main>
    );
};

export default Dashboard;
