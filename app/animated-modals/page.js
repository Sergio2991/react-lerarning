import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `INTSRUCTIONS
    INSTALL FRAMER-MOTION
    yarn add framer-motion`,
  `BASIC
"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalBasic({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
  
USAGE
<ModalBasic open={open} onClose={() => setOpen(false)}>
  <h2 className="text-xl font-semibold">Basic Modal</h2>
  <p className="mt-2 text-gray-600">This is a simple animated modal.</p>
</ModalBasic>`,
  `INTERMEDIATE ANIMATED MODAL WITH BACKDROP BLUR, SLIDE-UP ANIMATION, CLOSE BUTTON, BETTER SPACING
"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalIntermediate({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
  
USAGE
<ModalIntermediate open={open} onClose={() => setOpen(false)}>
  <h2 className="text-xl font-semibold">Intermediate Modal</h2>
  <p className="mt-2 text-gray-600">Smooth slide-up animation.</p>
</ModalIntermediate>`,
  `ADVANCED ANIMATED MODAL WITH SPRINGY SCALE, FADE, SLIDE COMBO, ANIMATED OVERLAY BLUR, ANIMATED CONTENT DIVIDER, HEADER + FOOTER SLOTS, PREMIUM CARD LAYOUT
  
  
USAGE
<ModalAdvanced
  open={open}
  onClose={() => setOpen(false)}
  title="Advanced Modal"
  footer={
    <div className="flex justify-end gap-3">
      <button className="px-4 py-2 rounded-lg bg-gray-200">Cancel</button>
      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
        Confirm
      </button>
    </div>
  }
>
  <p className="text-gray-600">This modal has premium animations.</p>
</ModalAdvanced>`,
];

const AnimatedModals = () => {
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

export default AnimatedModals;
