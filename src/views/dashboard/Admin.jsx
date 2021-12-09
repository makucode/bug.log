import React from "react";
import { useSelector } from "react-redux";
import UserList from "../../components/dashboard/admin/UserList";
import Container from "../../components/dashboard/Container";
import styles from "../../styles/views/dashboard/Admin.module.scss";

const Admin = () => {
    const users = useSelector((state) => state.entities.users.users);

    const userList = {
        list: users
            .map((user) => ({
                _id: user._id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                role: user.role,
                registrationDate: user.registrationDate,
            }))
            .sort((a, b) =>
                a.name.split(" ")[1].localeCompare(b.name.split(" ")[1])
            ),
    };

    return (
        <div className={styles.Admin}>
            <Container>
                <div className="ContainerHeading">
                    <h2>Administration</h2>
                </div>
            </Container>
            <Container>
                <div className="ContainerHeading">
                    <h2>Users</h2>
                </div>
                <UserList users={userList} />
            </Container>
        </div>
    );
};

export default Admin;
