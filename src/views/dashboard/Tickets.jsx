import React from "react";
import { tickets } from "../../assets/fakeData";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import styles from "../../styles/views/dashboard/Tickets.module.scss";

const Tickets = () => {
    return (
        <div className={styles.Tickets}>
            <Container>
                <div className="ContainerHeading">
                    <h2>My Tickets</h2>
                    <button className="ContainerButton">New Ticket</button>
                </div>
                <List list={tickets} slug="/dashboard/projects/" />
            </Container>
        </div>
    );
};

export default Tickets;
