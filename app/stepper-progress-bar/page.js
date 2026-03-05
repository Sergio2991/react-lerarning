import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC STEPPER (STATIC, CLEAN UI)
    export default function Stepper({ currentStep = 2 }) {
  const steps = ["Account", "Details", "Confirm", "Finish"];

  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
      {steps.map((step, index) => {
        const isActive = index + 1 <= currentStep;

        return (
          <div key={step} className="flex flex-col items-center flex-1">
            {/* Circle */}
            <div
              className={\`
                w-10 h-10 flex items-center justify-center rounded-full border-2
                $\{isActive ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-400"}
              \`}
            >
              {index + 1}
            </div>

            {/* Label */}
            <span className="mt-2 text-sm text-gray-700">{step}</span>

            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={\`
                  h-1 w-full mt-4
                  $\{isActive ? "bg-blue-600" : "bg-gray-300"}
                \`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}`,
  `INTERACTIVE CLICKABLE STEPS
"use client";
import { useState } from "react";

export default function Stepper() {
  const steps = ["Account", "Details", "Confirm", "Finish"];
  const [current, setCurrent] = useState(1);

  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= current;

        return (
          <div
            key={step}
            className="flex flex-col items-center flex-1 cursor-pointer"
            onClick={() => setCurrent(stepNumber)}
          >
            {/* Circle */}
            <div
              className={\`
                w-10 h-10 flex items-center justify-center rounded-full border-2 transition
                $\{isActive ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-400"}
              \`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <span className="mt-2 text-sm text-gray-700">{step}</span>

            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={\`
                  h-1 w-full mt-4 transition
                  $\{isActive ? "bg-blue-600" : "bg-gray-300"}
                \`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}`,
  `ANIMATED STEPPER (SMOOTH SLIDING PROGRESS BAR)
"use client";
import { useState, useEffect, useRef } from "react";

export default function AnimatedStepper() {
  const steps = ["Account", "Details", "Confirm", "Finish"];
  const [current, setCurrent] = useState(1);
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      const percentage = ((current - 1) / (steps.length - 1)) * 100;
      barRef.current.style.width = \`$\{percentage}%\`;
    }
  }, [current]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full mb-10">
        <div
          ref={barRef}
          className="absolute h-2 bg-blue-600 rounded-full transition-all duration-300"
        />
      </div>

      {/* Steps */}
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= current;

          return (
            <div
              key={step}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurrent(stepNumber)}
            >
              <div
                className={\`
                  w-10 h-10 flex items-center justify-center rounded-full border-2 transition
                  $\{isActive ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-400"}
                \`}
              >
                {stepNumber}
              </div>
              <span className="mt-2 text-sm text-gray-700">{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
];

const StepperProgressBar = () => {
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

export default StepperProgressBar;
