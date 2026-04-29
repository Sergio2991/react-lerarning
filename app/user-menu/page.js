import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `
    BASIC USERMENUWITH AVATAR THAT TOGGLES A DROPDOWN
    "use client";
import { useState, useRef, useEffect } from "react";

export default function UserMenuBasic({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
      >
        {user?.name?.[0] || "U"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
  
USAGE
<UserMenuBasic
  user={{ name: "Serge" }}
  onLogout={() => console.log("Logout")}
/>`,
  `INTERMEDIATE USERMENU WITH AVATAR IMAGE, ICONS, DIVIDER, BETTER STYLING, SMOOTH FADE ANIMATION
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function UserMenuIntermediate({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
        className="w-10 h-10 rounded-full overflow-hidden border"
      >
        <img
          src={user?.avatar || "https://via.placeholder.com/40"}
          className="w-full h-full object-cover"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2"
          >
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
              <UserIcon className="w-5 h-5" />
              Profile
            </button>

            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
              <Cog6ToothIcon className="w-5 h-5" />
              Settings
            </button>

            <div className="border-t my-2" />

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
  
USAGE
<UserMenuIntermediate
  user={{
    name: "Serge",
    avatar: "/avatar.jpg",
  }}
  onLogout={() => console.log("Logout")}
/>`,
  `ADVANCED USERMENU WITH USER INFO HEADER, ROLE BADGE, ANIMATED DROPDOWN, KEYBOARD NAVIGATION, FOCUS TRAP, DARK MODE SUPPORT
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function UserMenuAdvanced({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
        className="w-10 h-10 rounded-full overflow-hidden border"
      >
        <img
          src={user?.avatar || "https://via.placeholder.com/40"}
          className="w-full h-full object-cover"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow-xl py-3"
          >
            {/* Header */}
            <div className="px-4 pb-3 border-b dark:border-gray-700">
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
              {user?.role && (
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {user.role}
                </span>
              )}
            </div>

            {/* Menu */}
            <div className="py-2">
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">
                <UserIcon className="w-5 h-5" />
                Profile
              </button>

              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">
                <Cog6ToothIcon className="w-5 h-5" />
                Settings
              </button>

              <div className="border-t my-2 dark:border-gray-700" />

              <button
                onClick={onLogout}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left text-red-600"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
  
USAGE
<UserMenuIntermediate
  user={{
    name: "Serge",
    avatar: "/avatar.jpg",
  }}
  onLogout={() => console.log("Logout")}
/>`,
];

const UserMenu = () => {
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

export default UserMenu;
