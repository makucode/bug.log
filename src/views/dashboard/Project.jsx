import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import Ticket from "../../components/dashboard/Ticket";
import styles from "../../styles/views/dashboard/Project.module.scss";
import Popup from "../../components/dashboard/Popup";
import TicketForm from "../../components/dashboard/TicketForm";
import MemberForm from "../../components/dashboard/MemberForm";
import Loader from "../../components/Loader";
import ProjectForm from "../../components/dashboard/ProjectForm";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInOpacity } from "../../utils/animations";
import TeamList from "../../components/dashboard/project/TeamList";
import ProjectButtons from "../../components/dashboard/project/ProjectButtons";

const Project = () => {
    const params = useParams();

    const [selectedTicket, setSelectedTicket] = useState();
    const [addNewTicket, setAddNewTicket] = useState(false);
    const [addMember, setAddMember] = useState(false);

    const users = useSelector((state) => state.entities.users.users);
    const auth = useSelector((state) => state.auth);
    const loading = useSelector((state) => state.entities.projects.loading);
    const project = useSelector(
        (state) => state.entities.projects.projects
    ).find((project) => project._id === params.id);

    let memberList = {
        list: users
            .filter((user) => project.members.includes(user._id))
            .map((member) => ({
                _id: member._id,
                title: `${member.firstName} ${member.lastName}`,
                description: member.email,
            })),
    };

    const tickets = useSelector(
        (state) => state.entities.tickets.tickets
    ).filter((ticket) => ticket.project_id === params.id);
    const priority = ["Critical", "Error", "Normal", "Low", "Solved"];
    let ticketList = {
        tags: ["Ticket", "Description", "Priority"],
        list: tickets
            .map((ticket) => ({
                _id: ticket._id,
                title: ticket.title,
                description: ticket.description,
                info: (ticket.isSolved && "Solved") || ticket.priority,
            }))
            .sort(
                (a, b) => priority.indexOf(a.info) - priority.indexOf(b.info)
            ),
    };

    const animations = fadeInOpacity;

    return (
        <>
            {!loading && project ? (
                <div className={styles.Project}>
                    {addMember && (
                        <Popup isOpen={addMember}>
                            <MemberForm
                                popup={setAddMember}
                                projectId={params.id}
                                memberList={memberList.list}
                            />
                        </Popup>
                    )}
                    {addNewTicket && (
                        <Popup isOpen={addNewTicket}>
                            <TicketForm
                                popup={setAddNewTicket}
                                projectId={params.id}
                            />
                        </Popup>
                    )}
                    <Container>
                        <div className="ContainerHeading">
                            <h2>{project.title}</h2>
                            {auth.user.role === "admin" ||
                            auth.user.role === "manager" ? (
                                <ProjectButtons projectId={params.id} />
                            ) : (
                                <div className="ContainerHeadingInfo">
                                    Added by <span>{project.addedBy}</span> on{" "}
                                    <span>{project.addedAt}</span>
                                </div>
                            )}
                        </div>
                        <div className="ContainerContent">
                            <p>{project.description}</p>
                        </div>
                    </Container>
                    <div className={styles.ProjectSection1}>
                        <Container>
                            <div className="ContainerHeading">
                                <h2>Tickets</h2>
                                <button
                                    className="ContainerButton"
                                    onClick={() => setAddNewTicket(true)}
                                >
                                    New Ticket
                                </button>
                            </div>
                            {tickets.length > 0 && (
                                <List
                                    list={ticketList}
                                    handler={setSelectedTicket}
                                />
                            )}
                        </Container>
                        <Container>
                            <div className="ContainerHeading">
                                <h2>Team</h2>
                                {(auth.user.role === "admin" ||
                                    auth.user.role === "manager") && (
                                    <button
                                        className="ContainerButton"
                                        onClick={() => setAddMember(true)}
                                    >
                                        Update Members
                                    </button>
                                )}
                            </div>
                            <TeamList
                                list={memberList}
                                handler={() => {
                                    return;
                                }}
                            />
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
                                <Ticket
                                    ticket={tickets.find(
                                        (ticket) =>
                                            ticket._id === selectedTicket
                                    )}
                                />
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Project;
