import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/dashboard/ErrorMsg.module.scss";

const Error = () => {
    const authError = useSelector((state) => state.auth.error);
    const usersError = useSelector((state) => state.entities.users.error);
    const projectsError = useSelector((state) => state.entities.projects.error);
    const ticketsError = useSelector((state) => state.entities.tickets.error);

    return (
        <div className={styles.ErrorMsg}>
            {authError && (
                <div className={styles.ErrorPopup}>
                    <span>{authError}</span>
                </div>
            )}
            {usersError && usersError !== authError && (
                <div className={styles.ErrorPopup}>
                    <span>{usersError}</span>
                </div>
            )}
            {projectsError && projectsError !== usersError && (
                <div className={styles.ErrorPopup}>
                    <span>{projectsError}</span>
                </div>
            )}
            {ticketsError && ticketsError !== projectsError && (
                <div className={styles.ErrorPopup}>
                    <span>{ticketsError}</span>
                </div>
            )}
        </div>
    );
};

export default Error;
