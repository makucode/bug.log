import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/dashboard/List.module.scss";

const List = ({ list, slug, handler }) => {
    const navigate = useNavigate();

    const handleClick = (_id) => {
        if (slug) return navigate(slug + _id);
        return handler(_id);
    };
    return (
        <div className={styles.List}>
            <div className={styles.ListTags}>
                {list.tags.map((tag) => (
                    <div>{tag}</div>
                ))}
            </div>
            {list.list.map((item) => (
                <div
                    className={styles.ListRow}
                    onClick={() => handleClick(item._id)}
                >
                    <span className={styles.ListRowTitle}>{item.title}</span>
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
            ))}
        </div>
    );
};

export default List;
