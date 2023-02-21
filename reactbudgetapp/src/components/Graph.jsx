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
    Legend
} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend

)

const Graph = () => {
  return (
    <div>
      <Line
        data={{
          labels: [1, 2, 3, 4],
          datasets: [{ data: [9, 6, 7, 8], label: "ages", borderColor:"green" }],
        }}
      ></Line>
    </div>
  );
};

export default Graph;
