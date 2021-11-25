import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import styles from "../styles/dashboard/Dashboard.module.scss";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../store/projects";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <main className={styles.Dashboard}>
            <Sidebar />
            <div className={styles.DashboardContent}>
                <DashboardHeader />
                <div className={styles.DashboardMainContent}>
                    <Outlet />
                </div>
                <DashboardFooter />
            </div>
        </main>
    );
};

export default Dashboard;
