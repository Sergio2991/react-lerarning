import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `AMAZON STYLE MEGA MENU (HOVER-ACTIVATED)
    "use client";
import { useState } from "react";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

        {/* CATEGORY TRIGGER */}
        <div
          className="relative group"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-2 hover:text-blue-400">
            All Categories ▼
          </button>

          {/* MEGA MENU PANEL */}
          {open && (
            <div className="
              absolute left-0 top-full mt-2 w-[700px] 
              bg-white text-gray-900 shadow-xl rounded-lg p-6 
              grid grid-cols-3 gap-6 z-50
            ">
              {/* Column 1 */}
              <div>
                <h3 className="font-semibold mb-3">Electronics</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-blue-600" href="#">Laptops</a></li>
                  <li><a className="hover:text-blue-600" href="#">Headphones</a></li>
                  <li><a className="hover:text-blue-600" href="#">Cameras</a></li>
                  <li><a className="hover:text-blue-600" href="#">Smartphones</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold mb-3">Home & Kitchen</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-blue-600" href="#">Furniture</a></li>
                  <li><a className="hover:text-blue-600" href="#">Cookware</a></li>
                  <li><a className="hover:text-blue-600" href="#">Decor</a></li>
                  <li><a className="hover:text-blue-600" href="#">Lighting</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-semibold mb-3">Fashion</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-blue-600" href="#">Men</a></li>
                  <li><a className="hover:text-blue-600" href="#">Women</a></li>
                  <li><a className="hover:text-blue-600" href="#">Kids</a></li>
                  <li><a className="hover:text-blue-600" href="#">Shoes</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* OTHER NAV LINKS */}
        <a href="#" className="hover:text-blue-400">Deals</a>
        <a href="#" className="hover:text-blue-400">New Releases</a>
        <a href="#" className="hover:text-blue-400">Customer Service</a>
      </div>
    </nav>
  );
}`,
  `MEGA MENU WITH ICONS(MORE AMAZON LIKE)
import { ComputerDesktopIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const categories = [
  {
    title: "Electronics",
    icon: <ComputerDesktopIcon className="w-6 h-6" />,
    items: ["Laptops", "Cameras", "Headphones", "Smartphones"],
  },
  {
    title: "Home & Kitchen",
    icon: <HomeIcon className="w-6 h-6" />,
    items: ["Furniture", "Cookware", "Decor", "Lighting"],
  },
  {
    title: "Fashion",
    icon: <ShoppingBagIcon className="w-6 h-6" />,
    items: ["Men", "Women", "Kids", "Shoes"],
  },
];

export default function MegaMenu() {
  return (
    <nav className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

        <div className="relative group">
          <button className="flex items-center gap-2 hover:text-blue-400">
            Shop by Category ▼
          </button>

          <div className="
            absolute left-0 top-full mt-2 w-[750px]
            bg-white text-gray-900 shadow-xl rounded-lg p-6
            grid grid-cols-3 gap-6 opacity-0 group-hover:opacity-100
            pointer-events-none group-hover:pointer-events-auto
            transition
          ">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-2 mb-3">
                  {cat.icon}
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a className="hover:text-blue-600" href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}`,
  `MEGA MENU WITH IMAG GRID (PREMIUM E-COMMERCE STYLE)
<div className="
  absolute left-0 top-full mt-2 w-[900px]
  bg-white text-gray-900 shadow-xl rounded-lg p-8
  grid grid-cols-4 gap-6
">
  <div className="col-span-3 grid grid-cols-3 gap-6">
    {/* 3 columns of links */}
  </div>

  <div className="col-span-1">
    <img
      src="https://source.unsplash.com/random/400x400?shopping"
      className="rounded-lg shadow"
    />
  </div>
</div>`,
];

const MegaMenu = () => {
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

export default MegaMenu;
