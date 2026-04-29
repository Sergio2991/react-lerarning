import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC QUANTITY SELECTOR
"use client";
export default function QuantitySelectorBasic({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(value - 1)}
        className="px-3 py-1 border rounded"
      >
        -
      </button>

      <span className="w-8 text-center">{value}</span>

      <button
        onClick={() => onChange(value + 1)}
        className="px-3 py-1 border rounded"
      >
        +
      </button>
    </div>
  );
}
  
USAGE
const [qty, setQty] = useState(1);

<QuantitySelectorBasic value={qty} onChange={setQty} />;`,
  `INTERMEDIATE QUANTITY SELECTOR WITH MIN/MAX, DISABLED STATES, BETTER STYLING, SMOOTHER UX
"use client";
export default function QuantitySelectorIntermediate({
  value,
  onChange,
  min = 1,
  max = 10,
}) {
  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const increase = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decrease}
        disabled={value <= min}
        className={\`px-3 py-1 border rounded $\{
          value <= min ? "opacity-40 cursor-not-allowed" : ""
        }\`}
      >
        -
      </button>

      <span className="w-8 text-center font-medium">{value}</span>

      <button
        onClick={increase}
        disabled={value >= max}
        className={\`px-3 py-1 border rounded $\{
          value >= max ? "opacity-40 cursor-not-allowed" : ""
        }\`}
      >
        +
      </button>
    </div>
  );
}
  
USAGE
const [qty, setQty] = useState(1);

<QuantitySelectorIntermediate
  value={qty}
  onChange={setQty}
  min={1}
  max={5}
/>;`,
  `ADVANCED QUANTITY SELECTOR WITH FRAMER MOTION ANIMATIONS, LONG-PRESS TO AUTO-REPEAT, KEYBOARD SUPPORT ⬆⬇, SMOOTH TRANSITION
  "use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function QuantitySelectorAdvanced({
  value,
  onChange,
  min = 1,
  max = 10,
}) {
  const intervalRef = useRef(null);

  const startHold = (type) => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (type === "inc" && value < max) onChange((v) => v + 1);
      if (type === "dec" && value > min) onChange((v) => v - 1);
    }, 120);
  };

  const stopHold = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="flex items-center gap-3"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowUp" && value < max) onChange(value + 1);
        if (e.key === "ArrowDown" && value > min) onChange(value - 1);
      }}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onMouseDown={() => startHold("dec")}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onClick={() => value > min && onChange(value - 1)}
        className={\`px-3 py-1 border rounded $\{
          value <= min ? "opacity-40 cursor-not-allowed" : ""
        }\`}
      >
        -
      </motion.button>

      <motion.span
        key={value}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="w-8 text-center font-semibold"
      >
        {value}
      </motion.span>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onMouseDown={() => startHold("inc")}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onClick={() => value < max && onChange(value + 1)}
        className={\`px-3 py-1 border rounded $\{
          value >= max ? "opacity-40 cursor-not-allowed" : ""
        }\`}
      >
        +
      </motion.button>
    </div>
  );
}

USAGE
const [qty, setQty] = useState(1);

<QuantitySelectorAdvanced
  value={qty}
  onChange={setQty}
  min={1}
  max={10}
/>;`,
];

const ProtectedRouteWrapper = () => {
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

export default ProtectedRouteWrapper;
