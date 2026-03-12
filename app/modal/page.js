import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    "use client";
import { useState } from "react";

export default function ModalBasic() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800">Basic Modal</h2>
            <p className="text-sm text-gray-600 mt-2">
              This is a simple modal window.
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
  `INTERMIDIATE ANIMATION, HEADER/FOOTER, CLICK-OUTSIDE CLOSE
"use client";
import { useState } from "react";

export default function ModalMedium() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Modal
      </button>

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-96 p-6 rounded-xl shadow animate-fadeIn"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Modal Title</h2>
              <button onClick={close} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600">
              This modal includes a header, footer, and click‑outside close.
            </p>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={close}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
  
ADD THIS ANIMATION TO YOUR GLOBAL CSS
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}`,
  `ADVANCED MODAL SLIDE-UP, FULLSCREEN MOBILE, CLOSE ON ESC, PREMIUM LAYOUT
  "use client";
import { useState, useEffect } from "react";

export default function ModalAdvanced() {
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
        Open Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50">
          <div
            onClick={close}
            className="absolute inset-0"
          />

          <div
            className="bg-white w-full sm:w-[450px] p-6 rounded-t-2xl sm:rounded-xl shadow-lg animate-slideUp relative"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-gray-800">Advanced Modal</h2>

            <p className="text-sm text-gray-600 mt-3">
              This modal supports slide-up animation, ESC close, and fullscreen on mobile.
            </p>

            <div className="flex justify-end gap-2 mt-6">
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
}
  
ADD THIS ANIMATION TO YOUR GLOBAL CSS
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-slideUp {
  animation: slideUp 0.25s ease-out;
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
