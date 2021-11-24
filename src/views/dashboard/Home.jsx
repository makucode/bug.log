import React from "react";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import styles from "../../styles/views/dashboard/Home.module.scss";

const list = {
    tags: ["Project", "Description", "Members"],
    list: [
        {
            title: "Projekt 1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            members: ["Maku von G", "Cooler Tüpp"],
        },
        {
            title: "Projekt 2",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            members: ["Ehrenmann", "Der G"],
        },
        {
            title: "Projekt 3",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            members: ["Maku von G", "Yuyu Killer", "Cooler Tüpp"],
        },
    ],
};

const Home = () => {
    return (
        <div className={styles.Home}>
            <Container>
                <div className="ContainerHeading">
                    <h2>Projects</h2>
                    <button className="ContainerButton">New Project</button>
                </div>
                <List list={list} />
            </Container>
        </div>
    );
};

export default Home;
