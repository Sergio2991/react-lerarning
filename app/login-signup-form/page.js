import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `LOGIN FORM (SIMPLE + CLEAN)
export default function LoginForm() {
  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="••••••••"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Sign In
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
`,
  `SIGNUP FORM (WITH CONFIRMATION PASSWORD)
export default function LoginForm() {
  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="••••••••"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Sign In
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
`,
  `AUTH CARD VERSION (PREMIUM UI)
export default function AuthCard({ title, children }) {
  return (
    <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
}

//USAGE
<AuthCard title="Sign In">
  <LoginForm />
</AuthCard>

<AuthCard title="Create Account">
  <SignupForm />
</AuthCard>
`,
  `RECOMMENDED STRUCTURE
/components
   /auth
      LoginForm.jsx
      SignupForm.jsx
      AuthCard.jsx
      index.js

//INDEX.JS
export { default as LoginForm } from "./LoginForm";
export { default as SignupForm } from "./SignupForm";
export { default as AuthCard } from "./AuthCard";

//THEN IMPORT IT ANYWHERE
import { LoginForm, AuthCard } from "@/components/auth";
`,
];

const LoginSignUpForm = () => {
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

export default LoginSignUpForm;
