import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Container from "./Container";
import { createProject, updateProject } from "../../store/projects.js";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "../../styles/dashboard/ProjectForm.module.scss";

const ProjectForm = ({ popup, projectId }) => {
    const project = useSelector((state) =>
        state.entities.projects.projects.find(
            (project) => project._id === projectId
        )
    );

    const users = useSelector((state) => state.entities.users.users);

    const [title, setTitle] = useState((project && project.title) || null);
    const [description, setDescription] = useState(
        (project && project.description) || null
    );
    const [members, setMembers] = useState((project && project.members) || []);

    const dispatch = useDispatch();

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, popup);

    const animatedComponents = makeAnimated();

    const options = !projectId
        ? users.map((user) => ({
              value: user._id,
              label: `${user.firstName} ${user.lastName}`,
          }))
        : users
              .filter((user) => user.projects.includes(projectId))
              .map((user) => ({
                  value: user._id,
                  label: `${user.firstName} ${user.lastName}`,
              }));

    const handleSubmitProject = (e) => {
        e.preventDefault();
        projectAction();
        popup(false);
    };

    const handleMultiChange = (selected) => {
        setMembers(selected.map((user) => user.value));
    };

    const projectAction = () => {
        if (!projectId) {
            return dispatch(
                createProject({
                    title,
                    description,
                    members,
                })
            );
        }

        return dispatch(
            updateProject(project._id, {
                title,
                description,
                members,
            })
        );
    };

    return (
        <div className={styles.ProjectForm}>
            <div className={styles.ProjectFormWrapper} ref={wrapperRef}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Create a new Project</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <form onSubmit={handleSubmitProject}>
                        <label htmlFor="title">Title</label>
                        <input
                            required
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Enter project title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            required
                            name="description"
                            id="description"
                            type="text"
                            placeholder="Enter description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <div className={styles.ProjectFormMulti}>
                            <h4 className={styles.ProjectFormLabel}>
                                Assign to
                            </h4>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                defaultValue={
                                    members.length > 0
                                        ? members.map((userId) => {
                                              const user = users.find(
                                                  (user) => user._id === userId
                                              );

                                              return {
                                                  value: userId,
                                                  label: `${user.firstName} ${user.lastName}`,
                                              };
                                          })
                                        : members
                                }
                                isMulti
                                options={options}
                                onChange={handleMultiChange}
                                styles={{
                                    container: (provided, state) => ({
                                        ...provided,
                                        color: "#3d516f",
                                    }),
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: "#f0f2f9",
                                        color: "#adb5bd",
                                        border: "none",
                                        boxShadow: "none",
                                        borderRadius: "7px",
                                        outline: "none",
                                    }),
                                }}
                            />
                        </div>
                        <button type="submit">
                            {!projectId ? "Add Project" : "Update Project"}
                        </button>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default ProjectForm;
