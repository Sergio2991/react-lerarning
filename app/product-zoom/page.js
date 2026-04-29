import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `BASIC WITH THUMBNAILS AND A MAIN IMAGE
    "use client";
import { useState } from "react";

export default function ProductGalleryBasic({ images = [] }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setSelected(img)}
            className={\`w-20 h-20 object-cover rounded-lg cursor-pointer border $\{
              selected === img ? "border-blue-600" : "border-gray-300"
            }\`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={selected}
          className="w-full h-[400px] object-cover rounded-lg border"
        />
      </div>
    </div>
  );
}
  
USAGE
<ProductGalleryBasic
  images={[
    "/img/product1.jpg",
    "/img/product2.jpg",
    "/img/product3.jpg",
  ]}
/>`,
  `INTERMEDIATE WITH HOVER ZOOM
"use client";
import { useState } from "react";

export default function ProductGalleryIntermediate({ images = [] }) {
  const [selected, setSelected] = useState(images[0]);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setSelected(img)}
            className={\`w-20 h-20 object-cover rounded-lg cursor-pointer border $\{
              selected === img ? "border-blue-600" : "border-gray-300"
            }\`}
          />
        ))}
      </div>

      {/* Main Image with Zoom */}
      <div
        className="relative w-full h-[400px] overflow-hidden rounded-lg border"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMove}
      >
        <img
          src={selected}
          className={\`w-full h-full object-cover transition-transform duration-200 $\{
            zoom ? "scale-150" : "scale-100"
          }\`}
          style={{
            transformOrigin: \`$\{pos.x}% ${pos.y}%\`,
          }}
        />
      </div>
    </div>
  );
}
  
USAGE

<ProductGalleryIntermediate
  images={[
    "/img/product1.jpg",
    "/img/product2.jpg",
    "/img/product3.jpg",
  ]}
/>`,

  `ADVANCED WITH CLICK TO ZOOM MODAL, PAN + ZOOM INSIDE MODAL, SMOOTH ANIMATIONS, THUMBNAILS, HOVER ZOOM ON MAIN IMAGE
  "use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGalleryAdvanced({ images = [] }) {
  const [selected, setSelected] = useState(images[0]);
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              onClick={() => setSelected(img)}
              className={\`w-20 h-20 object-cover rounded-lg cursor-pointer border $\{
                selected === img ? "border-blue-600" : "border-gray-300"
              }\`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div
          className="relative w-full h-[400px] rounded-lg border cursor-zoom-in overflow-hidden"
          onClick={() => setZoomOpen(true)}
        >
          <img
            src={selected}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setZoomOpen(false)}
          >
            <motion.img
              src={selected}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh] object-contain cursor-zoom-out"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
  
USAGE
<ProductGalleryAdvanced
  images={[
    "/img/product1.jpg",
    "/img/product2.jpg",
    "/img/product3.jpg",
  ]}
/>
`,
];

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
