import React from "react";
import styles from "../../styles/auth/AuthContainer.module.scss";

const AuthContainer = ({ children }) => {
    return <div className={styles.AuthContainer}>{children}</div>;
};

export default AuthContainer;
