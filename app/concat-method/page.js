import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC CONCATENATION OF TWO ARRAYS
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b); // [1, 2, 3, 4]`,
  `MERGING MULTIPLE ARRAYS
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'kiwi'];
const allFruits = fruits.concat(moreFruits);

console.log(allFruits); // ['apple', 'banana', 'orange', 'kiwi']`,
  `
const base = [1, 2];
const extended = base.concat(3, [4, 5]);
console.log(extended); // [1, 2, 3, 4, 5]`,
  `COMBINING MESSAGE LISTS
const newMessages = ['Welcome!', 'You have 3 new tasks'];
const oldMessages = ['Meeting at 10am', 'Update your profile'];

const allMessages = newMessages.concat(oldMessages);

return (
  <ul className="space-y-2">
    {allMessages.map((msg, i) => (
      <li key={i} className="bg-blue-100 p-2 rounded">{msg}</li>
    ))}
  </ul>
);`,
  `CONCATENATION VS SPREAD OPERATOR
const a = [1, 2];
const b = [3, 4];

// Both do the same thing
const result1 = a.concat(b);
const result2 = [...a, ...b];`,
];

const ConcatMethod = () => {
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

export default ConcatMethod;
