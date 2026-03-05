import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE BASIC PRODUCT CARD
export default function ProductCardBasic() {
  return (
    <div className="w-60 bg-white rounded-xl shadow p-4">
      <img
        src="https://via.placeholder.com/300"
        alt="Product"
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-800">
        Product Name
      </h3>

      <p className="text-blue-600 font-bold mt-1">€29.99</p>

      <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
}`,
  `INTERMIDIATE PRODUCT CARD
export default function ProductCardMedium() {
  return (
    <div className="w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          Product Name
        </h3>

        <p className="text-sm text-gray-500">
          Short description of the product goes here.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">€29.99</span>

          <div className="flex items-center gap-1 text-yellow-500">
            <span>★</span>
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}`,
  `ADVANCED PRODUCT CARD
export default function ProductCardAdvanced() {
  return (
    <div className="relative w-72 bg-white rounded-xl shadow hover:shadow-xl transition p-4">
      {/* Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
        SALE
      </span>

      {/* Wishlist */}
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition">
        ❤️
      </button>

      {/* Image */}
      <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          Premium Product Name
        </h3>

        <div className="flex gap-2">
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            New
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            Bestseller
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">€39.99</span>

          <div className="flex items-center gap-1 text-yellow-500">
            <span>★</span>
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
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
