import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import AuthBackground from "../components/AuthBackground";
import styles from "../styles/auth/Auth.module.scss";

const Auth = () => {
    const location = useLocation();

    const loginHeading = "Welcome!";
    const loginText = "Log into your account.";
    const registerHeading = "Create new account";
    const registerText = "Create a bug.log account.";

    useEffect(() => {
        console.log(location);
    });

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
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </div>
                    <AuthFooter />
                </div>
            </main>
            <AuthBackground />
        </>
    );
};

export default Auth;
