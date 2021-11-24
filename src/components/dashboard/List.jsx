import React from "react";
import styles from "../../styles/dashboard/List.module.scss";

const List = ({ list }) => {
    return (
        <div className={styles.List}>
            <div className={styles.ListTags}>
                {list.tags.map((tag) => (
                    <div>{tag}</div>
                ))}
            </div>
            {list.list.map((item) => (
                <div className={styles.ListRow}>
                    <span className={styles.ListRowTitle}>{item.title}</span>
                    <span>{item.description}</span>
                    <span>
                        {item.members.map((member, idx) =>
                            idx < item.members.length - 1
                                ? member + ", "
                                : member
                        )}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default List;
