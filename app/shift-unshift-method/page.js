import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SHIFT AND UNSHIFT IN REACT STATE
// pages/shift-unshift-basic.js
import { useState } from 'react';

export default function ShiftUnshiftBasic() {
  const [items, setItems] = useState(['🍎 Apple', '🍌 Banana']);

  const handleUnshift = () => {
    const newItem = \`🍇 Grape $\{items.length + 1}\`;
    setItems(prev => {
      const copy = [...prev];
      copy.unshift(newItem);
      return copy;
    });
  };

  const handleShift = () => {
    setItems(prev => {
      const copy = [...prev];
      copy.shift();
      return copy;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Shift & Unshift Demo</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={handleUnshift} className="bg-purple-500 text-white px-4 py-2 rounded">
          Unshift 🍇
        </button>
        <button onClick={handleShift} className="bg-orange-500 text-white px-4 py-2 rounded">
          Shift 🗑️
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
  `ADD TO FRONT AND REMOVE FROM FRONT IN A TASK QUEUE
// pages/task-queue.js
import { useState } from 'react';

export default function TaskQueue() {
  const [queue, setQueue] = useState(['🧹 Clean', '📦 Pack']);

  const addUrgentTask = () => {
    const urgent = \`🔥 Urgent $\{queue.length + 1}\`;
    setQueue(prev => {
      const copy = [...prev];
      copy.unshift(urgent);
      return copy;
    });
  };

  const processNext = () => {
    setQueue(prev => {
      const copy = [...prev];
      copy.shift();
      return copy;
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">🪪 Task Queue</h2>
      <div className="flex gap-2 mb-4">
        <button onClick={addUrgentTask} className="bg-red-500 text-white px-4 py-2 rounded">
          Add Urgent
        </button>
        <button onClick={processNext} className="bg-green-500 text-white px-4 py-2 rounded">
          Process First
        </button>
      </div>
      <ul className="list-decimal pl-5 text-gray-700">
        {queue.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}`,
  `LIVE CHAT QUEUE (NEW MESSAGES ON TOP)
// pages/chat-queue.js
import { useState } from 'react';

export default function ChatQueue() {
  const [messages, setMessages] = useState([
    { user: 'Alice', text: 'Hi there!' },
    { user: 'Bob', text: 'Hello!' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { user: 'You', text: input.trim() };
    setMessages(prev => [newMsg, ...prev]);
    setInput('');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">💬 Chat</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 rounded w-full"
        />
        <button onClick={sendMessage} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded shadow">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}`,
];

const ShiftUnshiftMethod = () => {
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

export default ShiftUnshiftMethod;
