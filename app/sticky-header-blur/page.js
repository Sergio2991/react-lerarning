import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `MINIMAL STICKY HEADER WITH BLUR
export default function StickyHeader() {
  return (
    <header className="
      fixed top-0 left-0 w-full 
      backdrop-blur-md bg-white/60 
      border-b border-white/20 
      z-50
    ">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h1 className="text-xl font-semibold">My Website</h1>
      </div>
    </header>
  );
}`,
  `2 STICKY HEADER WITH LOGO + NAVIGATION
export default function StickyHeader() {
  return (
    <header className="
      fixed top-0 left-0 w-full 
      backdrop-blur-lg bg-white/70 
      border-b border-gray-200/40 
      z-50
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">MyBrand</div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700 text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}`,
  `STICKY HEADER WITH SCROLL SHADOW
"use client";
import { useState, useEffect } from "react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={\`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg bg-white/70 transition-all
        $\{scrolled ? "shadow-md" : "shadow-none"}
      \`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold">Dashboard</div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/settings" className="hover:text-blue-600">Settings</a>
          <a href="/profile" className="hover:text-blue-600">Profile</a>
        </nav>
      </div>
    </header>
  );
}`,
];

const StickyHeaderWithBlur = () => {
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

export default StickyHeaderWithBlur;
