import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    export default function FeatureGridBasic() {
  const features = [
    { title: "Fast Performance", text: "Optimized for speed and efficiency." },
    { title: "Secure", text: "Built with modern security standards." },
    { title: "Easy to Use", text: "Simple and intuitive interface." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="p-4 bg-white rounded-xl shadow text-center">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{f.text}</p>
        </div>
      ))}
    </div>
  );
}`,
  `INTERMIDIATE ICON, BETTER LAYOUT, HOVER, 4 COLUMNS
import { CheckCircleIcon, ShieldCheckIcon, BoltIcon } from "@heroicons/react/24/solid";

export default function FeatureGridMedium() {
  const features = [
    {
      icon: <BoltIcon className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      text: "Experience blazing‑fast load times and smooth interactions.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Security",
      text: "Your data is protected with industry‑leading security.",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-blue-600" />,
      title: "Reliable",
      text: "Built to scale and handle heavy workloads.",
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-blue-600" />,
      title: "Modern UI",
      text: "Clean, intuitive design that users love.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          {f.icon}
          <h3 className="mt-3 text-lg font-semibold text-gray-800">{f.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{f.text}</p>
        </div>
      ))}
    </div>
  );
}`,
  `ADVANCED ICON, GRADIENT ACCENT, CARD BORDER, PREMIUM LAYOUT
import { SparklesIcon, ShieldCheckIcon, CpuChipIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function FeatureGridAdvanced() {
  const features = [
    {
      icon: <SparklesIcon className="w-10 h-10 text-blue-600" />,
      title: "AI‑Powered",
      text: "Smart automation that adapts to your workflow.",
    },
    {
      icon: <CpuChipIcon className="w-10 h-10 text-blue-600" />,
      title: "High Performance",
      text: "Optimized architecture for maximum speed.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600" />,
      title: "Zero‑Trust Security",
      text: "Advanced protection with continuous verification.",
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10 text-blue-600" />,
      title: "Global Scale",
      text: "Reliable infrastructure across multiple regions.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition"
        >
          <div className="bg-linear-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center">
            {f.icon}
          </div>

          <h3 className="mt-5 text-xl font-semibold text-gray-800">{f.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{f.text}</p>
        </div>
      ))}
    </div>
  );
}`,
];

const FeatureGrid = () => {
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

export default FeatureGrid;
