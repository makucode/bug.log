import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/dashboard/Container";
import DataInfo from "../../components/dashboard/DataInfo";
import List from "../../components/dashboard/List";
import Popup from "../../components/dashboard/Popup";
import ProjectForm from "../../components/dashboard/ProjectForm";

import styles from "../../styles/views/dashboard/Projects.module.scss";

const Projects = () => {
    const auth = useSelector((state) => state.auth);
    const projects = useSelector((state) => state.entities.projects.projects);

    const [addNewProject, setAddNewProject] = useState(false);

    let projectList = {
        tags: ["Project", "Description", "Members"],
        list: projects
            .map((project) => ({
                _id: project._id,
                title: project.title,
                description: project.description,
                info: project.memberNames,
            }))
            .sort((a, b) => a.title.localeCompare(b.title)),
    };

    return (
        <>
            {addNewProject && (
                <Popup isOpen={addNewProject}>
                    <ProjectForm popup={setAddNewProject} />
                </Popup>
            )}
            <div className={styles.Projects}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>My Projects</h2>
                        {(auth.user.role === "admin" ||
                            auth.user.role === "manager") && (
                            <button
                                className="ContainerButton"
                                onClick={() => setAddNewProject(true)}
                            >
                                New Project
                            </button>
                        )}
                    </div>
                    {projects.length > 0 && !projects.loading ? (
                        <List list={projectList} slug="/dashboard/projects/" />
                    ) : (
                        <DataInfo />
                    )}
                </Container>
            </div>
        </>
    );
};

export default Projects;
