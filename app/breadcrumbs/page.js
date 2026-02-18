import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `SIMPLE BREADCRUMBS (NEXT.JS APP ROUTER)
    import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}

            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
  
//USAGE
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings" }, // current page
  ]}
/>`,
  `BREADCRUMBS WITH ICONS(HEROICONS)
import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <ol className="flex items-center space-x-1">
        
        <li>
          <Link href="/" className="flex items-center hover:text-blue-600">
            <HomeIcon className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            <ChevronRightIcon className="w-4 h-4 mx-1 text-gray-400" />

            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
  
//USAGE
<Breadcrumbs
  items={[
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" },
  ]}
/>`,
  `AUTO-GENERATED BREADCRUMBS(READS URL PATH)
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AutoBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, index) => ({
    label: seg.charAt(0).toUpperCase() + seg.slice(1),
    href: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <nav className="text-sm text-gray-600 mb-6">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>

        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <ChevronRightIcon className="w-4 h-4 mx-1 text-gray-400" />

            {index === crumbs.length - 1 ? (
              <span className="text-gray-400">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

EXAMPLE: if URL is : /dashboard/settings/profile
BREADCRUMBS BECOME : Home / Dashboard / Settings / Profile
`,
];

const MegaMenu = () => {
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

export default MegaMenu;
