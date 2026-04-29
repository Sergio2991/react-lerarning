import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `INSTALL CHART LIBRARY CHART.JS 2
    yarn add chart.js react-chartjs-2`,
  `BASIC LINE CHART
    "use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

export default function LineChartBasic() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 15, 22, 30],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <Line data={data} />
    </div>
  );
}`,
  `BASIC BAR CHART
"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function BarChartBasic() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3],
        backgroundColor: ["#ef4444", "#3b82f6", "#eab308"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <Bar data={data} />
    </div>
  );
}`,
  `BASIC PIE CHART
"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartBasic() {
  const data = {
    labels: ["Chrome", "Safari", "Firefox"],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: ["#3b82f6", "#22c55e", "#f97316"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <Pie data={data} />
    </div>
  );
}`,
  `INTERMIDIATE WITH TAILWIND STYLING, TOOLTIP, GRIDLINES
"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

export default function LineChartMedium() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 150, 180, 130, 200],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
        padding: 10,
      },
    },
    scales: {
      y: { grid: { color: "#e5e7eb" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border">
      <h2 className="text-lg font-semibold mb-4">Visitors This Week</h2>
      <Line data={data} options={options} />
    </div>
  );
}`,
  `ADVANCED WITH DASHBOARD-READY, GRADIENTS, LEGENDS, MULTI-DATASET
"use client";
import { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function LineChartAdvanced() {
  const chartRef = useRef(null);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4200, 3800, 5000, 6200, 7000],
        borderColor: "#3b82f6",
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(59,130,246,0.4)");
          gradient.addColorStop(1, "rgba(59,130,246,0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [2000, 2500, 2300, 2600, 3000, 3200],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { usePointStyle: true, pointStyle: "circle" },
      },
      tooltip: {
        backgroundColor: "#111827",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
      },
    },
    scales: {
      y: { grid: { color: "#e5e7eb" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border">
      <h2 className="text-lg font-semibold mb-4">Revenue vs Expenses</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}`,
];

const Chart = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
};

export default Chart;
