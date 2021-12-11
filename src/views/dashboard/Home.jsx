import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/dashboard/Container";
import List from "../../components/dashboard/List";
import styles from "../../styles/views/dashboard/Home.module.scss";
import Chart from "../../components/dashboard/Chart";
import TicketForm from "../../components/dashboard/TicketForm";
import Popup from "../../components/dashboard/Popup";
import Loader from "../../components/Loader";
import DataInfo from "../../components/dashboard/DataInfo";

const Home = () => {
    const tickets = useSelector((state) => state.entities.tickets.tickets);
    const priority = ["Critical", "Error", "Normal", "Low", "Solved"];
    const ticketsList = {
        tags: ["Ticket", "Description", "Priority"],
        list: tickets
            .map((ticket) => ({
                _id: ticket._id,
                title: ticket.title,
                description: ticket.description,
                info: (ticket.isSolved && "Solved") || ticket.priority,
            }))
            .sort(
                (a, b) => priority.indexOf(a.info) - priority.indexOf(b.info)
            ),
    };

    const [addNewTicket, setAddNewTicket] = useState(false);

    const chartData1 = {
        labels: ["Bug", "Error", "UI", "Request"],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    tickets.filter((ticket) => ticket.type === "Bug").length,
                    tickets.filter((ticket) => ticket.type === "Error").length,
                    tickets.filter((ticket) => ticket.type === "UI").length,
                    tickets.filter((ticket) => ticket.type === "Request")
                        .length,
                ],
                backgroundColor: ["#fba440", "indianred", "#78c4ec", "#30b87d"],
                borderColor: ["#fba440", "indianred", "#78c4ec", "#30b87d"],
                borderWidth: 0,
            },
        ],
    };

    const chartData2 = {
        labels: ["Critical", "High", "Normal", "Low"],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    tickets.filter((ticket) => ticket.priority === "Critical")
                        .length,
                    tickets.filter((ticket) => ticket.priority === "High")
                        .length,
                    tickets.filter((ticket) => ticket.priority === "Normal")
                        .length,
                    tickets.filter((ticket) => ticket.priority === "Low")
                        .length,
                ],
                backgroundColor: ["indianred", "#fba440", "#78c4ec", "#30b87d"],
                borderColor: ["indianred", "#fba440", "#78c4ec", "#30b87d"],
                borderWidth: 0,
            },
        ],
    };

    const chartData3 = {
        labels: ["Resolved", "In progress"],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    tickets.filter((ticket) => ticket.isSolved === true).length,
                    tickets.filter((ticket) => ticket.isSolved === false)
                        .length,
                ],
                backgroundColor: ["#30b87d", "#fba440"],
                borderColor: ["#30b87d", "#fba440"],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className={styles.Home}>
            {addNewTicket && (
                <Popup isOpen={addNewTicket}>
                    <TicketForm popup={setAddNewTicket} />
                </Popup>
            )}
            <Container>
                <div className="ContainerHeading">
                    <h2>My Tickets</h2>
                    <button
                        className="ContainerButton"
                        onClick={() => setAddNewTicket(true)}
                    >
                        New Ticket
                    </button>
                </div>
                {tickets.length > 0 && !tickets.loading ? (
                    <List list={ticketsList} slug="/dashboard/tickets/" />
                ) : (
                    <DataInfo />
                )}
                {tickets.loading && <Loader />}
            </Container>
            <div className={styles.HomeChartWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Type</h2>
                    </div>
                    {tickets.length > 0 && !tickets.loading ? (
                        <div className={styles.HomeChart}>
                            <Chart data={chartData1} />
                        </div>
                    ) : (
                        <DataInfo />
                    )}
                </Container>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Priority</h2>
                    </div>
                    {tickets.length > 0 && !tickets.loading ? (
                        <div className={styles.HomeChart}>
                            <Chart data={chartData2} />
                        </div>
                    ) : (
                        <DataInfo />
                    )}
                </Container>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Tickets by Status</h2>
                    </div>
                    {tickets.length > 0 && !tickets.loading ? (
                        <div className={styles.HomeChart}>
                            <Chart data={chartData3} />
                        </div>
                    ) : (
                        <DataInfo />
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Home;
