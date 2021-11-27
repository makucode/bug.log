import React from "react";
import Container from "./Container";
import styles from "../../styles/dashboard/Ticket.module.scss";

const Ticket = ({ ticket }) => {
    const renderTag = (tag) => {
        let color;

        if (tag === "Open" || tag === "Bug" || tag === "High")
            color = styles.TagOrange;
        else if (tag === "Resolved" || tag === "Request")
            color = styles.TagGreen;
        else if (tag === "Critical" || tag === "Error") color = styles.TagAlert;
        else color = styles.TagBlue;

        return <p className={styles.TicketTag + " " + color}>{tag}</p>;
    };

    return (
        <Container>
            <div className="ContainerHeading">
                <h2>{ticket.title}</h2>
                <button className="ContainerButton">Update Ticket</button>
            </div>
            <div className={styles.Ticket}>
                <div className={styles.TicketContent}>
                    <div className={styles.TicketRow}>
                        <div>
                            <h3 className={styles.TicketSubHeading}>
                                opened By
                            </h3>
                            <p>{ticket.addedBy}</p>
                        </div>
                        <div>
                            <h3 className={styles.TicketSubHeading}>
                                Description
                            </h3>
                            <p>{ticket.description}</p>
                        </div>
                    </div>
                    <div className={styles.TicketRow2}>
                        <div>
                            <h3 className={styles.TicketSubHeading}>
                                Opened at
                            </h3>
                            <p>{ticket.addedAt}</p>
                        </div>
                        <div>
                            <h3 className={styles.TicketSubHeading}>status</h3>
                            {renderTag(ticket.isSolved ? "Resolved" : "Open")}
                        </div>
                        <div>
                            <h3 className={styles.TicketSubHeading}>
                                priority
                            </h3>
                            {renderTag(ticket.priority)}
                        </div>
                        <div>
                            <h3 className={styles.TicketSubHeading}>type</h3>
                            {renderTag(ticket.type)}
                        </div>
                    </div>
                </div>
                <div>Comments</div>
            </div>
        </Container>
    );
};

export default Ticket;
