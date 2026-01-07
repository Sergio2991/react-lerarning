import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC USAGE OF PUSH AND POP IN REACT STATE 
// pages/push-pop-basic.js
import { useState } from 'react';

export default function PushPopBasic() {
  const [items, setItems] = useState(['🍎 Apple', '🍌 Banana']);

  const handlePush = () => {
    const newItem = \`🍒 Cherry \${items.length + 1}\`;
    setItems(prev => {
      const copy = [...prev];
      copy.push(newItem);
      return copy;
    });
  };

  const handlePop = () => {
    setItems(prev => {
      const copy = [...prev];
      copy.pop();
      return copy;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Push & Pop Demo</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={handlePush} className="bg-green-500 text-white px-4 py-2 rounded">
          Push 🍒
        </button>
        <button onClick={handlePop} className="bg-red-500 text-white px-4 py-2 rounded">
          Pop 🗑️
        </button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `PUSH AND POP IN A TODO LIST APPLICATION
// pages/todo-push-pop.js
import { useState } from 'react';

export default function TodoPushPop() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks(prev => {
      const copy = [...prev];
      copy.push(input.trim());
      return copy;
    });
    setInput('');
  };

  const undoTask = () => {
    setTasks(prev => {
      const copy = [...prev];
      copy.pop();
      return copy;
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">📝 Task List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New task..."
          className="border p-2 rounded flex-1"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
        <button onClick={undoTask} className="bg-yellow-500 text-white px-4 rounded">
          Undo
        </button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `// pages/avatars.js
import { useState } from 'react';

export default function Avatars() {
  const [avatars, setAvatars] = useState(['🧑', '👩', '🧔']);

  const addAvatar = () => {
    const pool = ['👨', '👩‍🦰', '🧑‍🦱', '🧓', '👶'];
    const random = pool[Math.floor(Math.random() * pool.length)];
    setAvatars(prev => [...prev, random]);
  };

  const removeAvatar = () => {
    setAvatars(prev => {
      const copy = [...prev];
      copy.pop();
      return copy;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👥 Avatar Stack</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={addAvatar} className="bg-indigo-500 text-white px-4 py-2 rounded">
          Add Avatar
        </button>
        <button onClick={removeAvatar} className="bg-pink-500 text-white px-4 py-2 rounded">
          Remove Last
        </button>
      </div>
      <div className="flex flex-wrap gap-2 text-3xl">
        {avatars.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </div>
    </div>
  );
}`,
];

const PushPopMethod = () => {
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

export default PushPopMethod;
