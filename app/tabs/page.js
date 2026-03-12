import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `UNDERLINE TABS (CLASSIC, MINIMAL)
  "use client";
import { useState } from "react";

export default function UnderlineTabs() {
  const tabs = ["Overview", "Analytics", "Settings"];
  const [active, setActive] = useState("Overview");

  return (
    <div>
      <div className="flex gap-8 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={\`
              pb-3 text-sm font-medium
              $\{active === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}
            \`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-gray-700">Selected: {active}</p>
      </div>
    </div>
  );
}`,
  `PILL TABS (ROUNDED BUTTONS,MODERN UI)
"use client";
import { useState } from "react";

export default function PillTabs() {
  const tabs = ["Profile", "Billing", "Security"];
  const [active, setActive] = useState("Profile");

  return (
    <div>
      <div className="flex gap-3 bg-gray-100 p-2 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={\`
              px-4 py-2 rounded-lg text-sm font-medium transition
              $\{active === tab ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"}
            \`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-gray-700">Selected: {active}</p>
      </div>
    </div>
  );
}`,
  `ANIMATED TABS (SLIDING INDICATOR - PREMIUM UI)
"use client";
import { useState, useRef, useEffect } from "react";

export default function AnimatedTabs() {
  const tabs = ["Dashboard", "Reports", "Team"];
  const [active, setActive] = useState("Dashboard");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      setIndicatorStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  }, [active]);

  return (
    <div className="relative border-b">
      <div className="flex gap-8 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (refs.current[tab] = el)}
            onClick={() => setActive(tab)}
            className={\`
              pb-3 text-sm font-medium transition
              $\{active === tab ? "text-blue-600" : "text-gray-600 hover:text-gray-800"}
            \`}
          >
            {tab}
          </button>
        ))}

        {/* Sliding Indicator */}
        <span
          className="absolute bottom-0 h-2 bg-blue-600 transition-all duration-300"
          style={indicatorStyle}
        />
      </div>

      <div className="mt-6">
        <p className="text-gray-700">Selected: {active}</p>
      </div>
    </div>
  );
}
  
ADD PROGRESS ANIMATION
@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}

.animate-progress {
  animation: progress 4s linear forwards;
}`,
];

const Tabs = () => {
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

export default Tabs;
