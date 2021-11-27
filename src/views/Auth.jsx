import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Link, useNavigate } from "react-router-dom";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import AuthBackground from "../components/AuthBackground";
import Loader from "../components/Loader";
import styles from "../styles/auth/Auth.module.scss";
import { fadeInUp } from "../utils/animations";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        auth.user && navigate("/");
    }, [auth, navigate]);

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

    const animations = fadeInUp;

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
                                {auth.error && (
                                    <div className={styles.AuthError}>
                                        {auth.error}
                                    </div>
                                )}
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
