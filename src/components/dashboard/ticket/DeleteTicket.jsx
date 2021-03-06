import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../../../store/tickets";
import styles from "../../../styles/dashboard/ticket/DeleteTicket.module.scss";
import Container from "../Container";

const DeleteTicket = ({ popup, ticketId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTicket(ticketId));
        popup(false);
    };

    return (
        <div className={styles.DeleteTicket}>
            <div className={styles.DeleteTicketWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Delete Ticket?</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <div className={styles.DeleteTicketButtons}>
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

export default DeleteTicket;
