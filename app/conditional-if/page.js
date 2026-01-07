import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CONDITIONAL RENDERING WITH IF STATEMENT

components/Greeting.js

export default function Greeting({ isLoggedIn }) {
  if (!isLoggedIn) {
    return null; // Don't render anything if not logged in
  }

  return (
    <div className="p-4 bg-green-100 text-green-800 rounded shadow">
      Welcome back, Serge!
    </div>
  );
}

pages/index.js

import Greeting from '../components/Greeting';

export default function Home() {
  const isLoggedIn = true; // Try changing this to false

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Greeting isLoggedIn={isLoggedIn} />
    </main>
  );
}
`,
  `CONDITIONAL IF STATEMENT BASED ON TIME
pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Good Evening!');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 18) {
      setMessage('Good day!');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">JavaScript if</h1>
      <p className="mb-2">Display "Good day!" if the hour is less than 18:00:</p>
      <p id="demo" className="text-xl font-medium text-blue-600">{message}</p>
    </div>
  );
}`,
  `COMPLEX CONDITIONAL RENDERING BASED ON MULTIPLE CONDITIONS
components/InteractiveAccessPanel.js
import { useState } from 'react';

export default function InteractiveAccessPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('guest');

  const toggleLogin = () => setIsLoggedIn(prev => !prev);
  const handleRoleChange = (e) => setRole(e.target.value);

  let message = '';
  if (isLoggedIn) {
    if (role === 'admin') {
      message = 'Welcome, Admin Serge! You have full access.';
    } else if (role === 'user') {
      message = 'Welcome back, Serge! You have limited access.';
    } else {
      message = 'Hello, guest! Please contact support for access.';
    }
  } else {
    message = 'You must be logged in to view this page.';
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4 text-center">
      <div className="text-lg font-medium text-gray-800">{message}</div>

      <div className="space-x-2">
        <button
          onClick={toggleLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>

        <select
          value={role}
          onChange={handleRoleChange}
          className="px-3 py-2 border rounded text-gray-700"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>
    </div>
  );
}`,
  `CREATE A RESPONSIVE NAVBAR WITH CONDITIONAL RENDERING
// components/Navbar.js
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative">
      <div className="text-xl font-bold text-blue-600">MySite</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '×' : '☰'}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}`,
  `BASIC BOOLEAN CONDITIONAL RENDERING
export default function Example({ isLoggedIn }) {
  return (
    <div className="p-4">
      {isLoggedIn && (
        <p className="text-green-600 font-semibold">
          Welcome back!
        </p>
      )}
    </div>
  );
}
`,
  `TERNARY OPERATOR FOR TWO CONDITIONS
  export default function Example({ loading }) {
  return (
    <div className="p-4">
      {loading ? (
        <span className="text-gray-500 animate-pulse">Loading…</span>
      ) : (
        <span className="text-blue-600 font-bold">Data Loaded</span>
      )}
    </div>
  );
}
`,
  `export default function Example({ active }) {
  return (
    <button
      className={
        \`px-4 py-2 rounded 
        $\{active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}\`
      }
    >
      {active ? "Active" : "Inactive"}
    </button>
  );
}
`,
  `export default function Example({ items }) {
  return (
    <div className="p-4">
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="p-2 bg-white shadow rounded"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {items.length === 0 && (
        <p className="text-gray-500 italic">No items found</p>
      )}
    </div>
  );
}
`,
  `const states = {
  loading: (
    <p className="text-gray-500 animate-pulse">Loading…</p>
  ),
  error: (
    <p className="text-red-600 font-semibold">Something went wrong</p>
  ),
  success: (
    <p className="text-green-600 font-bold">Success!</p>
  ),
};

export default function Example({ status }) {
  return (
    <div className="p-4">
      {states[status] ?? (
        <p className="text-gray-400">Unknown state</p>
      )}
    </div>
  );
}
`,
];

const ConditionalIf = () => {
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

export default ConditionalIf;
