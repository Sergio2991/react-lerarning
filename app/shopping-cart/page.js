import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [`BASIC DRAWER OPEN/CLOSE AND SHOW PLACEHOLDER CONTENT
    "use client";
import { motion } from "framer-motion";

export default function ShoppingCartDrawerBasic({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <p className="text-gray-600">Cart is empty</p>
      </motion.div>
    </>
  );
}`,
`INTERMEDIATE WITH ITEM LIST, REMOVE BUTTON, SUBTOTAL, CHECKOUT BUTTON
"use client";
import { motion } from "framer-motion";

export default function ShoppingCartDrawerIntermediate({
  open,
  onClose,
  items = [],
  onRemove,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 p-6 flex flex-col"
      >
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        <div className="flex-1 overflow-y-auto space-y-4">
          {items.length === 0 && (
            <p className="text-gray-600">Your cart is empty</p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </motion.div>
    </>
  );
}`,
`ADVANCED WITH THUMBNAILS, QUANTITY SELECTOR, SMOOTH ANIMATIONS, EMPTY STATE ILLUSTRATION, STICKY FOOTER, BETTER LAYOUT
"use client";
import { motion } from "framer-motion";

export default function ShoppingCartDrawerAdvanced({
  open,
  onClose,
  items = [],
  onRemove,
  onUpdateQty,
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col"
      >
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 && (
            <div className="text-center text-gray-600 mt-20">
              <div className="text-6xl mb-4">🛒</div>
              Your cart is empty
            </div>
          )}

          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />

              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </motion.div>
    </>
  );
}`,];

const ProtectedRouteWrapper = () => {
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

export default ProtectedRouteWrapper;
