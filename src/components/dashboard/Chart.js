import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/dashboard/Chart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
    return <Pie data={data} />;
};

export default Chart;
