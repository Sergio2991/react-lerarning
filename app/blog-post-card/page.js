import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    export default function BlogCardBasic() {
  return (
    <div className="w-72 bg-white rounded-xl shadow p-4">
      <img
        src="https://via.placeholder.com/400x250"
        alt="Blog"
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="mt-3 space-y-2">
        <p className="text-sm text-gray-500">March 2, 2026</p>

        <h3 className="text-lg font-semibold text-gray-800">
          Blog Post Title
        </h3>

        <p className="text-sm text-gray-600">
          Short excerpt of the blog post goes here.
        </p>
      </div>
    </div>
  );
}`,
  `INTERMIDIATE WITH AUTHOR TAGS HOVER
export default function BlogCardMedium() {
  return (
    <div className="w-80 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <div className="w-full h-44 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/400x250"
          alt="Blog"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-sm text-gray-500">March 2, 2026 • 5 min read</p>

        <h3 className="text-xl font-semibold text-gray-800">
          How to Build a Modern UI with Tailwind
        </h3>

        <p className="text-sm text-gray-600">
          Learn how to create beautiful, responsive interfaces using Tailwind CSS.
        </p>

        <div className="flex gap-2">
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            UI
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            Tailwind
          </span>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <img
            src="https://via.placeholder.com/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-700">John Doe</span>
        </div>
      </div>
    </div>
  );
}
`,
  `ADVANCED WITH OVERLAY, GRADIENT, CATEGORY BADGE, HOVER ZOOM
export default function BlogCardAdvanced() {
  return (
    <div className="relative w-80 h-96 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      {/* Image */}
      <img
        src="https://via.placeholder.com/500x350"
        alt="Blog"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Category badge */}
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
        Design
      </span>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
        <p className="text-sm opacity-80">March 2, 2026 • 7 min read</p>

        <h3 className="text-2xl font-semibold leading-tight">
          Designing Better Interfaces with Modern UI Patterns
        </h3>

        <p className="text-sm opacity-90">
          A deep dive into layout, spacing, and visual hierarchy.
        </p>
      </div>
    </div>
  );
}`,
];

const DatePicker = () => {
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

export default DatePicker;
