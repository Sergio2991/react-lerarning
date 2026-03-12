import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
  "use client";
import { useState, useEffect } from "react";

export default function ToastBasic() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Show Toast
      </button>

      {show && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow animate-fadeIn">
          Basic toast message!
        </div>
      )}
    </div>
  );
}
  
ADD ANIMATION
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}`,
  `MEDIUM TOAST - ICONS, VARIANTS(SUCCESS/ERROR/INFO, SLI-IN)
"use client";
import { useState, useEffect } from "react";

export default function ToastMedium() {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={() => showToast("success", "Saved successfully!")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Success
        </button>
        <button
          onClick={() => showToast("error", "Something went wrong!")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Error
        </button>
        <button
          onClick={() => showToast("info", "Here is some information.")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Info
        </button>
      </div>

      {toast && (
        <div
          className={\`fixed bottom-6 right-6 text-white px-4 py-3 rounded-lg shadow flex items-center gap-3 animate-slideIn $\{styles[toast.type]}\`}
        >
          <span>🔔</span>
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2">✕</button>
        </div>
      )}
    </div>
  );
}
  
ADD SLIDE-IN ANIMATION
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slideIn {
  animation: slideIn 0.25s ease-out;
}`,
  `ADVANCED TOAST - QUEUE SYSTEM, MULTIPLE TOAST, ICONS, PROGRESS BAR
"use client";
import { useState, useEffect } from "react";

export default function ToastAdvanced() {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const icons = {
    success: "✔️",
    error: "❌",
    info: "ℹ️",
  };

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={() => addToast("success", "Profile updated!")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Success
        </button>
        <button
          onClick={() => addToast("error", "Failed to save changes.")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Error
        </button>
        <button
          onClick={() => addToast("info", "New update available.")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Info
        </button>
      </div>

      <div className="fixed bottom-6 right-6 space-y-3 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={\`w-72 text-white px-4 py-3 rounded-lg shadow flex items-center gap-3 animate-slideIn $\{colors[t.type]}\`}
          >
            <span>{icons[t.type]}</span>
            <span className="flex-1">{t.message}</span>

            <div className="absolute bottom-0 left-0 h-1 bg-white/40 animate-progress" />

            <button
              onClick={() =>
                setToasts((prev) => prev.filter((x) => x.id !== t.id))
              }
              className="ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  `useToast HOOK
FOLDER STRUCTURE
/components/toast
   ToastProvider.jsx
   useToast.js
   ToastContainer.jsx
   
TOAST PROVIDER
Wrap the entire app with this

"use client";
import { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} setToasts={setToasts} />
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);

useToast.jsx
A simple hook you can call everywhere
"use client";
import { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} setToasts={setToasts} />
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);

TOAST CONTAINER
Handles rendering & animation

export default function ToastContainer({ toasts, setToasts }) {
  const icons = {
    success: "✔️",
    error: "❌",
    info: "ℹ️",
  };

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={\`relative w-72 text-white px-4 py-3 rounded-lg shadow flex items-center gap-3 animate-slideIn $\{colors[t.type]}\`}
        >
          <span>{icons[t.type]}</span>
          <span className="flex-1">{t.message}</span>

          <button
            onClick={() =>
              setToasts((prev) => prev.filter((x) => x.id !== t.id))
            }
            className="ml-2"
          >
            ✕
          </button>

          <div className="absolute bottom-0 left-0 h-1 bg-white/40 animate-progress" />
        </div>
      ))}
    </div>
  );
}
  
ADD ANIMATIONS TO GLOBALS.CSS

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slideIn {
  animation: slideIn 0.25s ease-out;
}

@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}

.animate-progress {
  animation: progress 4s linear forwards;
}
  
WRAP YOUR APP IN THE PROVIDER
In layout.jsx

import ToastProvider from "@/components/toast/ToastProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
  
USE IT ANYWHERE

"use client";
import useToast from "@/components/toast/useToast";

export default function Example() {
  const toast = useToast();

  return (
    <div className="p-6">
      <button
        onClick={() => toast.success("Profile updated!")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Show Success
      </button>

      <button
        onClick={() => toast.error("Something went wrong")}
        className="px-4 py-2 bg-red-600 text-white rounded-lg ml-3"
      >
        Show Error
      </button>

      <button
        onClick={() => toast.info("New update available")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-3"
      >
        Show Info
      </button>
    </div>
  );
}`,
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
