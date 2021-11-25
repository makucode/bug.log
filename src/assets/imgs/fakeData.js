export const list = {
    tags: ["Project", "Description", "Members"],
    list: [
        {
            _id: 4,
            title: "Projekt 1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: ["Maku von G", "Cooler Tüpp"],
        },
        {
            _id: 5,
            title: "Projekt 2",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: ["Ehrenmann", "Der G"],
        },
        {
            _id: 6,
            title: "Projekt 3",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: ["Maku von G", "Yuyu Killer", "Cooler Tüpp"],
        },
    ],
};

export const tickets = {
    tags: ["Ticket", "Description", "Priority"],
    list: [
        {
            _id: 1,
            title: "Ticket 1",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: "Critical",
        },
        {
            _id: 2,
            title: "Ticket 2",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: "High",
        },
        {
            _id: 3,
            title: "Ticket 3",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            info: "Low",
        },
    ],
};

export const chartData1 = {
    labels: ["Bug", "Error", "UI", "Request"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5],
            backgroundColor: [
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
            borderWidth: 0,
        },
    ],
};

export const chartData2 = {
    labels: ["Critical", "High", "Normal", "Low"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
            borderWidth: 0,
        },
    ],
};

export const chartData3 = {
    labels: ["Resolved", "In progress"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderWidth: 0,
        },
    ],
};
