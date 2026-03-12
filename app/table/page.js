import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SORTABLE COLUMNS
    "use client";
import { useState } from "react";

export default function TableBasic() {
  const initial = [
    { name: "Alice", role: "Designer", age: 29 },
    { name: "Bob", role: "Developer", age: 34 },
    { name: "Carla", role: "Manager", age: 41 },
  ];

  const [data, setData] = useState(initial);
  const [sort, setSort] = useState({ key: null, direction: "asc" });

  const sortBy = (key) => {
    const direction = sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSort({ key, direction });
    setData(sorted);
  };

  return (
    <table className="w-full border rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th onClick={() => sortBy("name")} className="px-4 py-2 cursor-pointer">Name</th>
          <th onClick={() => sortBy("role")} className="px-4 py-2 cursor-pointer">Role</th>
          <th onClick={() => sortBy("age")} className="px-4 py-2 cursor-pointer">Age</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.role}</td>
            <td className="px-4 py-2">{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`,
  `INTERMIDIATE SORTING, SEARCH FILTER, HIGHLIGHTED HEADER
"use client";
import { useState } from "react";

export default function TableMedium() {
  const initial = [
    { name: "Alice", role: "Designer", age: 29 },
    { name: "Bob", role: "Developer", age: 34 },
    { name: "Carla", role: "Manager", age: 41 },
    { name: "David", role: "Developer", age: 25 },
  ];

  const [data, setData] = useState(initial);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, direction: "asc" });

  const filtered = data.filter((row) =>
    Object.values(row).some((v) =>
      String(v).toLowerCase().includes(query.toLowerCase())
    )
  );

  const sortBy = (key) => {
    const direction = sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    const sorted = [...filtered].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSort({ key, direction });
    setData(sorted);
  };

  return (
    <div className="space-y-3">
      <input
        placeholder="Search..."
        className="px-3 py-2 border rounded-lg w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {["name", "role", "age"].map((col) => (
              <th
                key={col}
                onClick={() => sortBy(col)}
                className={\`px-4 py-2 cursor-pointer $\
                  sort.key === col ? "bg-gray-200" : ""
                }\`}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filtered.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.role}</td>
              <td className="px-4 py-2">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
  `ADVANCED TABLE WITH SORTING, FILTERING, COLUMN FILTERS, PAGINATION
  "use client";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function TableAdvanced() {
  const initial = [
    { name: "Alice", role: "Designer", age: 29 },
    { name: "Bob", role: "Developer", age: 34 },
    { name: "Carla", role: "Manager", age: 41 },
    { name: "David", role: "Developer", age: 25 },
    { name: "Eva", role: "Designer", age: 31 },
    { name: "Frank", role: "Manager", age: 45 },
  ];

  const [sort, setSort] = useState({ key: null, direction: "asc" });
  const [roleFilter, setRoleFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = initial.filter((row) =>
    roleFilter ? row.role === roleFilter : true
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sort.key) return 0;
    if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
    if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  const sortBy = (key) => {
    const direction = sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    setSort({ key, direction });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <select
          className="border px-3 py-2 rounded-lg"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All roles</option>
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {["name", "role", "age"].map((col) => (
              <th
                key={col}
                onClick={() => sortBy(col)}
                className="px-4 py-2 cursor-pointer select-none"
              >
                <div className="flex items-center gap-1">
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                  {sort.key === col &&
                    (sort.direction === "asc" ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginated.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.role}</td>
              <td className="px-4 py-2">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">Page {page}</span>

        <button
          disabled={page * perPage >= sorted.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
];

const Table = () => {
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

export default Table;
