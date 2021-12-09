import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthContainer from "../../components/auth/AuthContainer";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon";
import LockIcon from "../../components/icons/LockIcon";
import { logInUser } from "../../store/auth";
import styles from "../../styles/views/auth/Login.module.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(logInUser({ email, password }));
    };

    return (
        <>
            <div className={styles.AuthHeading}>
                <h1>Welcome!</h1>
                <p>Log into your account.</p>
            </div>
            <AuthContainer>
                <form onSubmit={handleSubmit}>
                    <div className={styles.LoginInputWrapper}>
                        <EnvelopeIcon />
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.LoginInputWrapper}>
                        <LockIcon />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {auth.error && (
                        <div className={styles.LoginAuthError}>
                            {auth.error.includes("401")
                                ? "Invalid Email or Password."
                                : auth.error}
                        </div>
                    )}
                    <div className={styles.LoginButtonContainer}>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                <div className={styles.AuthLink}>
                    No account yet?{" "}
                    <Link to="/auth/register">Register here</Link>
                </div>
            </AuthContainer>
        </>
    );
};

export default Login;
