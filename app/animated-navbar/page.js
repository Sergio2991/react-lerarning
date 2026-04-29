import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `INSTRUCTION
    ADD LIBRARY TO THE PROJECT
    yarn add framer-motion`,
  `BASIC ANIMATED NAVBAR
  "use client";
import { motion } from "framer-motion";

export default function NavbarBasic() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center"
    >
      <div className="text-xl font-semibold">MyApp</div>

      <div className="flex gap-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
      </div>
    </motion.nav>
  );
}`,
  `INTERMIDIATE
"use client";
import { motion } from "framer-motion";

export default function NavbarBasic() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center"
    >
      <div className="text-xl font-semibold">MyApp</div>

      <div className="flex gap-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
      </div>
    </motion.nav>
  );
}`,
  `ADVANCED NAVBAR
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavbarAdvanced() {
  const links = ["Home", "Dashboard", "Projects", "Settings"];
  const [active, setActive] = useState("Home");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={hidden ? { y: -80 } : { y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 border-b shadow-sm px-6 py-4 z-50"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">MyApp</div>

        <div className="hidden md:flex gap-8 relative">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className="relative text-gray-700 hover:text-blue-600"
            >
              {link}

              {active === link && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 -bottom-1 h-2 bg-blue-600 w-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}`,
];

const AnimatedNavbar = () => {
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

export default AnimatedNavbar;
