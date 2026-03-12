import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SIMPLE HOVER LABEL
  export default function TooltipBasic({ text, children }) {
  return (
    <div className="relative inline-block group">
      {children}

      <div className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
        {text}
      </div>
    </div>
  );
}

USAGE
<TooltipBasic text="This is a tooltip">
  <button className="px-3 py-2 bg-blue-600 text-white rounded">Hover me</button>
</TooltipBasic>`,
  `INTERMIDIATE WITH FADE ANIMATION, ARROW, POSITIONING
  
export default function TooltipMedium({ text, children }) {
  return (
    <div className="relative inline-block group">
      {children}

      <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow whitespace-nowrap pointer-events-none">
        {text}
        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );
}
  
<TooltipMedium text="More info">
  <span className="underline cursor-pointer">Hover</span>
</TooltipMedium>`,

  `ADVANCED WITH SMART POSITIONING(TO/BOTTO), DELAY, SMOOTH MOTION

"use client";
import { useState, useRef, useEffect } from "react";

export default function TooltipAdvanced({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("top");
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setPosition(rect.top < 60 ? "bottom" : "top");
  }, [visible]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setTimeout(() => setVisible(true), 150)}
      onMouseLeave={() => setVisible(false)}
      ref={ref}
    >
      {children}

      {visible && (
        <div
          className={\`absolute left-1/2 -translate-x-1/2 $\{
            position === "top" ? "-top-12" : "top-8"
          } bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap transition-all duration-200 opacity-100\`}
        >
          {text}

          <div
            className={\`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 $\{
              position === "top" ? "-bottom-1" : "-top-1"
            }\`}
          ></div>
        </div>
      )}
    </div>
  );
}
  
USAGE

<TooltipAdvanced text="Smart tooltip with auto placement">
  <button className="px-4 py-2 bg-purple-600 text-white rounded">Hover me</button>
</TooltipAdvanced>`,
];

const Toast = () => {
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

export default Toast;
