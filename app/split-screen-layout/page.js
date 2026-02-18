import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE SPLIT-SCREEN AUTHENTIFICATION LAYOUT
  export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:block bg-blue-600 text-white p-12">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="mt-4 text-lg opacity-90">
          Log in to continue your journey.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}`,
  `SPLIT SCREEN WITH GRADIENT + CENTERED FORM (MODERN UI)
export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex items-center justify-center bg-linear-to-br from-blue-600 to-purple-600 text-white p-12">
        <div>
          <h1 className="text-5xl font-bold">Create Your Account</h1>
          <p className="mt-4 text-lg opacity-90">
            Join our community and start building.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
              Create Account
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
`,
  `export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="bg-gray-900 text-white flex flex-col justify-center p-12">
        <h1 className="text-5xl font-bold">MyApp</h1>
        <p className="mt-4 text-lg text-gray-300">
          The fastest way to manage your workflow.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Sign In
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}`,
];

const StickyHeaderWithBlur = () => {
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

export default StickyHeaderWithBlur;
