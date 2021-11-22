import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import AuthBackground from "../components/AuthBackground";
import styles from "../styles/auth/Auth.module.scss";

const Auth = () => {
    const location = useLocation();

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
            Create a bug.log account now to enhance your workflow
            <br />
            with easy bug tracking.
        </>
    );
    const registerLink = (
        <>
            Already have an account? <Link to="/auth">Log in here</Link>
        </>
    );

    return (
        <>
            <main className={styles.Auth}>
                <div className={styles.AuthContent}>
                    <AuthHeader />
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
                </div>
            </main>
            <AuthBackground />
        </>
    );
};

export default Auth;
