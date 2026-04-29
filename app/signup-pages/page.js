import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC SIGNUP
    export default function SignInBasic() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-sm border">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}`,
  `INTERMEDIATE SIGN IN WITH LABEL, FORGOT PASSWORD LINK, DIVIDER, SOCIAL LOGIN BUTTONS
export default function SignInIntermediate() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-sm border">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

      <form className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-right">
          <a className="text-sm text-blue-600 hover:underline">Forgot password</a>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <button className="w-full py-2 border rounded-lg hover:bg-gray-50">
        Continue with Google
      </button>
    </div>
  );
}`,
  `ADVANCED SIGN IN WITH FLOATING LABELS, PASSWORD VISIBILITY TOGGLE, SOCIAL BUTTONS WITH ICONS SUBTLE CARD ANIMATION
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SignInAdvanced() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm mx-auto p-8 bg-white rounded-2xl shadow-lg border"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">Welcome Back</h2>

      <form className="space-y-6">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            className="peer w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="peer w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1">
            Password
          </label>

          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-500 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <button className="w-full py-3 border rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
        <span>🔵</span> Continue with Google
      </button>
    </motion.div>
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
