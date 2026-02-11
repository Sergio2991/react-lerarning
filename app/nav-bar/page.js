import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `MOBILE MENU TOGGLE
    // components/Navbar.jsx
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-xl font-bold">MySite</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
    `,
  `NAVBAR USING LINK + ACTIVE ROUTE HIGHLIGHT
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex space-x-6">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-300"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}`,
  `NAVBAR WITH DROPDOWN MENU(TAILWIND + REACT)
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex space-x-6">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-blue-400 font-semibold"
                : "hover:text-blue-300"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}`,
  `NAVBAR USING TAILWIND + HEADLESS UI (BEST UX, ANIMATION)
"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
            <div className="text-xl font-bold">MySite</div>

            <Disclosure.Button className="md:hidden">
              {open ? "✖" : "☰"}
            </Disclosure.Button>

            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/services" className="hover:text-blue-400">Services</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden px-4 pb-4 space-y-2">
            <Link href="/" className="block">Home</Link>
            <Link href="/services" className="block">Services</Link>
            <Link href="/contact" className="block">Contact</Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}`,
  `STICKY NAVBAR WITH BLUR BACKGROUND(MODERN UI)
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-white/70 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <div className="font-bold text-lg">Logo</div>

        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/shop" className="hover:text-blue-600">Shop</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
`,
  `NAVBAR WITH ICONS(HEROICONS)
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex space-x-8">
        <a href="/" className="flex items-center gap-2 hover:text-blue-400">
          <HomeIcon className="w-5 h-5" /> Home
        </a>
        <a href="/profile" className="flex items-center gap-2 hover:text-blue-400">
          <UserIcon className="w-5 h-5" /> Profile
        </a>
      </div>
    </nav>
  );
}
`,
];

const Navbar = () => {
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

export default Navbar;
