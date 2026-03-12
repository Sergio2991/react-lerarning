import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC CLEAN AUTO-SWITCH
"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Designer",
    text: "This service completely transformed the way I work. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Developer",
    text: "Clean UI, fast performance, and great support. Love it.",
  },
  {
    name: "Maria Rossi",
    role: "Marketing Lead",
    text: "A must-have tool for any modern team. Fantastic experience.",
  },
];

export default function TestimonialCarouselBasic() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow p-6 text-center">
      <p className="text-gray-700 text-lg italic">“{t.text}”</p>

      <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
      <p className="text-sm text-gray-500">{t.role}</p>
    </div>
  );
}`,
  `INTERMIDIATE WITH ARROWS, DOTS, AVATAR, SMOOTH TRANSITIONS
"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Designer",
    avatar: "https://via.placeholder.com/80",
    text: "This platform helped our team collaborate better than ever.",
  },
  {
    name: "John Smith",
    role: "Full-Stack Developer",
    avatar: "https://via.placeholder.com/80",
    text: "The UI is clean, intuitive, and incredibly fast.",
  },
  {
    name: "Sara Bianchi",
    role: "Project Manager",
    avatar: "https://via.placeholder.com/80",
    text: "Our productivity skyrocketed after switching to this tool.",
  },
];

export default function TestimonialCarouselMedium() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow p-8 text-center relative">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      <img
        src={t.avatar}
        className="w-20 h-20 rounded-full mx-auto mb-4"
        alt={t.name}
      />

      <p className="text-gray-700 text-lg italic transition-opacity duration-300">
        “{t.text}”
      </p>

      <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
      <p className="text-sm text-gray-500">{t.role}</p>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={\`w-3 h-3 rounded-full $\{
              i === index ? "bg-blue-600" : "bg-gray-300"
            }\`}
          />
        ))}
      </div>
    </div>
  );
}`,
  `ADVANCED WITH CARDS, 3D SLIDE EFFECT, AUTO + MANUAL NAVIGATION
"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Laura Conti",
    role: "Creative Director",
    avatar: "https://via.placeholder.com/80",
    text: "The attention to detail and user experience is unmatched.",
  },
  {
    name: "Marco De Luca",
    role: "Tech Lead",
    avatar: "https://via.placeholder.com/80",
    text: "Our workflow improved dramatically thanks to this platform.",
  },
  {
    name: "Elena Marino",
    role: "Operations Manager",
    avatar: "https://via.placeholder.com/80",
    text: "A beautifully designed tool that actually makes work enjoyable.",
  },
];

export default function TestimonialCarouselAdvanced() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-72 flex items-center justify-center overflow-hidden">
      {testimonials.map((t, i) => {
        const offset = i - index;
        const isActive = offset === 0;

        return (
          <div
            key={i}
            className={\`absolute w-80 bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-500 $\{
              isActive
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-75 z-10"
            }\`}
          >
            <img
              src={t.avatar}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt={t.name}
            />

            <p className="text-gray-700 italic">“{t.text}”</p>

            <h3 className="mt-4 font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        );
      })}
    </div>
  );
}`,
];

const Carousel = () => {
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

export default Carousel;
