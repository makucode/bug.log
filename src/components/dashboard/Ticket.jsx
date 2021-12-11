import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Container from "./Container";
import styles from "../../styles/dashboard/Ticket.module.scss";
import Comments from "./ticket/Comments";
import { fetchComments } from "../../store/comments";
import TicketButtons from "./ticket/TicketButtons";

const Ticket = ({ ticket }) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currTicket =
        useSelector((state) => state.entities.tickets.tickets).find(
            (ticket) => ticket._id === params.id
        ) || ticket;

    const renderTag = (tag) => {
        let color;

        if (tag === "Open" || tag === "Bug" || tag === "High")
            color = styles.TagOrange;
        else if (tag === "Resolved" || tag === "Request")
            color = styles.TagGreen;
        else if (tag === "Critical" || tag === "Error") color = styles.TagAlert;
        else if (tag === "Low") color = styles.TagDark;
        else color = styles.TagBlue;

        return <p className={styles.TicketTag + " " + color}>{tag}</p>;
    };

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <>
            {!currTicket ? (
                navigate("/")
            ) : (
                <>
                    <div className={styles.Ticket}>
                        <Container>
                            <div className="ContainerHeading">
                                <h2>{currTicket.title}</h2>
                                <TicketButtons currTicket={currTicket} />
                            </div>
                            <div className={styles.TicketContent}>
                                <div className={styles.TicketRowSingleCol}>
                                    <h3 className={styles.TicketSubHeading}>
                                        Description
                                    </h3>
                                    <p>{currTicket.description}</p>
                                </div>
                                <div className={styles.TicketRow}>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            opened By
                                        </h3>
                                        <p>{currTicket.addedByName}</p>
                                    </div>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            Assigned to:
                                        </h3>
                                        <p>
                                            {currTicket.assignedToName.map(
                                                (name, idx) =>
                                                    idx <
                                                    currTicket.assignedToName
                                                        .length -
                                                        1
                                                        ? name + ", "
                                                        : name
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.TicketRow2}>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            Opened at
                                        </h3>
                                        <p>{currTicket.addedAt}</p>
                                    </div>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            status
                                        </h3>
                                        {renderTag(
                                            currTicket.isSolved
                                                ? "Resolved"
                                                : "Open"
                                        )}
                                    </div>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            priority
                                        </h3>
                                        {renderTag(currTicket.priority)}
                                    </div>
                                    <div>
                                        <h3 className={styles.TicketSubHeading}>
                                            type
                                        </h3>
                                        {renderTag(currTicket.type)}
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className="ContainerHeading">
                                <h2>Ticket Comments</h2>
                            </div>
                            <div className={styles.TicketComments}>
                                <div className={styles.TicketContent}>
                                    <Comments
                                        ticketId={currTicket._id}
                                        projectId={currTicket.project_id}
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>
                </>
            )}
        </>
    );
};

export default Ticket;
