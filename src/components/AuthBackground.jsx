import React from "react";
import styles from "../styles/AuthBackground.module.scss";

const AuthBackground = () => {
    return (
        <div className={styles.AuthBackground}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={styles.AuthBackgroundDivider}
            >
                <path
                    d="M1200 0L0 0 892.25 114.72 1200 0z"
                    className="shape-fill"
                />
            </svg>
            <div className={styles.AuthBackgroundPlane}></div>
        </div>
    );
};

export default AuthBackground;
