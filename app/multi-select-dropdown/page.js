import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC MULTI SELECT DROPDOWN (SIMPLE & CLEAN)
    "use client";
import { useState } from "react";

export default function MultiSelect() {
  const options = ["React", "Next.js", "Tailwind", "Node.js", "TypeScript"];
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <div
        className="border rounded-lg px-4 py-3 bg-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected.length > 0 ? (
          <span>{selected.join(", ")}</span>
        ) : (
          <span className="text-gray-400">Select options</span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => toggleOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
  `MULTI SELECT WITH CHECKBOXES (PROFESSIONAL)
"use client";
import { useState } from "react";

export default function MultiSelectCheckbox() {
  const options = ["Design", "Development", "Marketing", "Finance", "HR"];
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <div
        className="border rounded-lg px-4 py-3 bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className={selected.length === 0 ? "text-gray-400" : ""}>
          {selected.length > 0 ? selected.join(", ") : "Select options"}
        </span>
        <span>▼</span>
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
              onClick={() => toggleOption(option)}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                readOnly
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
  `TAG-STYLE MULTY-SELECT (PREMIUM UI - like NOTION/FIGMA)
"use client";
import { useState } from "react";

export default function MultiSelectCheckbox() {
  const options = ["Design", "Development", "Marketing", "Finance", "HR"];
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <div
        className="border rounded-lg px-4 py-3 bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className={selected.length === 0 ? "text-gray-400" : ""}>
          {selected.length > 0 ? selected.join(", ") : "Select options"}
        </span>
        <span>▼</span>
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
              onClick={() => toggleOption(option)}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                readOnly
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
];

const SearchBar = () => {
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

export default SearchBar;
