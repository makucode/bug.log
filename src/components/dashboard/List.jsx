import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/dashboard/List.module.scss";

const List = ({ list, slug }) => {
    return (
        <div className={styles.List}>
            <div className={styles.ListTags}>
                {list.tags.map((tag) => (
                    <div>{tag}</div>
                ))}
            </div>
            {list.list.map((item) => (
                <Link to={slug + item._id}>
                    <div className={styles.ListRow}>
                        <span className={styles.ListRowTitle}>
                            {item.title}
                        </span>
                        <span>{item.description}</span>
                        <span>
                            {item.info.constructor.name === "Array"
                                ? item.info.map((infoItem, idx) =>
                                      idx < item.info.length - 1
                                          ? infoItem + ", "
                                          : infoItem
                                  )
                                : item.info}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default List;
