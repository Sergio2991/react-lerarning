import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    "use client";
import { useState, useRef, useEffect } from "react";

export default function DropdownBasic() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Menu
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}`,
  `INTERMIDIATE SMOOTH ANIMATION, ICONS, KEYBOARD-FRIENDLY
"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function DropdownMedium() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Menu
        <ChevronDownIcon
          className={\`w-5 h-5 transition-transform $\{open ? "rotate-180" : ""}\`}
        />
      </button>

      <div
        className={\`absolute mt-2 w-48 bg-white border rounded-lg shadow transition-all duration-200 origin-top-right $\{
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }\`}
      >
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
          Dashboard
        </button>
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
          Billing
        </button>
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
          Support
        </button>
      </div>
    </div>
  );
}`,
  `ADVANCED MULTI-SELECTION MENU, ICONS, SEPARATORS, PREMIUM FEEL
"use client";
import { useState, useRef, useEffect } from "react";
import { UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function DropdownAdvanced() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Account
      </button>

      <div
        className={\`absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg transition-all duration-200 origin-top-right $\{
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }\`}
      >
        <div className="px-4 py-2 text-xs text-gray-500">Account</div>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100">
          <UserIcon className="w-5 h-5 text-gray-600" />
          Profile
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100">
          <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
          Settings
        </button>

        <div className="my-2 border-t" />

        <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 text-red-600">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}`,
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
