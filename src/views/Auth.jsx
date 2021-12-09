import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import AuthBackground from "../components/AuthBackground";
import Loader from "../components/Loader";
import styles from "../styles/views/auth/Auth.module.scss";
import { fadeInUp } from "../utils/animations";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        auth.user && navigate("/");
    }, [auth, navigate]);

    useEffect(() => {
        document.title =
            "bug.log" +
            (location.pathname.includes("register") ? " - Register" : "");
    }, [location]);

    const animations = fadeInUp;

    return (
        <>
            <main className={styles.Auth}>
                <div className={styles.AuthContent}>
                    <AuthHeader />
                    {auth.loading ? (
                        <Loader />
                    ) : (
                        <motion.div
                            transition={{ duration: 0.25 }}
                            initial="pageInitial"
                            animate="pageAnimate"
                            exit="pageExit"
                            variants={animations}
                        >
                            {auth.error && (
                                <div className={styles.AuthError}>
                                    {auth.error}
                                </div>
                            )}
                            <Outlet />
                            <AuthFooter />
                        </motion.div>
                    )}
                </div>
            </main>
            <AuthBackground />
        </>
    );
};

export default Auth;
