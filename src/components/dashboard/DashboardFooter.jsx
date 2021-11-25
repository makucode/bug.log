import React from "react";
import styles from "../../styles/dashboard/DashboardFooter.module.scss";

const DashboardFooter = () => {
    return (
        <footer className={styles.DashboardFooter}>
            {" "}
            <span>
                {`© ${new Date().getFullYear()} `}
                <a href="https://github.com/makucode">makucode</a>
            </span>
        </footer>
    );
};

export default DashboardFooter;
