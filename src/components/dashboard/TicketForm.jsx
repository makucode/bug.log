import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Container from "./Container";
import styles from "../../styles/dashboard/TicketForm.module.scss";
import { createTicket, updateTicket } from "../../store/tickets";

const TicketForm = ({ popup, ticket, projectId }) => {
    const projects = useSelector((state) => state.entities.projects.projects);
    const auth = useSelector((state) => state.auth);
    const users = useSelector((state) => state.entities.users.users);

    const [title, setTitle] = useState((ticket && ticket.title) || null);
    const [description, setDescription] = useState(
        (ticket && ticket.description) || null
    );
    const [type, setType] = useState((ticket && ticket.type) || null);
    const [priority, setPriority] = useState(
        (ticket && ticket.priority) || null
    );
    const [project, setProject] = useState(projectId || null);
    const [isSolved, setIsSolved] = useState(
        (ticket && ticket.isSolved) || null
    );
    const [assignedTo_id, setAssignedTo_id] = useState(
        (ticket && ticket.assignedTo_id) || []
    );

    const dispatch = useDispatch();

    const animatedComponents = makeAnimated();

    const options = !projectId
        ? users.map((user) => ({
              value: user._id,
              label: `${user.firstName} ${user.lastName}`,
          }))
        : users
              .filter((user) => user.projects.includes(projectId))
              .map((user) => ({
                  value: user._id,
                  label: `${user.firstName} ${user.lastName}`,
              }));

    const handleTicketSubmit = (e) => {
        e.preventDefault();
        ticketAction();
        popup(false);
    };

    const ticketAction = () => {
        if (!ticket) {
            return dispatch(
                createTicket({
                    title,
                    description,
                    type,
                    priority,
                    project_id: project,
                    assignedTo_id,
                })
            );
        }
        return dispatch(
            updateTicket(ticket._id, {
                title,
                description,
                type,
                priority,
                isSolved,
                assignedTo_id,
            })
        );
    };

    const handleMultiChange = (selected) => {
        setAssignedTo_id(selected.map((user) => user.value));
    };

    return (
        <>
            {users && (
                <div className={styles.TicketForm}>
                    <div className={styles.TicketFormWrapper}>
                        <Container>
                            <div className="ContainerHeading">
                                <h2>Open a new Ticket</h2>
                                <div
                                    className="ContainerClose"
                                    onClick={() => popup(false)}
                                ></div>
                            </div>
                            <form onSubmit={handleTicketSubmit}>
                                <label htmlFor="title">Title</label>
                                <input
                                    required
                                    name="title"
                                    id="title"
                                    type="text"
                                    placeholder="Enter ticket title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                                <label htmlFor="description">Description</label>
                                <input
                                    required
                                    name="description"
                                    id="description"
                                    type="text"
                                    placeholder="Enter description"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    value={description}
                                />
                                {!ticket && !projectId && (
                                    <div className={styles.TicketFormSelect}>
                                        <label htmlFor="project">Project</label>
                                        <select
                                            required
                                            name="project"
                                            id="project"
                                            onChange={(e) =>
                                                setProject(e.target.value)
                                            }
                                            value={project}
                                        >
                                            <option
                                                hidden
                                                disabled
                                                selected
                                                value=""
                                            >
                                                Select...
                                            </option>
                                            {projects.map((project) => (
                                                <option value={project._id}>
                                                    {project.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                <div className={styles.TicketFormDividedRow}>
                                    <div className={styles.TicketFormSelect}>
                                        <label htmlFor="type">Type</label>
                                        <select
                                            required
                                            name="type"
                                            id="type"
                                            onChange={(e) =>
                                                setType(e.target.value)
                                            }
                                            value={type}
                                        >
                                            <option
                                                hidden
                                                disabled
                                                selected
                                                value=""
                                            >
                                                Select...
                                            </option>
                                            <option value="Bug">Bug</option>
                                            <option value="Error">Error</option>
                                            <option value="UI">UI</option>
                                            <option value="Request">
                                                Request
                                            </option>
                                        </select>
                                    </div>
                                    <div className={styles.TicketFormSelect}>
                                        <label htmlFor="priority">
                                            Priority
                                        </label>
                                        <select
                                            required
                                            name="priority"
                                            id="priority"
                                            onChange={(e) =>
                                                setPriority(e.target.value)
                                            }
                                            value={priority}
                                        >
                                            <option
                                                hidden
                                                disabled
                                                selected
                                                value=""
                                            >
                                                Select...
                                            </option>
                                            <option value="Critical">
                                                Critical
                                            </option>
                                            <option value="High">High</option>
                                            <option value="Normal">
                                                Normal
                                            </option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                </div>
                                {ticket && (
                                    <div className={styles.TicketFormCheckbox}>
                                        <input
                                            name="isSolved"
                                            type="checkbox"
                                            onChange={() =>
                                                setIsSolved(!isSolved)
                                            }
                                            checked={isSolved}
                                        />
                                        <label
                                            htmlhtmlFor="isSolved"
                                            onClick={() =>
                                                setIsSolved(!isSolved)
                                            }
                                        >
                                            Solved?
                                        </label>
                                    </div>
                                )}
                                {(auth.user.role === "admin" ||
                                    auth.user.role === "manager") && (
                                    <div className={styles.TicketFormMulti}>
                                        <h4 className={styles.TicketFormLabel}>
                                            Assign to
                                        </h4>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={
                                                assignedTo_id.length > 0
                                                    ? assignedTo_id.map(
                                                          (userId) => {
                                                              const user =
                                                                  users.find(
                                                                      (user) =>
                                                                          user._id ===
                                                                          userId
                                                                  );

                                                              return {
                                                                  value: userId,
                                                                  label: `${user.firstName} ${user.lastName}`,
                                                              };
                                                          }
                                                      )
                                                    : assignedTo_id
                                            }
                                            isMulti
                                            options={options}
                                            onChange={handleMultiChange}
                                            styles={{
                                                container: (
                                                    provided,
                                                    state
                                                ) => ({
                                                    ...provided,
                                                    color: "#3d516f",
                                                }),
                                                control: (provided, state) => ({
                                                    ...provided,
                                                    backgroundColor: "#f0f2f9",
                                                    color: "#adb5bd",
                                                    border: "none",
                                                    boxShadow: "none",
                                                    borderRadius: "7px",
                                                    outline: "none",
                                                }),
                                            }}
                                        />
                                    </div>
                                )}

                                <button type="submit">
                                    {ticket ? "Update Ticket" : "Add Ticket"}
                                </button>
                            </form>
                        </Container>
                    </div>
                </div>
            )}
        </>
    );
};

export default TicketForm;
