import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC CHECKOUT FORM WITH NAME, EMAIL, ADDRESS AND A SUBMIT BUTTON
  "use client";
import { useState } from "react";

export default function CheckoutFormBasic({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(form);
      }}
      className="space-y-4 max-w-md"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded-lg px-3 py-2"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
        />
      </div>

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
        Continue
      </button>
    </form>
  );
}`,
`INTERMEDIATE CHECKOUT FORM WITH SHIPPING INFO, BILLING INFO, PAYMENT SECTION(CARD FIELDS), FORM VALIDATION, TWO-COLUMN LAYOUT
"use client";
import { useState } from "react";

export default function CheckoutFormIntermediate({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      {/* Shipping */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Full Name"
            className="border rounded-lg px-3 py-2"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />

          <input
            placeholder="Email"
            type="email"
            className="border rounded-lg px-3 py-2"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <input
            placeholder="Address"
            className="border rounded-lg px-3 py-2 col-span-2"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <input
            placeholder="City"
            className="border rounded-lg px-3 py-2"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />

          <input
            placeholder="ZIP Code"
            className="border rounded-lg px-3 py-2"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
        </div>
      </section>

      {/* Payment */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

        <div className="space-y-4">
          <input
            placeholder="Card Number"
            className="w-full border rounded-lg px-3 py-2"
            value={form.cardNumber}
            onChange={(e) => update("cardNumber", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="MM/YY"
              className="border rounded-lg px-3 py-2"
              value={form.expiry}
              onChange={(e) => update("expiry", e.target.value)}
            />

            <input
              placeholder="CVC"
              className="border rounded-lg px-3 py-2"
              value={form.cvc}
              onChange={(e) => update("cvc", e.target.value)}
            />
          </div>
        </div>
      </section>

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
        Complete Order
      </button>
    </form>
  );
}`,
`ADCVANCED CHECKOUT FORM WITH ANIMATED SECTIONS, REAL-TIME VALIDATION, ORDER SUMMARY SIDEBAR, SHIPPING METHOD SELECTOR, PAYMENT METHOD SELECTOR, CLEANER LAYOUT
"use client";
import { useState } from "react";

export default function CheckoutFormIntermediate({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      {/* Shipping */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            placeholder="Full Name"
            className="border rounded-lg px-3 py-2"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />

          <input
            placeholder="Email"
            type="email"
            className="border rounded-lg px-3 py-2"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <input
            placeholder="Address"
            className="border rounded-lg px-3 py-2 col-span-2"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <input
            placeholder="City"
            className="border rounded-lg px-3 py-2"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />

          <input
            placeholder="ZIP Code"
            className="border rounded-lg px-3 py-2"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value)}
          />
        </div>
      </section>

      {/* Payment */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

        <div className="space-y-4">
          <input
            placeholder="Card Number"
            className="w-full border rounded-lg px-3 py-2"
            value={form.cardNumber}
            onChange={(e) => update("cardNumber", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="MM/YY"
              className="border rounded-lg px-3 py-2"
              value={form.expiry}
              onChange={(e) => update("expiry", e.target.value)}
            />

            <input
              placeholder="CVC"
              className="border rounded-lg px-3 py-2"
              value={form.cvc}
              onChange={(e) => update("cvc", e.target.value)}
            />
          </div>
        </div>
      </section>

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
        Complete Order
      </button>
    </form>
  );
}`,
];

const CheckoutForm = () => {
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

export default CheckoutForm;
