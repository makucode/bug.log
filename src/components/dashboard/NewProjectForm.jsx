import React from "react";
import styles from "../../styles/dashboard/NewProjectForm.module.scss";

const NewProjectForm = ({ children }) => {
    return <div className={styles.NewItemForm}>{children}</div>;
};

export default NewProjectForm;
