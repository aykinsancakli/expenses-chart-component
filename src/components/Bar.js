import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import BarChartData from "../Data";
import { callback } from "chart.js/helpers";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
); // Register BarElement

export default function BarGraph() {
  const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        backgroundColor: "hsl(25, 47%, 15%)",
        padding: 10,
        cornerRadius: 5,
        bodyFont: {
          size: 14,
        },
        callbacks: {
          title: () => "",
          label: (tooltipItem) => `$${tooltipItem.parsed.y}`,
        },
      },
    },
  };

  return <Bar options={options} data={BarChartData} />;
}
