import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `"use client";
import { useState } from "react";

export default function SingleSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-sm">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Volume: {value}%
      </label>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full accent-blue-600"
      />
    </div>
  );
}`,
  `"use client";
import { useState } from "react";

export default function PriceRangeSlider() {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(80);

  const handleMin = (e) => {
    const value = Number(e.target.value);
    if (value < max) setMin(value);
  };

  const handleMax = (e) => {
    const value = Number(e.target.value);
    if (value > min) setMax(value);
  };

  return (
    <div className="w-full max-w-sm">
      <label className="block mb-4 text-sm font-medium text-gray-700">
        Price Range: €{min} – €{max}
      </label>

      <div className="relative h-2 bg-gray-200 rounded-full">
        {/* Highlighted range */}
        <div
          className="absolute h-2 bg-blue-600 rounded-full"
          style={{
            left: \`$\{min}%\`,
            width: \`$\{max - min}%\`,
          }}
        />
      </div>

      {/* Sliders */}
      <div className="relative mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value={min}
          onChange={handleMin}
          className="absolute w-full pointer-events-none accent-blue-600"
          style={{ zIndex: min > 90 ? 5 : 1 }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={max}
          onChange={handleMax}
          className="absolute w-full pointer-events-none accent-blue-600"
        />
      </div>
    </div>
  );
}`,
];

const SearchBar = () => {
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

export default SearchBar;
