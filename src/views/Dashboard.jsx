import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ErrorMsg from "../components/dashboard/ErrorMsg";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import { fetchProjects } from "../store/projects";
import { fetchTickets } from "../store/tickets";
import { fetchUsers } from "../store/users";
import styles from "../styles/views/dashboard/Dashboard.module.scss";
import { motion } from "framer-motion";
import { fadeInOpacity } from "../utils/animations";

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "bug.log - Dashboard";
    }, []);

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTickets());
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (!user) navigate("/");
    }, [user, navigate]);

    const animations = fadeInOpacity;

    return (
        <main className={styles.Dashboard}>
            <Sidebar />
            <div className={styles.DashboardContent}>
                <DashboardHeader />
                <motion.div
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    <div className={styles.DashboardMainContent}>
                        <Outlet />
                    </div>
                    <DashboardFooter />
                </motion.div>
            </div>
            <ErrorMsg />
        </main>
    );
};

export default Dashboard;
