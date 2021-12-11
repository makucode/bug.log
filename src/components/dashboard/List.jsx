import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/dashboard/List.module.scss";

const List = ({ list, slug, handler }) => {
    const navigate = useNavigate();

    const handleClick = (_id) => {
        if (slug) return navigate(slug + _id);
        return handler(_id);
    };

    const renderPriority = (prio) => {
        let color;

        switch (prio) {
            case "Critical":
                color = styles.PrioCritical;
                break;
            case "High":
                color = styles.PrioHigh;
                break;
            case "Normal":
                color = styles.PrioMid;
                break;
            case "Low":
                color = styles.PrioLow;
                break;
            case "Solved":
                color = styles.Solved;
                break;
            default:
                break;
        }

        return styles.ListPrio + " " + color;
    };

    return (
        <div className={styles.List}>
            <div className={styles.ListTags}>
                {list.tags.map((tag) =>
                    tag !== "Description" ? (
                        <div key={tag}>{tag}</div>
                    ) : (
                        <div key={tag} className={styles.ListDesc}>
                            {tag}
                        </div>
                    )
                )}
            </div>
            {list.list.map((item) => (
                <div
                    key={item._id}
                    className={styles.ListRow}
                    onClick={() => handleClick(item._id)}
                >
                    <span
                        className={styles.ListRowTitle}
                        style={
                            item.info === "Solved"
                                ? { textDecoration: "line-through" }
                                : {}
                        }
                    >
                        {item.title}
                    </span>
                    <span
                        style={
                            item.info === "Solved"
                                ? { textDecoration: "line-through" }
                                : {}
                        }
                        className={styles.ListDesc}
                    >
                        {item.description}
                    </span>
                    <span
                        className={
                            list.tags.includes("Ticket") &&
                            renderPriority(item.info)
                        }
                    >
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
