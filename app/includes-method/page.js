import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `ARRAY CONTAINS VALUE USING INCLUDES METHOD
// pages/includes-basic.js
export default function IncludesBasic() {
  const colors = ['red', 'green', 'blue'];
  const hasGreen = colors.includes('green');

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Includes Check</h1>
      <p className="text-gray-700">
        Is <span className="font-semibold">green</span> in the list?{' '}
        <span className={hasGreen ? 'text-green-600' : 'text-red-600'}>
          {hasGreen ? 'Yes ✅' : 'No ❌'}
        </span>
      </p>
    </div>
  );
}`,
  `SEARCH AND FILTER USING INCLUDES METHOD
// pages/search-filter.js
import { useState } from 'react';

export default function SearchFilter() {
  const items = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango'];
  const [query, setQuery] = useState('');

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Fruit Search</h2>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded mb-4 w-full"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul className="list-disc pl-5 text-gray-700">
        {filtered.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `ROLE-BASED ACCESS CONTROL USING INCLUDES METHOD
// pages/role-check.js
export default function RoleCheck() {
  const currentUser = { name: 'Serge', roles: ['user', 'editor'] };
  const canEdit = currentUser.roles.includes('editor');

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Access Panel</h1>
      {canEdit ? (
        <p className="text-green-600">✅ You have editing access.</p>
      ) : (
        <p className="text-red-600">❌ You do not have editing access.</p>
      )}
    </div>
  );
}`,
  `INCLUDES METHOD WITH STRINGS
  const sentence = "React is awesome!";
console.log(sentence.includes("awesome")); // true`,
];

const IncludesMethod = () => {
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

export default IncludesMethod;
