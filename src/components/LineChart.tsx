import { Box } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
          beginAtZero: true          
        }
      } 
};

interface LineChartProps {
    months: string[];
    values: number[];
}

function LineChart({ months, values }: LineChartProps) {
    const data = {
        labels: months,
        datasets: [
            {
                data: values,
                borderColor: "rgb(99, 132,255)",
                backgroundColor: "rgba(99, 132, 255, 0.5)",
            },
        ],
    };

    return (
        <Box paddingX={1}>
            <Line options={options} data={data} />
        </Box>
    );
}

export default LineChart;
