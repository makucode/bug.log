import React from "react";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import styles from "../../styles/views/dashboard/Home.module.scss";
import {
    chartData1,
    chartData2,
    chartData3,
    list,
    tickets,
} from "../../assets/imgs/fakeData";
import Chart from "../../components/dashboard/Chart";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Container>
                <div className="ContainerHeading">
                    <h2>My Tickets</h2>
                    <button className="ContainerButton">New Ticket</button>
                </div>
                <List list={tickets} slug="/dashboard/tickets/" />
            </Container>
            <Container>
                <div className="ContainerHeading">
                    <h2>Projects</h2>
                    <button className="ContainerButton">New Project</button>
                </div>
                <List list={list} slug="/dashboard/projects/" />
            </Container>
            <div className={styles.HomeChartWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Type</h2>
                    </div>
                    <div className={styles.HomeChart}>
                        <Chart data={chartData1} />
                    </div>
                </Container>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Priority</h2>
                    </div>
                    <div className={styles.HomeChart}>
                        <Chart data={chartData2} />
                    </div>
                </Container>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Status</h2>
                    </div>
                    <div className={styles.HomeChart}>
                        <Chart data={chartData3} />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
