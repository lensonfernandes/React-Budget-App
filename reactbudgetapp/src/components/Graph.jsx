import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ graphData }) => {
  return (
    <div>
      <Line
        data={{
          labels: graphData.map(i=>i[0]),
          datasets: [
            { 
                data: graphData.map(ele => ele[1]),
                label: "Expenses", 
                borderColor: "red" },
          ],
        }}
      ></Line>
    </div>
  );
};

export default Graph;
