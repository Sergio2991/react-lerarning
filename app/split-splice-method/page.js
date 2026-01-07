import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC USAGE OF SPLIT METHOD
  // pages/split-basic.js
export default function SplitBasic() {
  const sentence = 'React Next Tailwind JavaScript';
  const words = sentence.split(' ');

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Split Words</h1>
      <p className="text-gray-700 mb-2">Original: {sentence}</p>
      <ul className="list-disc pl-5 text-gray-700">
        {words.map((word, i) => (
          <li key={i}>{word}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `TAG INPUT WITH SPLIT METHOD
// pages/tag-input.js
import { useState } from 'react';

export default function TagInput() {
  const [input, setInput] = useState('');
  const tags = input.split(',').map(tag => tag.trim()).filter(Boolean);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🧷 Tag Parser</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter tags, separated by commas"
        className="border p-2 rounded w-full mb-4"
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}`,
  `// pages/csv-parser.js
export default function CsvParser() {
  const csv = 'Name,Role,Age\nAlice,Admin,30\nBob,User,25\nCharlie,Moderator,28';
  const rows = csv.split('\n');
  const headers = rows[0].split(',');
  const data = rows.slice(1).map(row => row.split(','));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📄 CSV Table</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="border px-4 py-2 bg-gray-100 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
];

const SliceSpliceMethod = () => {
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

export default SliceSpliceMethod;
