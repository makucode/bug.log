import React, { useState } from "react";
import Popup from "../Popup";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import styles from "../../../styles/dashboard/admin/UserList.module.scss";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";

const UserList = ({ users }) => {
    const [updateUser, setUpdateUser] = useState();
    const [deleteUser, setDeleteUser] = useState();

    const { width } = useWindowDimensions();

    return (
        <>
            {updateUser && (
                <Popup isOpen={setUpdateUser}>
                    <EditUser popup={setUpdateUser} userId={updateUser} />
                </Popup>
            )}
            {deleteUser && (
                <Popup isOpen={setDeleteUser}>
                    <DeleteUser popup={setDeleteUser} userId={deleteUser} />
                </Popup>
            )}
            <div className={styles.UserList}>
                <div className={styles.UserListTags}>
                    <div>Name</div>
                    <div className={styles.SubTag}>Email</div>
                    <div className={styles.SubTag}>Role</div>
                    <div className={styles.SubTag + " " + styles.Registered}>
                        Registered
                    </div>
                </div>
                {users.list.map((user) => (
                    <div key={user._id} className={styles.UserListRow}>
                        <span className={styles.UserListRowTitle}>
                            {user.name}
                        </span>
                        <span className={styles.UserListMail}>
                            {user.email}
                        </span>
                        <span className={styles.UserListRole}>{user.role}</span>
                        <span className={styles.UserListDate}>
                            {user.registrationDate}
                        </span>
                        <div className={styles.UserListButtons}>
                            <button onClick={() => setUpdateUser(user._id)}>
                                {width > 1024 ? "Edit User" : <EditIcon />}
                            </button>
                            <button
                                className="ButtonAlert"
                                onClick={() => setDeleteUser(user._id)}
                            >
                                {width > 1024 ? "Delete User" : <DeleteIcon />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserList;
