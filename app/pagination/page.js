import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE PAGINATION (NUMBER ONLY)
"use client";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={\`
            px-4 py-2 rounded-lg border
            $\{page === num ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
          \`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}`,
  `PAGINATION WITH PREVIOUS / NEXT BUTTONS
"use client";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);

  return (
    <div className="flex items-center gap-2 mt-6">

      <button
        onClick={prev}
        disabled={page === 1}
        className="px-4 py-2 border rounded-lg bg-white text-gray-700 disabled:opacity-40"
      >
        Prev
      </button>

      <span className="px-4 py-2 bg-gray-100 rounded-lg">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={next}
        disabled={page === totalPages}
        className="px-4 py-2 border rounded-lg bg-white text-gray-700 disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}`,
  `ADVANCED PAGInATION WITH ELLIPSIS
"use client";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = 20;

  const pagesToShow = () => {
    const pages = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (page >= totalPages - 2)
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];

    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  return (
    <div className="flex items-center gap-2 mt-6">

      {/* Prev */}
      <button
        onClick={() => page > 1 && setPage(page - 1)}
        className="px-3 py-2 border rounded-lg bg-white text-gray-700 disabled:opacity-40"
        disabled={page === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pagesToShow().map((num, i) =>
        num === "..." ? (
          <span key={i} className="px-3 py-2 text-gray-500">…</span>
        ) : (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={\`
              px-3 py-2 rounded-lg border
              $\{page === num ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
            \`}
          >
            {num}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => page < totalPages && setPage(page + 1)}
        className="px-3 py-2 border rounded-lg bg-white text-gray-700 disabled:opacity-40"
        disabled={page === totalPages}
      >
        Next
      </button>

    </div>
  );
}
`,
];

const Pagination = () => {
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

export default Pagination;
