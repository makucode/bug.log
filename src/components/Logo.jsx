import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import styles from "../styles/Logo.module.scss";

const Logo = () => {
    return (
        <Link to="/">
            <img className={styles.Logo} src={logo} alt="bug.log Logo" />
        </Link>
    );
};

export default Logo;
