import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `FIND A USER BY NAME
// pages/find-basic.js
export default function FindBasic() {
  const users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
  ];

  const found = users.find(user => user.name === 'Bob');

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Find User</h1>
      {found ? (
        <p className="text-gray-700">
          Found: <span className="font-semibold">{found.name}</span>, age {found.age}
        </p>
      ) : (
        <p className="text-red-600">User not found</p>
      )}
    </div>
  );
}`,
  `INTERACTIVE SEARCH WITH FIND
// pages/find-search.js
import { useState } from 'react';

export default function FindSearch() {
  const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'moderator' },
  ];

  const [query, setQuery] = useState('');
  const result = users.find(u => u.name.toLowerCase() === query.toLowerCase());

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search User</h2>
      <input
        type="text"
        placeholder="Enter name..."
        className="border p-2 rounded mb-4 w-full"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {result ? (
        <p className="text-green-600">✅ {result.name} is a {result.role}</p>
      ) : (
        query && <p className="text-red-600">❌ No match found</p>
      )}
    </div>
  );
}`,
  `FIND A PRODUCT BY ID
// pages/find-product.js
export default function FindProduct() {
  const products = [
    { id: 101, name: 'T-shirt', price: 20 },
    { id: 102, name: 'Jeans', price: 40 },
    { id: 103, name: 'Hat', price: 15 },
  ];

  const productId = 102;
  const product = products.find(p => p.id === productId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Lookup</h1>
      {product ? (
        <div className="bg-white shadow p-4 rounded border border-gray-200">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">\${product.price}</p>
        </div>
      ) : (
        <p className="text-red-600">Product not found</p>
      )}
    </div>
  );
}`,
];

const FindMethod = () => {
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

export default FindMethod;
