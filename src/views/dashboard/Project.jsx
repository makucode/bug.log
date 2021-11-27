import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { tickets, users } from "../../assets/fakeData";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import Ticket from "../../components/dashboard/Ticket";
import styles from "../../styles/views/dashboard/Project.module.scss";
import { fadeInScale } from "../../utils/animations";

const Project = () => {
    const [selectedTicket, setSelectedTicket] = useState("");

    const animations = fadeInScale;

    const ticket = {
        id: "74523dfhce233w3sdx76",
        title: "New Ticket",
        description:
            "This is a very annoying bug occuring everytime I do anything, pls fix asap.",
        type: "Bug",
        isSolved: false,
        priority: "Critical",
        addedAt: "27.11.2021",
        addedBy: "Maku Laku",
        projectName: "Cooles Projekt",
        assignedToName: ["Maku Laku", "Ehren Dude"],
    };

    return (
        <div className={styles.Project}>
            <div className={styles.ProjectSection1}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Team</h2>
                        <button className="ContainerButton">Add Member</button>
                    </div>
                    <List
                        list={users}
                        handler={() => {
                            return;
                        }}
                    />
                </Container>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets</h2>
                        <button className="ContainerButton">New Ticket</button>
                    </div>
                    <List list={tickets} handler={setSelectedTicket} />
                </Container>
            </div>
            {selectedTicket && (
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={selectedTicket}
                        transition={{ duration: 0.25 }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        <Ticket ticket={ticket} />
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default Project;
