import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    "use client";
import { useState } from "react";

export default function DrawerBasic() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Drawer
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-transform translate-x-0"
          >
            <h2 className="text-lg font-semibold">Basic Drawer</h2>
            <p className="text-sm text-gray-600 mt-2">
              This drawer slides from the left.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`,
  `INTERMIDIATE DRAWER LEFT/RIGHT SUPPORT, CLICK-OUTSIDE CLOSE, SMOOTH ANIMATION
"use client";
import { useState } from "react";

export default function DrawerMedium({ side = "left" }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Drawer
      </button>

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={\`fixed top-0 $\{side}-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300 $\{
              side === "left" ? "animate-slideLeft" : "animate-slideRight"
            }\`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Drawer</h2>
              <button onClick={close} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600">
              This drawer supports left or right slide.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
  
ADD ANIMATIONS TO YOUR GLOBAL CSS
@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-slideLeft {
  animation: slideLeft 0.25s ease-out;
}

.animate-slideRight {
  animation: slideRight 0.25s ease-out;
}`,
  `ADVANCED DRAWER WITH OVERLAY BLUR, ESC CLOSE, HEADER/FOOTER, RIGHT-SIDE PANEL
"use client";
import { useState, useEffect } from "react";

export default function DrawerAdvanced() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Drawer
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
          <div
            onClick={close}
            className="absolute inset-0"
          />

          <div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col animate-slideRight"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Advanced Drawer</h2>
              <button onClick={close} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="flex-1 text-sm text-gray-600">
              <p>
                This drawer includes ESC close, blurred overlay, and a premium layout.
              </p>
            </div>

            <div className="pt-4 border-t flex justify-end gap-2">
              <button
                onClick={close}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`,
];

const FeatureGrid = () => {
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

export default FeatureGrid;
