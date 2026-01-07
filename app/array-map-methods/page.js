import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

export default function ShowMultipleExamples() {
  const examples = [
    `NUMBERS
export default function NumbersColumn() {
  const numbers = [1, 2, 3, 4, 5];

    return (
      <div className="p-4">
        {numbers.map((num) => (
          <div key={num} className="text-lg">
            {num}
          </div>
        
        ))}
    </div>
  );
}`,
    ` STRINGS
export default function ColumnFruits() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}`,
    `"use client";

export default function Home() {
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);

    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col gap-4 p-6 bg-white rounded shadow">
          {doubled.map((num, index) => (
            <div
              key={index}
        
            className="px-4 py-2 text-center text-lg font-semibold text-blue-600 border border-blue-300 rounded"
          >
            {num}
          </div>
        ))}
      </div>
    </main>
  );
}
`,

    `TO UPPERCASE
"use client";

export default function Example1() {
  const mapped = ["apple", "banana", "cherry"].map((w) => w.toUpperCase());

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-blue-600">
          Example 1: toUpperCase()
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

    `,
    `TO LOWERCASE WITH FIRST LETTER CAPITALIZED
"use client";

export default function Example2() {
  const original = ["HELLO", "WORLD", "JAVASCRIPT"];
  // Lowercase everything, then capitalize the first letter
  const mapped = original.map((w) => {
    const lower = w.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-green-600">
          Example 2: Capitalize (First Letter Uppercase)
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-green-100 text-green-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `ADD PREFIX BEFORE STRING
"use client";

export default function Example3() {
  const mapped = ["Alice", "Bob", "Charlie"].map((name) => "Mr. " + name);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-purple-600">
          Example 3: Prefix (Add "Mr.")
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `ADD SUFFIX AFTER STRING
"use client";

export default function Example4() {
  const mapped = ["dog", "cat", "bird"].map((animal) => animal + "s");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-pink-600">
          Example 4: Suffix (Add "s")
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-pink-100 text-pink-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `LENGTH OF STRINGS
"use client";

export default function Example5() {
  const mapped = ["sun", "moon", "stars"].map((w) => w.length);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-indigo-600">
          Example 5: String Lengths
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAP FIRST LETTER OF STRINGS
"use client";

export default function Example6() {
  const mapped = ["table", "chair", "lamp"].map((w) => w[0]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-indigo-600">
          Example 6: First Letter
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAP LAST LETTER OF STRINGS
"use client";

export default function Example7() {
  const mapped = ["house", "car", "tree"].map((w) => w[w.length - 1]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-red-600">
          Example 7: Last Letter
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-red-100 text-red-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAP REVERSED STRINGS
    "use client";

export default function Example8() {
  const mapped = ["abc", "def", "ghi"].map((w) =>
    w.split("").reverse().join("")
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-teal-600">
          Example 8: Reversed Strings
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-teal-100 text-teal-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAP REPEATED STRINGS
    "use client";

export default function Example9() {
  const mapped = ["hi", "bye", "yo"].map((w) => w.repeat(2));

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-orange-600">
          Example 9: Repeated Strings
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-orange-100 text-orange-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `TEMPLATE STRINGS
"use client";

export default function Example10() {
  const mapped = ["apple", "banana", "cherry"].map((fruit) => \`I like \${fruit}\`);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-gray-700">
          Example 10: Template Strings
        </h1>

        <div className="flex flex-col gap-2">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `DOUBLE EACH NUMBER
"use client";

export default function Example1() {
  const mapped = [1, 2, 3, 4].map(n => n * 2);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-blue-600">
          Example 1: Double Each Number
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `SQUARE EACH NUMBER
"use client";

export default function Example2() {
  const mapped = [1, 2, 3, 4].map(n => n ** 2);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-green-600">
          Example 2: Square Each Number
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded">
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `CONVERT TO STRING
"use client";

export default function Example3() {
  const mapped = [1, 2, 3, 4].map(n => \`Number: $\{n}\`);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-purple-600">
          Example 3: Convert to String
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded">
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `ADD 10 TO EACH NUMBER
"use client";

export default function Example4() {
  const mapped = [5, 10, 15].map(n => n + 10);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-red-600">
          Example 4: Add 10
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div key={i} className="px-3 py-1 bg-red-100 text-red-800 rounded">
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `CHECK IF EVEN
"use client";

export default function Example5() {
  const mapped = [1, 2, 3, 4].map(n => (n % 2 === 0 ? "true" : "false"));

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-indigo-600">
          Example 5: Is Even?
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MULTIPLY BY INDEX
"use client";

export default function Example6() {
  const mapped = [10, 20, 30].map((n, i) => n * i);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-teal-600">
          Example 6: Multiply by Index
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-teal-100 text-teal-800 rounded"
            >
              {val} //0(10 * index 0), 1(20 * index 1), 2(60 * index 2)
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `CONVERT TO ABSOLUTE VALUES
"use client";

export default function Example7() {
  const mapped = [-1, -5, 3, -10].map(n => Math.abs(n));

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-pink-600">
          Example 7: Absolute Values
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-pink-100 text-pink-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `CALCULATE RECIPROCAL
"use client";

export default function Example8() {
  const mapped = [1, 2, 4].map(n => 1 / n);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-yellow-600">
          Example 8: Reciprocal (1/n)
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `"use client";

export default function Example9() {
  const mapped = [100, 200, 300].map(n => \`$$\{n}\`);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-orange-600">
          Example 9: Format with Currency
        </h1>
        <div className="flex gap-2 flex-wrap">
          {mapped.map((val, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-orange-100 text-orange-800 rounded"
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
  ];

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
}
