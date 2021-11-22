import React from "react";
import styles from "../../styles/auth/AuthHeader.module.scss";
import { Link } from "react-router-dom";
import GithubIcon from "../icons/GithubIcon";
import Logo from "../Logo";

const AuthHeader = () => {
    return (
        <nav className={styles.AuthHeader}>
            <div className={styles.AuthHeaderLeft}>
                <Logo />
                <ul className={styles.AuthHeaderLinks}>
                    <li>
                        <Link to="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/auth/register">Register</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.AuthHeaderRight}>
                <a href="https://github.com/makucode">
                    <GithubIcon />
                </a>
            </div>
        </nav>
    );
};

export default AuthHeader;
