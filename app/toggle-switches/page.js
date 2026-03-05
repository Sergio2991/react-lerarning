import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE TOGGLE SWITCH (IOS STYLE)
    "use client";
import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={\`
        w-12 h-6 flex items-center rounded-full p-1 transition
        $\{enabled ? "bg-blue-600" : "bg-gray-300"}
      \`}
    >
      <div
        className={\`
          w-4 h-4 bg-white rounded-full shadow transform transition
          $\{enabled ? "translate-x-6" : "translate-x-0"}
        \`}
      />
    </button>
  );
}`,
  `TOGGLE SWITCH WITH LABELS (ON/OFF)
"use client";
import { useState } from "react";

export default function ToggleWithLabel() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">{enabled ? "On" : "Off"}</span>

      <button
        onClick={() => setEnabled(!enabled)}
        className={\`
          w-14 h-7 flex items-center rounded-full p-1 transition
          $\{enabled ? "bg-green-500" : "bg-gray-300"}
        \`}
      >
        <div
          className={\`
            w-5 h-5 bg-white rounded-full shadow transform transition
            $\{enabled ? "translate-x-7" : "translate-x-0"}
          \`}
        />
      </button>
    </div>
  );
}`,
  `ANIMATED TOGGLE WITH ICONS (PREMIUM UI)
  "use client";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function IconToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={\`
        w-16 h-8 flex items-center rounded-full p-1 transition relative
        $\{enabled ? "bg-blue-600" : "bg-gray-300"}
      \`}
    >
      {/* Icons */}
      <CheckIcon
        className={\`
          w-4 h-4 text-white absolute left-2 transition-opacity
          $\{enabled ? "opacity-100" : "opacity-0"}
        \`}
      />
      <XMarkIcon
        className={\`
          w-4 h-4 text-white absolute right-2 transition-opacity
          $\{enabled ? "opacity-0" : "opacity-100"}
        \`}
      />

      {/* Knob */}
      <div
        className={\`
          w-6 h-6 bg-white rounded-full shadow transform transition
          $\{enabled ? "translate-x-8" : "translate-x-0"}
        \`}
      />
    </button>
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
