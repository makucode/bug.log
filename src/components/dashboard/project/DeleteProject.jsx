import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { deleteProject } from "../../../store/projects";
import Container from "../Container";
import styles from "../../../styles/dashboard/project/DeleteProject.module.scss";

const DeleteProject = ({ popup, projectId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, popup);

    const handleDelete = () => {
        dispatch(deleteProject(projectId));
        navigate("/dashboard/projects");
        popup(false);
    };

    return (
        <div className={styles.DeleteProject}>
            <div className={styles.DeleteProjectWrapper} ref={wrapperRef}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Delete Project?</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <div className={styles.DeleteProjectButtons}>
                        <button onClick={() => popup(null)}>Cancel</button>
                        <button className="ButtonAlert" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default DeleteProject;
