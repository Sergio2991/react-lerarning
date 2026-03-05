import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `"use client";
import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function DatePicker() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const selectDate = (day) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelected(date);
    setOpen(false);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isSelected = (day) => {
    return (
      selected &&
      selected.getDate() === day &&
      selected.getMonth() === currentMonth.getMonth() &&
      selected.getFullYear() === currentMonth.getFullYear()
    );
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Input */}
      <div
        onClick={() => setOpen(!open)}
        className="border rounded-lg px-4 py-3 bg-white cursor-pointer"
      >
        {selected ? (
          <span>
            {selected.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        ) : (
          <span className="text-gray-400">Select a date</span>
        )}
      </div>

      {/* Calendar */}
      {open && (
        <div className="absolute mt-2 left-0 w-full bg-white border rounded-xl shadow-lg p-4 z-20">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <h2 className="font-medium">
              {currentMonth.toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <button
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
            {days.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 text-center gap-y-2">
            {/* Empty slots before first day */}
            {Array.from({ length: firstDayOfMonth.getDay() }).map((_, i) => (
              <div key={i}></div>
            ))}

            {/* Actual days */}
            {Array.from({ length: lastDayOfMonth.getDate() }).map((_, i) => {
              const day = i + 1;

              return (
                <button
                  key={day}
                  onClick={() => selectDate(day)}
                  className={\`
                    w-10 h-10 flex items-center justify-center rounded-full mx-auto
                    transition
                    $\{
                      isSelected(day)
                        ? "bg-blue-600 text-white"
                        : isToday(day)
                        ? "border border-blue-600 text-blue-600"
                        : "hover:bg-gray-100"
                    }
                  \`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}`,
];

const DatePicker = () => {
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

export default DatePicker;
