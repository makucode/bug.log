import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../Popup";
import TicketForm from "../TicketForm";
import DeleteTicket from "./DeleteTicket";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import styles from "../../../styles/dashboard/ticket/TicketButtons.module.scss";

const TicketButtons = ({ currTicket }) => {
    const { role, _id } = useSelector((state) => state.auth.user);
    const [updateTicket, setUpdateTicket] = useState(false);
    const [deleteTicket, setDeleteTicket] = useState(false);

    return (
        <div className={"ContainerButtons " + styles.TicketButtons}>
            {updateTicket && (
                <Popup isOpen={updateTicket}>
                    <TicketForm
                        popup={setUpdateTicket}
                        ticket={currTicket}
                        projectId={currTicket.project_id}
                    />
                </Popup>
            )}
            {deleteTicket && (
                <Popup isOpen={deleteTicket}>
                    <DeleteTicket
                        popup={setDeleteTicket}
                        ticketId={currTicket._id}
                    />
                </Popup>
            )}
            <button
                className="ContainerButton"
                onClick={() => setUpdateTicket(true)}
            >
                <EditIcon />
            </button>
            {(role === "admin" ||
                role === "manager" ||
                currTicket.author === _id) && (
                <button
                    className="ContainerButton ButtonAlert"
                    onClick={() => setDeleteTicket(true)}
                >
                    <DeleteIcon />
                </button>
            )}
        </div>
    );
};

export default TicketButtons;
