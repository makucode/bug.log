import React, { useState } from "react";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon";
import LockIcon from "../../components/icons/LockIcon";
import styles from "../../styles/views/auth/Login.module.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
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
                <div className={styles.LoginButtonContainer}>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </>
    );
};

export default Login;
