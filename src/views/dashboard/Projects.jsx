import React from "react";
import { list } from "../../assets/fakeData";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import styles from "../../styles/views/dashboard/Projects.module.scss";

const Projects = () => {
    return (
        <div className={styles.Projects}>
            <Container>
                <div className="ContainerHeading">
                    <h2>My Projects</h2>
                    <button className="ContainerButton">New Project</button>
                </div>
                <List list={list} slug="/dashboard/projects/" />
            </Container>
        </div>
    );
};

export default Projects;
