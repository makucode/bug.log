import React from "react";
import styles from "../../../styles/dashboard/project/TeamList.module.scss";

const TeamList = ({ list }) => {
    return (
        <div className={styles.List}>
            <div className={styles.ListTags}>
                <div>Name</div>
                <div>Email</div>
            </div>
            {list.list.map((item) => (
                <div key={item._id} className={styles.ListRow}>
                    <span className={styles.ListRowTitle}>{item.title}</span>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    );
};

export default TeamList;
