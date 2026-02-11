import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE 3 COLUMN FOOTER (RESPONSIVE)
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Cookies</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 MyCompany. All rights reserved.
      </div>
    </footer>
  );
}`,
  `PROFESSIONAL 4 COLUMN SAAS FOOTER(MOST POPULAR)
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">MyBrand</h2>
          <p className="text-gray-400 text-sm">
            Building modern web experiences with speed and elegance.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12">
        © 2026 MyBrand. All rights reserved.
      </div>
    </footer>
  );
}`,
  `FOOTER WITH NEWSLETTER SIGN UP (MODERN UI)
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 outline-none"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12">
        © 2026 MyCompany. All rights reserved.
      </div>
    </footer>
  );
}`,
];

const FooterWithColumns = () => {
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

export default FooterWithColumns;
