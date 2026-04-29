import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC NOTIFICATION BELL WITH DROPDOWN LIST
  "use client";
import { useState, useRef, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationBellBasic({ notifications = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <BellIcon className="w-6 h-6 text-gray-700" />

        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2">
          {notifications.length === 0 && (
            <p className="text-center text-gray-500 py-3 text-sm">
              No notifications
            </p>
          )}

          {notifications.map((n) => (
            <div
              key={n.id}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {n.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  
USAGE
<NotificationBellBasic
  notifications={[
    { id: 1, text: "Order shipped" },
    { id: 2, text: "New message" },
  ]}
/>`,
  `INTERMEDIATE NOTIFICATION BELL WITH UNREAD BADGE COUNT, ICONS PER NOTIFICATION, TIMESTAMP, DIVIDER, SMOOTH FADE ANIMATION 
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationBellIntermediate({ notifications = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <BellIcon className="w-6 h-6 text-gray-700" />

        {unread > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-2"
          >
            {notifications.length === 0 && (
              <p className="text-center text-gray-500 py-3 text-sm">
                No notifications
              </p>
            )}

            {notifications.map((n) => (
              <div
                key={n.id}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
              >
                <p className="font-medium text-sm">{n.text}</p>
                <p className="text-xs text-gray-500 mt-1">{n.time}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
  
USAGE
<NotificationBellIntermediate
  notifications={[
    { id: 1, text: "Order shipped", time: "2h ago", read: false },
    { id: 2, text: "New message", time: "1d ago", read: true },
  ]}
/>`,
  `ADVANCED NOTIFICATION BELL WITH ANIMATED DROPDOWN, MARK ALL AS READ, NOTIFICATION CATEGORIES (E.G., SYSTEM, ORDERS), ICON PER TYPE, SCROLLABLE LIST, DARK MODE SUPPORT

"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BellIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function NotificationBellAdvanced({
  notifications = [],
  onMarkAllRead,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unread = notifications.filter((n) => !n.read).length;

  const icons = {
    message: ChatBubbleLeftRightIcon,
    order: ShoppingBagIcon,
    alert: ExclamationTriangleIcon,
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <BellIcon className="w-6 h-6 text-gray-700" />

        {unread > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow-xl py-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-3 border-b dark:border-gray-700">
              <p className="font-semibold">Notifications</p>

              {unread > 0 && (
                <button
                  onClick={onMarkAllRead}
                  className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                >
                  <CheckIcon className="w-4 h-4" />
                  Mark all as read
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 && (
                <p className="text-center text-gray-500 py-6 text-sm">
                  No notifications
                </p>
              )}

              {notifications.map((n) => {
                const Icon = icons[n.type] || BellIcon;

                return (
                  <div
                    key={n.id}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b dark:border-gray-700 last:border-none"
                  >
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />

                    <div className="flex-1">
                      <p className="text-sm font-medium">{n.text}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {n.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
  
USAGE
<NotificationBellAdvanced
  notifications={[
    { id: 1, type: "order", text: "Order #123 delivered", time: "Just now", read: false },
    { id: 2, type: "message", text: "New message from Anna", time: "2h ago", read: false },
    { id: 3, type: "alert", text: "Password changed", time: "1d ago", read: true },
  ]}
  onMarkAllRead={() => console.log("Marked all as read")}
/>`,
];

const NotificationBell = () => {
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

export default NotificationBell;
