import React from "react";
import styles from "../../styles/auth/AuthFooter.module.scss";

const AuthFooter = () => {
    return (
        <footer className={styles.AuthFooter}>
            <div className={styles.AuthFooterLeft}>
                <span>
                    {`© ${new Date().getFullYear()} `}
                    <a href="https://github.com/makucode">makucode</a>
                </span>
            </div>
        </footer>
    );
};

export default AuthFooter;
