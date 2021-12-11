import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { updateUser } from "../../../store/users";
import styles from "../../../styles/dashboard/admin/EditUser.module.scss";

const EditUser = ({ popup, userId }) => {
    const user = useSelector((state) => state.entities.users.users).find(
        (user) => user._id === userId
    );

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);

    const dispatch = useDispatch();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser(user._id, { firstName, lastName, email, role }));
        popup(false);
    };

    return (
        <div className={styles.EditUser}>
            <div className={styles.EditUserWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Update User</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <form onSubmit={handleUpdateUser}>
                        <div className={styles.EditUserDividedRow}>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    required
                                    name="firstName"
                                    id="firstName"
                                    type="text"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    value={firstName}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    required
                                    name="lastName"
                                    id="lastName"
                                    type="text"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    value={lastName}
                                />
                            </div>
                        </div>
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            name="email"
                            id="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            name="email"
                            id="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <div className={styles.TicketFormSelect}>
                            <label htmlFor="role">Role</label>
                            <select
                                required
                                name="role"
                                id="role"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                            >
                                <option hidden disabled selected value="">
                                    Select...
                                </option>
                                <option value="pending">Pending</option>
                                <option value="developer">Developer</option>
                                <option value="manager">Manager</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit">Update User</button>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default EditUser;
