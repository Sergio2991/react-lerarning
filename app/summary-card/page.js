import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `
    BASIC WITH SUBTOTAL AND TOTAL SUMMARY
"use client";

export default function SummaryCartBasic({ items = [], shipping = 0 }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const total = subtotal + shipping;

  return (
    <div className="border rounded-lg p-4 space-y-3 max-w-sm">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>{subtotal.toFixed(2)}€</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>{shipping.toFixed(2)}€</span>
      </div>

      <div className="flex justify-between font-semibold text-lg pt-3 border-t">
        <span>Total</span>
        <span>{total.toFixed(2)}€</span>
      </div>
    </div>
  );
}`,
  `INTERMEDIATE WITH ITEM LIST, THUMBNAILS, BETTER LAYOUT, EDIT CART
"use client";

export default function SummaryCartIntermediate({
  items = [],
  shipping = 0,
  onEditCart,
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const total = subtotal + shipping;

  return (
    <div className="border rounded-lg p-6 space-y-6 max-w-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        {onEditCart && (
          <button
            onClick={onEditCart}
            className="text-blue-600 text-sm hover:underline"
          >
            Edit Cart
          </button>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={item.image}
              className="w-16 h-16 rounded-lg border object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">
                {item.qty} × {item.price}€
              </p>
            </div>
            <p className="font-medium">
              {(item.qty * item.price).toFixed(2)}€
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)}€</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping.toFixed(2)}€</span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg pt-3 border-t">
        <span>Total</span>
        <span>{total.toFixed(2)}€</span>
      </div>
    </div>
  );
}`,
  `ADVANCED WITH FRAMER MOTION ANIMATION, PROMO CODE INPUT, SHIPPING SELECTOR, TAX CALCULATION, CLEANER UI
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SummaryCartAdvanced({
  items = [],
  shippingOptions = [
    { id: "standard", label: "Standard (4.99€)", cost: 4.99 },
    { id: "express", label: "Express (12.99€)", cost: 12.99 },
  ],
  taxRate = 0.22,
  onApplyCoupon,
}) {
  const [shipping, setShipping] = useState(shippingOptions[0]);
  const [coupon, setCoupon] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax + shipping.cost;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-lg p-6 space-y-6 max-w-sm"
    >
      <h2 className="text-lg font-semibold">Order Summary</h2>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <img
              src={item.image}
              className="w-16 h-16 rounded-lg border object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">
                {item.qty} × {item.price}€
              </p>
            </div>
            <p className="font-medium">
              {(item.qty * item.price).toFixed(2)}€
            </p>
          </motion.div>
        ))}
      </div>

      {/* Shipping */}
      <div className="space-y-2">
        <p className="font-medium">Shipping</p>
        {shippingOptions.map((opt) => (
          <label key={opt.id} className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              checked={shipping.id === opt.id}
              onChange={() => setShipping(opt)}
            />
            {opt.label}
          </label>
        ))}
      </div>

      {/* Coupon */}
      <div className="space-y-2">
        <p className="font-medium">Promo Code</p>
        <div className="flex gap-2">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter code"
            className="flex-1 border rounded-lg px-3 py-2"
          />
          <button
            onClick={() => onApplyCoupon?.(coupon)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Totals */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)}€</span>
        </div>

        <div className="flex justify-between">
          <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
          <span>{tax.toFixed(2)}€</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping.cost.toFixed(2)}€</span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg pt-3 border-t">
        <span>Total</span>
        <span>{total.toFixed(2)}€</span>
      </div>
    </motion.div>
  );
}`,
];

const SummaryCard = () => {
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

export default SummaryCard;
