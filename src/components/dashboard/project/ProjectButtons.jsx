import React, { useState } from "react";
import Popup from "../Popup";
import DeleteProject from "./DeleteProject";
import ProjectForm from "../ProjectForm";

const ProjectButtons = ({ projectId }) => {
    const [updateProject, setUpdateProject] = useState(false);
    const [deleteProject, setDeleteProject] = useState(false);

    return (
        <>
            {updateProject && (
                <Popup isOpen={updateProject}>
                    <ProjectForm
                        popup={setUpdateProject}
                        projectId={projectId}
                    />
                </Popup>
            )}
            {deleteProject && (
                <Popup isOpen={deleteProject}>
                    <DeleteProject
                        popup={setDeleteProject}
                        projectId={projectId}
                    />
                </Popup>
            )}
            <div className="ContainerButtons">
                <button
                    className="ContainerButton"
                    onClick={() => setUpdateProject(true)}
                >
                    Edit Project
                </button>
                <button
                    className="ContainerButton ButtonAlert"
                    onClick={() => setDeleteProject(true)}
                >
                    Delete Project
                </button>
            </div>
        </>
    );
};

export default ProjectButtons;
