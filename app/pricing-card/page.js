import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    export default function PricingCardBasic() {
  return (
    <div className="w-72 bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800">Basic Plan</h3>

      <p className="mt-2 text-3xl font-bold text-blue-600">€9<span className="text-lg text-gray-500">/mo</span></p>

      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li>✔ 5 Projects</li>
        <li>✔ Basic Support</li>
        <li>✔ Access to Dashboard</li>
      </ul>

      <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Choose Plan
      </button>
    </div>
  );
}`,
  `INTERMIDIATE
  export default function PricingCardMedium() {
  return (
    <div className="w-80 bg-white rounded-xl shadow hover:shadow-lg transition p-6">
      <h3 className="text-2xl font-semibold text-gray-800 text-center">Pro Plan</h3>

      <p className="mt-3 text-center text-4xl font-bold text-blue-600">
        €19<span className="text-lg text-gray-500">/mo</span>
      </p>

      <p className="text-center text-sm text-gray-500 mt-1">Best for freelancers</p>

      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-green-600">✔</span> Unlimited Projects
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-600">✔</span> Priority Support
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-600">✔</span> Team Collaboration
        </li>
      </ul>

      <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Choose Plan
      </button>
    </div>
  );
}`,
  `ADVANCED
export default function PricingCardAdvanced() {
  return (
    <div className="relative w-80 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200">
      {/* Popular badge */}
      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
        Most Popular
      </span>

      {/* Gradient header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
        <h3 className="text-2xl font-semibold">Premium Plan</h3>
        <p className="mt-2 text-4xl font-bold">€39<span className="text-lg opacity-80">/mo</span></p>
        <p className="text-sm opacity-90 mt-1">For growing teams & businesses</p>
      </div>

      {/* Features */}
      <div className="p-6 space-y-4">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-green-600">✔</span> Unlimited Projects
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✔</span> Advanced Analytics
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✔</span> 24/7 Premium Support
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✔</span> Team Management Tools
          </li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}`,
];

const ProfileCard = () => {
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

export default ProfileCard;
