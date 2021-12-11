import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashboard/projects/ProjectList.module.scss";

const ProjectList = ({ list, slug }) => {
    const navigate = useNavigate();

    const handleClick = (_id) => {
        if (slug) return navigate(slug + _id);
    };

    return (
        <div className={styles.ProjectList}>
            <div className={styles.ProjectListTags}>
                <div>Project</div>
                <div className={styles.ProjectListDesc}>Description</div>
                <div className={styles.ProjectListMembers}>Members</div>
            </div>
            {list.list.map((item) => (
                <div
                    key={item._id}
                    className={styles.ProjectListRow}
                    onClick={() => handleClick(item._id)}
                >
                    <span
                        className={styles.ProjectListRowTitle}
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
                        className={styles.ProjectListDesc}
                    >
                        {item.description}
                    </span>
                    <span className={styles.ProjectListMembers}>
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

export default ProjectList;
