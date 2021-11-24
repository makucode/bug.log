import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Link } from "react-router-dom";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import AuthBackground from "../components/AuthBackground";
import Loader from "../components/Loader";
import styles from "../styles/auth/Auth.module.scss";

const Auth = () => {
    const location = useLocation();

    const auth = useSelector((state) => state.auth);

    const loginHeading = "Welcome!";
    const loginText = "Log into your account.";
    const loginLink = (
        <>
            No account yet? <Link to="/auth/register">Register here</Link>
        </>
    );
    const registerHeading = "Create new account";
    const registerText = (
        <>
            Create a bug.log account now to enhance your workflow with easy bug
            tracking.
        </>
    );
    const registerLink = (
        <>
            Already have an account? <Link to="/auth">Log in here</Link>
        </>
    );

    const animations = {
        pageInitial: {
            opacity: 0,
            filter: "blur(5px)",
            transform: "scale(0.985) translateY(50px)",
        },
        pageAnimate: {
            opacity: 1,
            filter: "blur(0px)",
            transform: "scale(1) translateY(0px)",
        },
        pageExit: {
            opacity: 0,
            filter: "blur(5px)",
            transform: "scale(0.985) translateY(50px)",
        },
    };

    return (
        <>
            <main className={styles.Auth}>
                <div className={styles.AuthContent}>
                    <AuthHeader />
                    {auth.loading ? (
                        <Loader />
                    ) : (
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                key={location.pathname}
                                transition={{ duration: 0.25 }}
                                initial="pageInitial"
                                animate="pageAnimate"
                                exit="pageExit"
                                variants={animations}
                            >
                                <div className={styles.AuthHeading}>
                                    {location.pathname.includes("register") ? (
                                        <>
                                            <h1>{registerHeading}</h1>
                                            <p>{registerText}</p>
                                        </>
                                    ) : (
                                        <>
                                            <h1>{loginHeading}</h1>
                                            <p>{loginText}</p>
                                        </>
                                    )}
                                </div>
                                <div className={styles.AuthFormContainer}>
                                    <Outlet />
                                    <div className={styles.AuthLink}>
                                        {location.pathname.includes("register")
                                            ? registerLink
                                            : loginLink}
                                    </div>
                                </div>
                                <AuthFooter />
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </main>
            <AuthBackground />
        </>
    );
};

export default Auth;
