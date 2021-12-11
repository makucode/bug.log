import React from "react";
import { useDispatch } from "react-redux";
import Container from "../Container";
import styles from "../../../styles/dashboard/admin/DeleteUser.module.scss";
import { deleteUser } from "../../../store/users";

const DeleteUser = ({ popup, userId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(userId));
        popup(false);
    };

    return (
        <div className={styles.DeleteUser}>
            <div className={styles.DeleteUserWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Delete User?</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <div className={styles.DeleteUserButtons}>
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

export default DeleteUser;
