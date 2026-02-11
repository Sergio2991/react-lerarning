import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `1. CREATE COMPONENT side-bar.js
"use client";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = useState(true);      // collapse/expand
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

  const links = [
    { name: "Home", icon: <HomeIcon className="w-6 h-6" />, href: "/" },
    { name: "Profile", icon: <UserIcon className="w-6 h-6" />, href: "/profile" },
    { name: "Settings", icon: <Cog6ToothIcon className="w-6 h-6" />, href: "/settings" },
  ];

  return (
    <>
      {/* Top bar for mobile */}
      <div className="md:hidden flex items-center p-4 bg-gray-900 text-white">
        <button onClick={() => setMobileOpen(true)}>
          <Bars3Icon className="w-7 h-7" />
        </button>
        <span className="ml-4 text-lg font-semibold">My App</span>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={\`
          fixed top-0 left-0 h-full bg-gray-900 text-white z-50
          transition-all duration-300
          $\{open ? "w-64" : "w-20"}
          $\{mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        \`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className={\`text-xl font-bold transition-opacity $\{open ? "opacity-100" : "opacity-0"} md:opacity-100\`}>
            My App
          </span>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>

          {/* Collapse button (desktop only) */}
          <button
            className="hidden md:block"
            onClick={() => setOpen(!open)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-800 transition-colors"
            >
              {link.icon}
              <span className={\`$\{open ? "block" : "hidden"} md:block\`}>
                {link.name}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Push content right */}
      <div className={\`transition-all duration-300 $\{open ? "md:ml-64" : "md:ml-20"}\`}>
        {/* Your page content */}
      </div>
    </>
  );
}
    2. CREATE COMPONENT top-bar.js

"use client";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
      
      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-64">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent ml-2 outline-none w-full"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <BellIcon className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <span className="font-medium hidden md:block">Serge</span>
        </div>
      </div>
    </header>
  );
}
  3. CREATE COMPONENT dashboard-layout.js
  "use client";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div
        className={\`flex-1 min-h-screen transition-all duration-300 
          $\{sidebarOpen ? "md:ml-64" : "md:ml-20"}
        \`}
      >
        <Topbar />

        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
  `,
];

const Regex = () => {
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

export default Regex;
