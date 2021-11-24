import React from "react";
import styles from "../styles/Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.Loader}>
            <div className={styles.LoaderDots}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loader;
