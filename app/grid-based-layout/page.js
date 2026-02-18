import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Beautiful Interfaces with <span className="text-blue-600">Speed</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A modern toolkit for developers who want to ship fast and look good doing it.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white shadow-lg rounded-xl h-64 md:h-80"></div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
            <p className="text-gray-600">
              Build layouts quickly with reusable components and clean structure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Everything adapts beautifully across all screen sizes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-600">
              Clean, elegant, and minimalistic design patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Next.js Ready</h3>
            <p className="text-gray-600">
              Fully compatible with App Router and server components.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Tailwind Powered</h3>
            <p className="text-gray-600">
              Utility‑first styling for maximum flexibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-gray-600">
              Free to use, modify, and extend for your projects.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join thousands of developers building with speed.</p>
        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
          Start Now
        </button>
      </section>

    </div>
  );
}`,
];

const GridBasedLayout = () => {
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

export default GridBasedLayout;
