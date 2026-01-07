import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC USAGE OF SLICE METHOD
    // pages/slice-basic.js
export default function SliceBasic() {
  const fruits = ['🍎 Apple', '🍌 Banana', '🍒 Cherry', '🍇 Grape', '🥝 Kiwi'];
  const topThree = fruits.slice(0, 3);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Top 3 Fruits</h1>
      <ul className="list-disc pl-5 text-gray-700">
        {topThree.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `PAGINATION WITH SLICE
  // pages/slice-pagination.js
import { useState } from 'react';

export default function SlicePagination() {
  const items = Array.from({ length: 20 }, (_, i) => \`Item $\{i + 1}\`);
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const start = page * pageSize;
  const paginated = items.slice(start, start + pageSize);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">📄 Paginated List</h2>
      <ul className="list-decimal pl-5 text-gray-700 mb-4">
        {paginated.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 0))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(p => (start + pageSize < items.length ? p + 1 : p))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
  `// pages/slice-preview.js
import { useState } from 'react';

export default function SlicePreview() {
  const [text, setText] = useState('');
  const preview = text.slice(0, 100);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📝 Text Preview</h1>
      <textarea
        rows={4}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a long message..."
        className="w-full border p-2 rounded mb-4"
      />
      <div className="bg-gray-100 p-3 rounded shadow">
        <strong>Preview (100 chars):</strong>
        <p className="mt-1 text-gray-800">{preview}</p>
      </div>
    </div>
  );
}`,
  `PAGINATED FILTERING LIST
// pages/paginated-filter.js
import { useState } from 'react';

export default function PaginatedFilter() {
  const allItems = [
    'React', 'Next.js', 'Tailwind', 'JavaScript', 'TypeScript',
    'Node.js', 'Express', 'MongoDB', 'Redux', 'GraphQL',
  ];

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const filtered = allItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🔍 Filter + Paginate</h2>
      <input
        type="text"
        placeholder="Search tech..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setPage(0); // reset to first page on new search
        }}
        className="w-full border p-2 rounded mb-4"
      />
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        {paginated.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 0))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(p => (page + 1) * pageSize < filtered.length ? p + 1 : p)}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}`,
  `TOGGLE READ MORE WITH SLICE METHOD
// pages/read-more.js
import { useState } from 'react';

export default function ReadMore() {
  const longText = \`Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes. It simplifies routing, improves performance, and supports full-stack development with ease. Tailwind CSS complements it perfectly by offering utility-first styling.\`;

  const [expanded, setExpanded] = useState(false);
  const preview = longText.slice(0, 120);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📰 Article Preview</h1>
      <p className="text-gray-700">
        {expanded ? longText : \`$\{preview}...\`}
      </p>
      <button
        onClick={() => setExpanded(e => !e)}
        className="mt-2 text-blue-600 hover:underline"
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}`,
  `DYNAMIC CAROUSEL (SLICE, MAP, BUTTONS)
// pages/carousel.js
import { useState } from 'react';

export default function Carousel() {
  const images = ['🍎', '🍌', '🍇', '🍒', '🥝', '🍍', '🍉'];
  const [start, setStart] = useState(0);
  const visible = images.slice(start, start + 3);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🍓 Emoji Carousel</h2>
      <div className="flex gap-4 text-4xl justify-center mb-4">
        {visible.map((emoji, i) => (
          <span key={i}>{emoji}</span>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setStart(s => Math.max(s - 1, 0))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          ◀
        </button>
        <button
          onClick={() => setStart(s => (s + 3 < images.length ? s + 1 : s))}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          ▶
        </button>
      </div>
    </div>
  );
}`,
];

const SliceMethod = () => {
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

export default SliceMethod;
