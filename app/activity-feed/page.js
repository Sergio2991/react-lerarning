import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC VERTICAL ACTIVITY FEED WITH TEXT & TIMESTAMPS
    
"use client";

export default function ActivityFeedBasic({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col">
          <span className="font-medium">{item.text}</span>
          <span className="text-xs text-gray-500">{item.time}</span>
        </div>
      ))}
    </div>
  );
}
  
USAGE

<ActivityFeedBasic
  items={[
    { id: 1, text: "Order #123 placed", time: "2h ago" },
    { id: 2, text: "Payment confirmed", time: "1h ago" },
  ]}
/>`,
  `INTERMEDIATE ACTIVITY FEED WITH ICONS, COLOTED STATUS INDICATORS, BETTER LAYOUT, DIVIDER LINES

"use client";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ActivityFeedIntermediate({ items = [] }) {
  const icons = {
    success: CheckCircleIcon,
    pending: ClockIcon,
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const Icon = icons[item.type] || ClockIcon;

        return (
          <div key={item.id} className="flex gap-3 items-start">
            <Icon
              className={\`w-6 h-6 $\{
                item.type === "success"
                  ? "text-green-500"
                  : "text-gray-500"
              }\`}
            />

            <div className="flex-1">
              <p className="font-medium">{item.text}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
  
USAGE

<ActivityFeedIntermediate
  items={[
    { id: 1, type: "success", text: "Order shipped", time: "Just now" },
    { id: 2, type: "pending", text: "Awaiting payment", time: "3h ago" },
  ]}
/>`,
  `ADVANCED ACTIVITY FEED WITH FRAMER, MOTIOn ANIMATIONS, VERTICAL TIMELINE LINE, STATUS BADGES, CATEGORIES(orders, system, messages), AVATAR SUPPORT, DARK MODE
  
  "use client";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function ActivityFeedAdvanced({ items = [] }) {
  const icons = {
    order: ShoppingBagIcon,
    message: ChatBubbleLeftRightIcon,
    alert: ExclamationTriangleIcon,
    success: CheckCircleIcon,
  };

  return (
    <div className="relative pl-6 space-y-8">
      {/* Vertical line */}
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      {items.map((item, i) => {
        const Icon = icons[item.type] || CheckCircleIcon;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative flex gap-4"
          >
            {/* Dot */}
            <div className="absolute -left-3.5 top-1 w-3 h-3 bg-blue-500 rounded-full" />

            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-medium">{item.text}</p>

              {item.details && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.details}
                </p>
              )}

              <p className="text-xs text-gray-500 mt-1">{item.time}</p>

              {item.badge && (
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
  
USAGE

<ActivityFeedAdvanced
  items={[
    {
      id: 1,
      type: "order",
      text: "Order #123 delivered",
      details: "Left at front door",
      time: "Just now",
      badge: "Delivered",
    },
    {
      id: 2,
      type: "message",
      text: "New message from support",
      details: "Your refund has been approved",
      time: "2h ago",
    },
    {
      id: 3,
      type: "alert",
      text: "Password changed",
      time: "1d ago",
      badge: "Security",
    },
  ]}
/>`,
];

const ActivityFeed = () => {
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

export default ActivityFeed;
