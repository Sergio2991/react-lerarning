import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC USAGE OF REPLACE METHOD
  // pages/replace-basic.js
export default function ReplaceBasic() {
  const original = 'Hello, world!';
  const updated = original.replace('world', 'Serge');

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Replace Example</h1>
      <p className="text-gray-700">Original: {original}</p>
      <p className="text-green-600">Updated: {updated}</p>
    </div>
  );
}`,
  `LIVE TEXT REPLACEMENT
// pages/replace-live.js
import { useState } from 'react';

export default function ReplaceLive() {
  const [text, setText] = useState('');
  const replaced = text.replace(/bad/gi, 'good');

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Live Replacer</h2>
      <textarea
        rows={4}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something with 'bad' in it..."
        className="w-full border p-2 rounded mb-4"
      />
      <div className="bg-gray-100 p-3 rounded shadow">
        <strong>Output:</strong>
        <p className="mt-1 text-gray-800">{replaced}</p>
      </div>
    </div>
  );
}`,
  `SANITIZING EMAIL INPUT
// pages/email-sanitize.js
import { useState } from 'react';

export default function EmailSanitize() {
  const [email, setEmail] = useState('');
  const cleaned = email.replace(/\\s+/g, '');

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📧 Email Cleaner</h1>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email with spaces"
        className="w-full border p-2 rounded mb-4"
      />
      <p className="text-gray-700">Cleaned Email: <span className="font-semibold">{cleaned}</span></p>
    </div>
  );
}`,
  `REPLACING ALL OCCURRENCES
const messy = "React is cool. React is fast.";
const clean = messy.replaceAll("React", "Next.js");
console.log(clean); // "Next.js is cool. Next.js is fast."`,
];

const ReplaceMethod = () => {
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

export default ReplaceMethod;
