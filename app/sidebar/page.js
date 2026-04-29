import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC VERTICAL SIDEBAR WITH ICONS AND LABELS
  "use client";
import { HomeIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function SidebarBasic({ items = [], onSelect }) {
  return (
    <div className="w-20 h-screen bg-gray-900 text-white flex flex-col items-center py-6 gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          className="flex flex-col items-center gap-1 hover:text-blue-400"
        >
          <item.icon className="w-7 h-7" />
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
  
USAGE
"use client";
import { SidebarBasic } from "@/components/sidebar";
import { HomeIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

const items = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "cart", label: "Cart", icon: ShoppingCartIcon },
  { id: "account", label: "Account", icon: UserIcon },
];

export default function Page() {
  return (
    <SidebarBasic
      items={items}
      onSelect={(id) => console.log("Selected:", id)}
    />
  );
}`,
  `INTERMEDIATE SIDEBAR WITH ACTIVE STATE, TOOLTIP ON HOVER, BETTER SPACING, ROUNDED ACTIVE BACKGROUND
"use client";
import { useState } from "react";

export default function SidebarIntermediate({ items = [], onSelect }) {
  const [active, setActive] = useState(items[0]?.id);

  const handleSelect = (id) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <div className="w-24 h-screen bg-gray-900 text-white flex flex-col py-6 gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className={\`group flex flex-col items-center gap-1 py-3 rounded-lg mx-2 transition
            $\{active === item.id ? "bg-gray-700 text-blue-400" : "hover:bg-gray-800"}
          \`}
        >
          <item.icon className="w-7 h-7" />
          <span className="text-xs">{item.label}</span>

          {/* Tooltip */}
          <span className="absolute left-24 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow transition">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
  
USAGE
"use client";
import { SidebarIntermediate } from "@/components/sidebar";
import { HomeIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

const items = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "cart", label: "Cart", icon: ShoppingCartIcon },
  { id: "account", label: "Account", icon: UserIcon },
];

export default function Page() {
  return (
    <SidebarIntermediate
      items={items}
      onSelect={(id) => console.log("Selected:", id)}
    />
  );
}`,
  `ADVANCED SIDEBAR WITH COLLAPSIBLE SIDEBAR, SMOOTH ANIMATION, ICONS-ONLY MODE, EXPAND/COLLAPSE BUTTON, ACTIVE HIGHLIGHT BAR
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SidebarAdvanced({ items = [], onSelect }) {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(items[0]?.id);

  const handleSelect = (id) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <motion.div
      animate={{ width: open ? 220 : 80 }}
      className="h-screen bg-gray-900 text-white flex flex-col py-6 relative"
    >
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-6 bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center"
      >
        {open ? "<" : ">"}
      </button>

      {/* Items */}
      <div className="flex flex-col gap-2 mt-10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={\`flex items-center gap-3 px-4 py-3 rounded-lg transition
              $\{active === item.id ? "bg-gray-700 text-blue-400" : "hover:bg-gray-800"}
            \`}
          >
            <item.icon className="w-6 h-6" />

            {open && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm"
              >
                {item.label}
              </motion.span>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
  
USAGE
"use client";
import { SidebarAdvanced } from "@/components/sidebar";
import { HomeIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

const items = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "cart", label: "Cart", icon: ShoppingCartIcon },
  { id: "account", label: "Account", icon: UserIcon },
];

export default function Page() {
  return (
    <SidebarAdvanced
      items={items}
      onSelect={(id) => console.log("Selected:", id)}
    />
  );
}`,
];

const Sidebar = () => {
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

export default Sidebar;
