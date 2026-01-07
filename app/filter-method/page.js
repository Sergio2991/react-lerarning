import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CREATE FILTERED_ARRAY:
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]`,
  `CREATE DYNAMIC FILTER:
const users = [
  { id: 1, name: 'Alice', online: true },
  { id: 2, name: 'Bob', online: false },
  { id: 3, name: 'Charlie', online: true },
];

export default function OnlineUsers() {
  const onlineUsers = users.filter(user => user.online);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Online Users</h2>
      <ul className="space-y-1">
        {onlineUsers.map(user => (
          <li key={user.id} className="text-green-600">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
  `CREATE FILTER WITH INPUT:
import { useState } from 'react';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export default function SearchUsers() {
  const [query, setQuery] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredUsers.map(user => (
          <li key={user.id} className="bg-gray-100 p-2 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
  `CREATE FILTER FETCHED DATA
import { useEffect, useState } from 'react';

export default function FilteredUsers() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded mb-4"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul className="space-y-2">
        {filtered.map(user => (
          <li key={user.id} className="bg-blue-100 p-2 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
  `CREATE A FILTER WITH MULTIPLE CONDITIONS
const filtered = users.filter(user =>
  user.online && user.name.toLowerCase().includes(query.toLowerCase())
);`,
];

const FilterMethod = () => {
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

export default FilterMethod;
