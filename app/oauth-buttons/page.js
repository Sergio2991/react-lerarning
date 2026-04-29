import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC OAUTH BUTTON

  export default function OAuthBasic() {
  return (
    <div className="space-y-3">
      <button className="w-full py-2 border rounded-lg hover:bg-gray-50">
        Continue with Google
      </button>

      <button className="w-full py-2 border rounded-lg hover:bg-gray-50">
        Continue with GitHub
      </button>
    </div>
  );
}`,
  `INTERMEDIATE OAUTH BUTTON WITH ICONS? BETTER SPACING PROVIDER COLORS, HOVER STATES
export default function OAuthIntermediate() {
  return (
    <div className="space-y-3">
      {/* Google */}
      <button className="w-full py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5 h-5"
          alt="Google"
        />
        <span>Continue with Google</span>
      </button>

      {/* GitHub */}
      <button className="w-full py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3">
        <img
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          className="w-5 h-5"
          alt="GitHub"
        />
        <span>Continue with GitHub</span>
      </button>

      {/* Facebook */}
      <button className="w-full py-2 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3">
        <img
          src="https://www.svgrepo.com/show/448224/facebook.svg"
          className="w-5 h-5"
          alt="Facebook"
        />
        <span>Continue with Facebook</span>
      </button>
    </div>
  );
}`,
  `ADVANCED OAUTH BUTTONS WITH ANIMATED HOVER SCALE? PROVIDER-SPECIFIC COLOR ACCENTS, ICON BACKGROUNDS, SMOOTH TRANSITIONS, PREMIUM LAYOUT
"use client";
import { motion } from "framer-motion";

export default function OAuthAdvanced() {
  const providers = [
    {
      name: "Google",
      icon: "https://www.svgrepo.com/show/475656/google-color.svg",
      color: "border-gray-300 hover:bg-gray-50",
    },
    {
      name: "GitHub",
      icon: "https://www.svgrepo.com/show/512317/github-142.svg",
      color: "border-gray-300 hover:bg-gray-50",
    },
    {
      name: "Facebook",
      icon: "https://www.svgrepo.com/show/448224/facebook.svg",
      color: "border-blue-200 hover:bg-blue-50",
    },
  ];

  return (
    <div className="space-y-4">
      {providers.map((p) => (
        <motion.button
          key={p.name}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={\`w-full py-3 border rounded-xl flex items-center justify-center gap-3 transition $\{p.color}\`}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <img src={p.icon} alt={p.name} className="w-5 h-5" />
          </div>
          <span className="font-medium">Continue with {p.name}</span>
        </motion.button>
      ))}
    </div>
  );
}`,
];

const LoginSignupPages = () => {
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

export default LoginSignupPages;
