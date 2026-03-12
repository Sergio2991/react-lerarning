import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC
    "use client";
import { useState } from "react";

export default function AccordionBasic() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "What is your refund policy?", a: "We offer a 30‑day money‑back guarantee." },
    { q: "Do you offer support?", a: "Yes, 24/7 email and chat support." },
    { q: "Can I upgrade later?", a: "You can upgrade at any time." },
  ];

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {faqs.map((item, i) => (
        <div key={i} className="border rounded-lg p-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left font-medium text-gray-800"
          >
            {item.q}
          </button>

          {open === i && (
            <p className="mt-2 text-sm text-gray-600">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}`,
  `INTERMIDIATE ACCORDION FAQ, ICONS, SMOOTH ANIMATION, BETTER LAYOUT
"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function AccordionMedium() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "How does billing work?", a: "Billing is monthly and you can cancel anytime." },
    { q: "Is my data secure?", a: "We use industry-standard encryption and security." },
    { q: "Do you offer team plans?", a: "Yes, we support teams of any size." },
  ];

  return (
    <div className="w-full max-w-xl mx-auto space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={i} className="border rounded-xl p-4">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-gray-800">{item.q}</span>
              <ChevronDownIcon
                className={\`w-5 h-5 text-gray-500 transition-transform $\{
                  isOpen ? "rotate-180" : ""
                }\`}
              />
            </button>

            <div
              className={\`overflow-hidden transition-all duration-300 $\{
                isOpen ? "max-h-40 mt-2" : "max-h-0"
              }\`}
            >
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
  `ADVANCED ACCORDION FAQ, CARDS, ICONS, GRADIENT ACCENT, MULTI-LINE SUPPORT
  "use client";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function AccordionAdvanced() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What makes your platform different?",
      a: "We combine speed, security, and a modern UI to deliver a premium experience.",
    },
    {
      q: "Can I integrate with third-party tools?",
      a: "Yes, we support integrations with dozens of popular services.",
    },
    {
      q: "Do you offer discounts for annual plans?",
      a: "Annual plans include a 20% discount and priority support.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {faqs.map((item, i) => {
        const isOpen = open === i;

        return (
          <div
            key={i}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-purple-500 rounded-l-xl" />

            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-800">{item.q}</span>
              {isOpen ? (
                <MinusIcon className="w-6 h-6 text-blue-600" />
              ) : (
                <PlusIcon className="w-6 h-6 text-blue-600" />
              )}
            </button>

            <div
              className={\`overflow-hidden transition-all duration-300 $\{
                isOpen ? "max-h-40 mt-3" : "max-h-0"
              }\`}
            >
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
];

const Accordion = () => {
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

export default Accordion;
