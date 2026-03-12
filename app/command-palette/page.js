import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SIMPLE, KEYBOARD-OPEN, FILTERED LIST
    
"use client";
import { useState, useEffect } from "react";

export default function CommandPaletteBasic() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const commands = [
    "Open Dashboard",
    "Create Project",
    "View Settings",
    "Logout",
  ];

  const filtered = commands.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-4">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />

            <div className="mt-3 border-t pt-3">
              {filtered.map((cmd, i) => (
                <div
                  key={i}
                  className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  {cmd}
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="px-3 py-2 text-gray-500 text-sm">
                  No results
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,
  `INTERMIDIATE SMOOTH ANIMATION, ICONS, KEYBOARD NAVIGATION
"use client";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function CommandPaletteMedium() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands = [
    { label: "Open Dashboard", icon: "📊" },
    { label: "Create Project", icon: "➕" },
    { label: "View Settings", icon: "⚙️" },
    { label: "Logout", icon: "🚪" },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);

      if (!open) return;

      if (e.key === "ArrowDown") {
        setActive((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        setActive((i) => (i - 1 + filtered.length) % filtered.length);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered.length]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-4 animate-scaleIn">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="w-full focus:outline-none"
              />
            </div>

            <div className="mt-3 border-t pt-3 max-h-64 overflow-y-auto">
              {filtered.map((cmd, i) => (
                <div
                  key={i}
                  className={\`px-3 py-2 rounded cursor-pointer flex items-center gap-3 $\{
                    i === active ? "bg-gray-100" : "hover:bg-gray-50"
                  }\`}
                >
                  <span>{cmd.icon}</span>
                  {cmd.label}
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="px-3 py-2 text-gray-500 text-sm">
                  No results
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
  
ADD ANIMATION
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-scaleIn {
  animation: scaleIn 0.2s ease-out;
}`,
  `ADVANCED WITH SECTION, ACTIONS, KEYBOARD, SHORTCUTS, PREMIUM UI
"use client";
import { useState, useEffect } from "react";
import {
  Cog6ToothIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  FolderPlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function CommandPaletteAdvanced() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const sections = [
    {
      title: "Navigation",
      items: [
        { label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
        { label: "Dashboard", icon: "📊" },
      ],
    },
    {
      title: "Actions",
      items: [
        { label: "Create Project", icon: <FolderPlusIcon className="w-5 h-5" /> },
        { label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Profile", icon: <UserIcon className="w-5 h-5" /> },
        { label: "Logout", icon: <ArrowRightOnRectangleIcon className="w-5 h-5" /> },
      ],
    },
  ];

  const flat = sections.flatMap((s) => s.items);
  const filtered = flat.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);

      if (!open) return;

      if (e.key === "ArrowDown") {
        setActive((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        setActive((i) => (i - 1 + filtered.length) % filtered.length);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered.length]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-4 animate-scaleIn">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />

            <div className="mt-4 max-h-80 overflow-y-auto">
              {sections.map((section, si) => {
                const items = section.items.filter((i) =>
                  i.label.toLowerCase().includes(query.toLowerCase())
                );
                if (items.length === 0) return null;

                return (
                  <div key={si} className="mb-4">
                    <div className="text-xs text-gray-500 px-2 mb-1">
                      {section.title}
                    </div>

                    {items.map((item, i) => {
                      const globalIndex = filtered.indexOf(item);

                      return (
                        <div
                          key={i}
                          className={\`px-3 py-2 rounded flex items-center gap-3 cursor-pointer $\{
                            globalIndex === active
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }\`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
`,
];

const DropdownMenu = () => {
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

export default DropdownMenu;
