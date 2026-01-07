import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CALCULATING THE SUM OF NUMBERS
// pages/sum.js
export default function SumPage() {
  const numbers = [10, 20, 30];
  const total = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Total Sum</h1>
      <p className="text-lg mt-2">The total is: <span className="font-semibold">{total}</span></p>
    </div>
  );
}`,
  `COUNT ROLES IN AN ARRAY OF OBJECTS
// pages/roles.js
export default function RoleCounter() {
  const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'user' },
    { name: 'Dana', role: 'moderator' },
  ];

  const roleCount = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Roles</h2>
      <ul className="list-disc pl-5">
        {Object.entries(roleCount).map(([role, count]) => (
          <li key={role} className="text-gray-700">
            {role}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
  `CALCULATE TOTAL PRICE IN A SHOPPING CART
  // pages/cart.js
export default function Cart() {
  const cartItems = [
    { name: 'T-shirt', price: 20 },
    { name: 'Jeans', price: 40 },
    { name: 'Hat', price: 15 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul className="divide-y divide-gray-200">
        {cartItems.map((item, index) => (
          <li key={index} className="py-2 flex justify-between">
            <span>{item.name}</span>
            <span>\${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right font-semibold text-lg">
        Total: \${total}
      </div>
    </div>
  );
}`,
  `FLATTEN A NESTED ARRAY
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]`,
  `FIND THE TOP PLAYER IN A LEADERBOARD
// pages/leaderboard.js
export default function Leaderboard() {
  const players = [
    { name: 'Alice', score: 42 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 38 },
  ];

  const topPlayer = players.reduce((max, player) =>
    player.score > max.score ? player : max
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏆 Leaderboard</h1>
      <ul className="mb-4">
        {players.map((p, i) => (
          <li key={i} className="text-gray-700">
            {p.name}: {p.score} pts
          </li>
        ))}
      </ul>
      <div className="text-green-600 font-semibold">
        Top Player: {topPlayer.name} ({topPlayer.score} pts)
      </div>
    </div>
  );
}`,
  `GROUP ITEMS BY CATEGORY
// pages/grouped.js
export default function GroupedItems() {
  const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Broccoli', category: 'Vegetable' },
  ];

  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Grouped Items</h2>
      {Object.entries(grouped).map(([category, names]) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold">{category}</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {names.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}`,
  `GENERATE CARDS FROM AN ARRAY OF OBJECTS
// pages/cards.js
export default function Cards() {
  const people = [
    { name: 'Alice', role: 'Admin' },
    { name: 'Bob', role: 'User' },
    { name: 'Charlie', role: 'Moderator' },
  ];

  const cards = people.reduce((acc, person, i) => {
    acc.push(
      <div
        key={i}
        className="bg-white shadow-md rounded p-4 m-2 w-64 border border-gray-200"
      >
        <h3 className="text-lg font-bold">{person.name}</h3>
        <p className="text-sm text-gray-600">{person.role}</p>
      </div>
    );
    return acc;
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">People Cards</h1>
      <div className="flex flex-wrap">{cards}</div>
    </div>
  );
}`,
];

const ReduceMethod = () => {
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

export default ReduceMethod;
