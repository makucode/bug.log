import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LockIcon from "../../components/icons/LockIcon";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon";
import UserIcon from "../../components/icons/UserIcon";
import AuthContainer from "../../components/auth/AuthContainer";
import { registerUser } from "../../store/auth";
import styles from "../../styles/views/auth/Register.module.scss";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordStr, setPasswordStr] = useState();
    const [validateErr, setValidateErr] = useState();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordStr || passwordStr === "weak") {
            return setValidateErr(
                "Your password must be at least 8 characters long"
            );
        }
        setValidateErr(null);

        dispatch(registerUser({ firstName, lastName, email, password }));
    };

    useEffect(() => {
        const checkPassword = () => {
            password.length >= 8 && setPasswordStr("medium");
            password.length > 10 &&
                /(?=.*\d)(?=.*[A-Z]).*/.test(password) &&
                setPasswordStr("strong");
            password.length < 8 && setPasswordStr("weak");
            !password && setPasswordStr(null);
        };
        checkPassword();
    }, [password]);

    const getColor = () => {
        if (passwordStr === "weak") return "indianred";
        if (passwordStr === "medium") return "#ffd600";
        return "#36d08e";
    };

    return (
        <>
            <div className={styles.AuthHeading}>
                <h1>Create new account</h1>
                <p>
                    Create a bug.log account now to enhance your workflow with
                    easy bug tracking.
                </p>
            </div>
            <AuthContainer>
                <form onSubmit={handleSubmit}>
                    <div className={styles.RegisterName}>
                        <div className={styles.RegisterInputWrapper}>
                            <UserIcon />
                            <input
                                type="text"
                                required
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={styles.RegisterInputWrapper}>
                            <input
                                type="text"
                                required
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.RegisterInputWrapper}>
                        <EnvelopeIcon />
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.RegisterInputWrapper}>
                        <LockIcon />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {passwordStr && (
                        <div className={styles.RegisterPasswordStrength}>
                            password strength:{" "}
                            <span style={{ color: getColor() }}>
                                <span>{passwordStr}</span>
                            </span>
                        </div>
                    )}
                    {validateErr && (
                        <div className={styles.RegisterValidate}>
                            {validateErr}
                        </div>
                    )}
                    <div className={styles.RegisterButtonContainer}>
                        <button type="submit">Create account</button>
                    </div>
                </form>
                <div className={styles.AuthLink}>
                    Already have an account? <Link to="/auth">Log in here</Link>
                </div>
            </AuthContainer>
        </>
    );
};

export default Register;
