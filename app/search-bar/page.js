import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SEARCH BAR WITH AUTOCOMPLETE (LOCAL DATA)
    "use client";
import { useState } from "react";

export default function SearchAutocomplete() {
  const suggestions = [
    "Dashboard",
    "Settings",
    "Profile",
    "Users",
    "Analytics",
    "Reports",
    "Notifications",
  ];

  const [query, setQuery] = useState("");
  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}`,
  `AUTOCOMPLETE WITH KEYBOARD NAVIGATION 
"use client";
import { useState } from "react";

export default function SearchAutocomplete() {
  const suggestions = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Peach"];

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      setActive((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      setActive((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      setQuery(filtered[active]);
      setOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />

      {open && query && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={item}
                className={\`px-4 py-2 cursor-pointer $\{
                  index === active ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                }\`}
                onMouseEnter={() => setActive(index)}
                onClick={() => {
                  setQuery(item);
                  setOpen(false);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}`,
  `DEBOUNCED AUTOCOMPLETE (API-READY)
"use client";
import { useState, useEffect } from "react";

export default function SearchAutocomplete() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 1) {
        // Simulate API call
        fetch(\`/api/search?q=$\{query}\`)
          .then((res) => res.json())
          .then((data) => setResults(data));
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
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
