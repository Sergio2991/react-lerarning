import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC DATA GRID PAGINATION ONLY
    
"use client";
import { useState } from "react";

export default function DataGridBasic() {
  const rows = [
    { id: 1, name: "Alice", role: "Designer", age: 29 },
    { id: 2, name: "Bob", role: "Developer", age: 34 },
    { id: 3, name: "Carla", role: "Manager", age: 41 },
    { id: 4, name: "David", role: "Developer", age: 25 },
    { id: 5, name: "Eva", role: "Designer", age: 31 },
    { id: 6, name: "Frank", role: "Manager", age: 45 },
  ];

  const [page, setPage] = useState(1);
  const perPage = 3;

  const paginated = rows.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-4">
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Age</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((row) => (
            <tr key={row.id} className="border-t">
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

        <span className="text-sm text-gray-600">
          Page {page} of {Math.ceil(rows.length / perPage)}
        </span>

        <button
          disabled={page * perPage >= rows.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
  `INTERMIDIATE DATA GRID  WITH SORTING, SEARCH, PAGINATION
"use client";
import { useState, useMemo } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function DataGridMedium() {
  const rows = [
    { id: 1, name: "Alice", role: "Designer", age: 29 },
    { id: 2, name: "Bob", role: "Developer", age: 34 },
    { id: 3, name: "Carla", role: "Manager", age: 41 },
    { id: 4, name: "David", role: "Developer", age: 25 },
    { id: 5, name: "Eva", role: "Designer", age: 31 },
    { id: 6, name: "Frank", role: "Manager", age: 45 },
    { id: 7, name: "Gina", role: "Developer", age: 28 },
  ];

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, direction: "asc" });
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = useMemo(() => {
    return rows.filter((row) =>
      Object.values(row).some((v) =>
        String(v).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const sorted = useMemo(() => {
    if (!sort.key) return filtered;

    return [...filtered].sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
      if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sort]);

  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  const sortBy = (key) => {
    const direction =
      sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    setSort({ key, direction });
  };

  return (
    <div className="space-y-4">
      <input
        placeholder="Search..."
        className="px-3 py-2 border rounded-lg w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

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
          {paginated.map((row) => (
            <tr key={row.id} className="border-t hover:bg-gray-50">
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

        <span className="text-sm text-gray-600">
          Page {page} of {Math.ceil(sorted.length / perPage)}
        </span>

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
}
`,
  `ADVANCED DATA GRID WITH PAGINATION, SORTABLE, FILTERABLE, PAGINATED
    "use client";
import { useState, useMemo } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function DataGrid() {
  const rows = [
    { id: 1, name: "Alice", role: "Designer", age: 29 },
    { id: 2, name: "Bob", role: "Developer", age: 34 },
    { id: 3, name: "Carla", role: "Manager", age: 41 },
    { id: 4, name: "David", role: "Developer", age: 25 },
    { id: 5, name: "Eva", role: "Designer", age: 31 },
    { id: 6, name: "Frank", role: "Manager", age: 45 },
    { id: 7, name: "Gina", role: "Developer", age: 28 },
    { id: 8, name: "Henry", role: "Designer", age: 33 },
  ];

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, direction: "asc" });
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = useMemo(() => {
    return rows.filter((row) =>
      Object.values(row).some((v) =>
        String(v).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const sorted = useMemo(() => {
    if (!sort.key) return filtered;

    return [...filtered].sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
      if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sort]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  const sortBy = (key) => {
    const direction =
      sort.key === key && sort.direction === "asc" ? "desc" : "asc";
    setSort({ key, direction });
  };

  return (
    <div className="space-y-4">
      <input
        placeholder="Search..."
        className="px-3 py-2 border rounded-lg w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

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
          {paginated.map((row) => (
            <tr key={row.id} className="border-t hover:bg-gray-50">
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

        <span className="text-sm text-gray-600">
          Page {page} of {Math.ceil(sorted.length / perPage)}
        </span>

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

const DataGrid = () => {
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

export default DataGrid;
