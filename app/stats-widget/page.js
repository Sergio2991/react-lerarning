import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC KPI WIDGET NUMBER + LABEL
  export default function KpiBasic({ label, value }) {
  return (
    <div className="p-4 bg-white rounded-xl border shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold text-gray-900 mt-1">{value}</div>
    </div>
  );
}
  
USAGE
<KpiBasic label="Total Users" value="12,430" />`,
  `INTERMIDIATE KPI WIDGET, TREND INDICATOR + ICON + DELTA
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function KpiMedium({ label, value, delta, positive }) {
  return (
    <div className="p-5 bg-white rounded-xl border shadow-sm flex flex-col gap-2">
      <div className="text-sm text-gray-500">{label}</div>

      <div className="flex items-center justify-between">
        <div className="text-3xl font-semibold text-gray-900">{value}</div>

        <div
          className={\`flex items-center gap-1 text-sm font-medium $\{
            positive ? "text-green-600" : "text-red-600"
          }\`}
        >
          {positive ? (
            <ArrowUpIcon className="w-4 h-4" />
          ) : (
            <ArrowDownIcon className="w-4 h-4" />
          )}
          {delta}%
        </div>
      </div>
    </div>
  );
}
  
USAGE
<KpiMedium label="Revenue" value="$42,300" delta="12.4" positive />
<KpiMedium label="Churn Rate" value="3.1%" delta="0.8" positive={false} />`,
  `ADVANCED KPI WIDGET - SPARKLINE + TREND + ICON + CONTEXTUAL LABEL
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function KpiAdvanced({ label, value, delta, positive, data }) {
  return (
    <div className="p-6 bg-white rounded-xl border shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">{label}</div>

        <div
          className={\`px-2 py-1 text-xs rounded-full $\{
            positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }\`}
        >
          {positive ? "Improving" : "Declining"}
        </div>
      </div>

      <div className="text-3xl font-semibold text-gray-900">{value}</div>

      <div className="flex items-center gap-2 text-sm">
        {positive ? (
          <ArrowUpIcon className="w-4 h-4 text-green-600" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 text-red-600" />
        )}
        <span className={positive ? "text-green-600" : "text-red-600"}>
          {delta}% vs last month
        </span>
      </div>

      <svg viewBox="0 0 100 30" className="w-full h-8 text-blue-500">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={data.map((v, i) => \`$\{i * (100 / (data.length - 1))},$\{30 - v}\`).join(" ")}
        />
      </svg>
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
