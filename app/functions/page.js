import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CREATE A SIMPLE FUNCTION
component Greeting.js
  export default function Greeting() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">Hello, Serge!</h1>
      <p className="text-gray-600">Welcome to your first React + Next.js + Tailwind component.</p>
    </div>
  );
}
pages/index.js
import Greeting from '../components/Greeting';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Greeting />
    </main>
  );
}`,
  `CREATE A FUNCTION WITH STATE AND EVENT HANDLING
  import { useState } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState('Hello, Serge!');

  const handleClick = () => {
    setGreeting('You clicked the button! 🎉');
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">{greeting}</h1>
      <p className="text-gray-600 mb-4">Click the button to change the message.</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}`,
  `FUNCTION WITH PROPS

component Greeting.js

import { useState } from 'react';

export default function Greeting({ name }) {
  const [greeting, setGreeting] = useState(\`Hello, $\{name}!\`);

  const handleClick = () => {
    setGreeting(\`Nice to see you, $\{name}! 🎉\`);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">{greeting}</h1>
      <p className="text-gray-600 mb-4">Click the button to change the message.</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}
pages/index.js

import Greeting from '../components/Greeting';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Greeting name="Serge" />
    </main>
  );
}`,
  `import { useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setGreeting(newName ? \`Hello, $\{newName}!\` : '');
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600">{greeting || 'Type your name below'}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}`,
  `COMPLETE FUNCTION WITH RESET BUTTON AND ANIMATION

import { useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setGreeting(newName ? \`Hello, $\{newName}!\` : '');
  };

  const handleReset = () => {
    setName('');
    setGreeting('');
  };

  return (
    <div className="text-center mt-10">
      <h1
        className={\`text-3xl font-bold text-blue-600 transition-opacity duration-500 $\{
          greeting ? 'opacity-100' : 'opacity-50'
        }\`}
      >
        {greeting || 'Type your name below'}
      </h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mt-4 space-x-2">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
  `COMPLETE FUNCTION WITH LOCAL STORAGE

import { useState, useEffect } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Load name from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
      setGreeting(\`Hello, $\{savedName}!\`);
    }
  }, []);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem('name', name);
    }
  }, [name]);

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setGreeting(newName ? \`Hello, $\{newName}!\` : '');
  };

  const handleReset = () => {
    setName('');
    setGreeting('');
    localStorage.removeItem('name');
  };

  return (
    <div className="text-center mt-10">
      <h1
        className={\`text-3xl font-bold text-blue-600 transition-opacity duration-500 $\{
          greeting ? 'opacity-100' : 'opacity-50'
        }\`}
      >
        {greeting || 'Type your name below'}
      </h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mt-4 space-x-2">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
  `COMPLETE FUNCTION WITH RETURNING USER MESSAGE AND LOCAL STORAGE
import { useState, useEffect } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isReturningUser, setIsReturningUser] = useState(false);

  // Load name from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
      setGreeting(\`Welcome back, $\{savedName}!\`);
      setIsReturningUser(true);
    }
  }, []);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem('name', name);
    }
  }, [name]);

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setGreeting(newName ? \`Hello, $\{newName}!\` : '');
    setIsReturningUser(false);
  };

  const handleReset = () => {
    setName('');
    setGreeting('');
    setIsReturningUser(false);
    localStorage.removeItem('name');
  };

  return (
    <div className="text-center mt-10">
      <h1
        className={\`text-3xl font-bold transition-opacity duration-500 $\{
          greeting ? 'text-blue-600 opacity-100' : 'opacity-50'
        }\`}
      >
        {greeting || 'Type your name below'}
      </h1>

      {isReturningUser && (
        <p className="text-green-600 mt-2">Nice to see you again!</p>
      )}

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mt-4 space-x-2">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`,
];

const Functions = () => {
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

export default Functions;
