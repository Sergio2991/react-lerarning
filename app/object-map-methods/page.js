import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const ShowMultipleExamples = () => {
  const examples = [
    `
"use client";

export default function Example1() {
  const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-blue-600">
          Example 1: People
        </h1>
        <div className="flex flex-col gap-2">
          {people.map((person) => (
            <div key={person.id} className="px-3 py-2 bg-blue-100 text-blue-800 rounded">
              {person.name} — Age {person.age}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `CONDITIONAL RENDERING
"use client";

export default function Example2() {
  const tasks = [
    { id: 1, task: "Clean room", done: true },
    { id: 2, task: "Do homework", done: false },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-green-600">
          Example 2: Conditional Rendering
        </h1>
        <div className="flex flex-col gap-2">
          {tasks.map((t) => (
            <div key={t.id} className="px-3 py-2 bg-green-100 text-green-800 rounded">
              {t.task} — {t.done ? "✅ Done" : "⏳ Pending"}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `NESTED OBJECTS
"use client";

export default function Example3() {
  const students = [
    { id: 1, name: "Emma", grades: { math: "A", science: "B" } },
    { id: 2, name: "Liam", grades: { math: "C", science: "A" } },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-purple-600">
          Example 3: Nested Objects
        </h1>
        <div className="flex flex-col gap-2">
          {students.map((s) => (
            <div key={s.id} className="px-3 py-2 bg-purple-100 text-purple-800 rounded">
              {s.name} — Math: {s.grades.math}, Science: {s.grades.science}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `ARRAY INSIDE OBJECT
"use client";

export default function Example4() {
  const orders = [
    { id: 1, items: ["Laptop", "Mouse"] },
    { id: 2, items: ["Phone", "Charger", "Case"] },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-red-600">
          Example 4: Array inside Object
        </h1>
        <div className="flex flex-col gap-2">
          {orders.map((o) => (
            <div key={o.id} className="px-3 py-2 bg-red-100 text-red-800 rounded">
              Order {o.id}: {o.items.join(", ")}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `COMPUTED VALUES (Total Price, Multiplication)
"use client";

export default function Example5() {
  const products = [
    { id: 1, name: "Shoes", price: 50, quantity: 2 },
    { id: 2, name: "Hat", price: 20, quantity: 3 },
    { id: 3, name: "Jacket", price: 100, quantity: 1 },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-orange-600">
          Example 5: Computed Values
        </h1>
        <div className="flex flex-col gap-2">
          {products.map((p) => (
            <div key={p.id} className="px-3 py-2 bg-orange-100 text-orange-800 rounded">
              {p.name} — Total: \${p.price * p.quantity}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAPPING WITH INDEX
"use client";

export default function Example6() {
  const scores = [
    { player: "Alice", points: 10 },
    { player: "Bob", points: 15 },
    { player: "Charlie", points: 20 },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-teal-600">
          Example 6: Mapping with Index
        </h1>
        <div className="flex flex-col gap-2">
          {scores.map((s, i) => (
            <div key={i} className="px-3 py-2 bg-teal-100 text-teal-800 rounded">
              Rank {i + 1}: {s.player} — {s.points} pts
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `FILTERING + MAPPING
"use client";

export default function Example7() {
  const employees = [
    { id: 1, name: "Sophia", role: "Manager" },
    { id: 2, name: "James", role: "Intern" },
    { id: 3, name: "Mia", role: "Developer" },
  ];

  const filtered = employees.filter((e) => e.role !== "Intern");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-pink-600">
          Example 7: Filtering + Mapping
        </h1>
        <div className="flex flex-col gap-2">
          {filtered.map((e) => (
            <div key={e.id} className="px-3 py-2 bg-pink-100 text-pink-800 rounded">
              {e.name} — {e.role}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `MAPPING WITH JSX COMPONENTS
"use client";

function Card({ title, subtitle }) {
  return (
    <div className="p-3 bg-gray-100 rounded shadow">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

export default function Example8() {
  const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Dune", author: "Frank Herbert" },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow space-y-2">
        <h1 className="text-xl font-bold mb-4 text-indigo-600">
          Example 8: Mapping with Components
        </h1>
        {books.map((b) => (
          <Card key={b.id} title={b.title} subtitle={b.author} />
        ))}
      </div>
    </main>
  );
}
`,
    `GROUPED DATA(REDUCE + MAP)
"use client";

export default function Example9() {
  const sales = [
    { region: "North", amount: 100 },
    { region: "South", amount: 200 },
    { region: "North", amount: 50 },
  ];

  const grouped = sales.reduce((acc, s) => {
    acc[s.region] = (acc[s.region] || 0) + s.amount;
    return acc;
  }, {});

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4 text-yellow-600">
          Example 9: Grouped Data
        </h1>
        <div className="flex flex-col gap-2">
          {Object.entries(grouped).map(([region, total]) => (
            <div key={region} className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded">
              {region}: \${total}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
`,
    `DEEPLY NESTED MAPPING
"use client";

export default function Example10() {
  const courses = [
    {
      id: 1,
      name: "Math",
      students: [
        { id: "a", name: "Alice" },
        { id: "b", name: "Bob" },
      ],
    },
    {
      id: 2,
      name: "Science",
      students: [
        { id: "c", name: "Charlie" },
        { id: "d", name: "Diana" },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow space-y-4">
        <h1 className="text-xl font-bold mb-4 text-gray-700">
          Example 10: Deeply Nested Mapping
        </h1>
        {courses.map((c) => (
          <div key={c.id} className="p-3 bg-gray-100 rounded">
            <h2 className="font-semibold">{c.name}</h2>
            <div className="ml-4 flex flex-col gap-1">
              {c.students.map((s) => (
                <div key={s.id} className="px-2 py-1 bg-gray-200 text-gray-800 rounded">
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        ))}
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
};

export default ShowMultipleExamples;
