import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
export default function TimelineBasic({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5" />
          <div>
            <div className="font-medium text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
  
USAGE
<TimelineBasic
  items={[
    { title: "Order Placed", time: "10:24 AM" },
    { title: "Processing", time: "11:10 AM" },
    { title: "Shipped", time: "2:45 PM" },
  ]}
/>`,
  `INTERMIDIATE
export default function TimelineMedium({ items }) {
  return (
    <div className="relative border-l border-gray-300 pl-6 space-y-8">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
            {item.icon}
          </div>

          <div className="font-semibold text-gray-900">{item.title}</div>
          <div className="text-sm text-gray-500">{item.time}</div>
          {item.description && (
            <div className="text-sm text-gray-600 mt-1">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
  
USAGE
<TimelineMedium
  items={[
    {
      title: "Project Created",
      time: "Jan 12",
      description: "Initial setup and repository creation",
      icon: "📁",
    },
    {
      title: "Design Phase",
      time: "Jan 15",
      description: "Wireframes and UI components",
      icon: "🎨",
    },
    {
      title: "Development",
      time: "Jan 20",
      description: "Core features implemented",
      icon: "💻",
    },
  ]}
/>`,
  `ADVANCED
export default function TimelineAdvanced({ items }) {
  return (
    <div className="relative pl-8 border-l border-gray-300 space-y-10">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div
            className={\`absolute -left-4 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white $\{
              item.status === "completed"
                ? "bg-green-600"
                : item.status === "current"
                ? "bg-blue-600"
                : "bg-gray-400"
            }\`}
          >
            {item.icon}
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-500">{item.time}</div>
            </div>

            {item.description && (
              <div className="text-sm text-gray-600 mt-2">
                {item.description}
              </div>
            )}

            {item.extra && (
              <div className="mt-3 text-sm text-blue-600 font-medium">
                {item.extra}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
  
USAGE
<TimelineAdvanced
  items={[
    {
      title: "User Registered",
      time: "09:12 AM",
      description: "New user created an account",
      status: "completed",
      icon: "🟢",
    },
    {
      title: "Email Verified",
      time: "09:20 AM",
      description: "User verified their email address",
      status: "completed",
      icon: "✔️",
    },
    {
      title: "Onboarding",
      time: "In progress",
      description: "User is completing onboarding steps",
      status: "current",
      icon: "⏳",
      extra: "3 steps remaining",
    },
  ]}
/>`,
];

const Timeline = () => {
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

export default Timeline;
